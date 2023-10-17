"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useRef } from "react";
import { useCompletion } from "ai/react";
import { getPrevText } from "@/lib/editor";
import { useLeavingCount } from "@/utils/hooks/use-leaving-count";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import AiCommentExtension from "./extensions/ai-comment";
import { Toaster } from "sonner";
import UserBehaviorDetector from "./extensions/user-behavior-detector";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const BLOCK_TIMEOUT = 5000;

const Editor = () => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const { leaving, count, clearCount } = useLeavingCount(() => {
    // clear timeout
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {
            class: "relative",
          },
        },
      }),
      Placeholder.configure({
        placeholder: "Start writing...",
      }),
      AiCommentExtension.configure({
        complete: (prompt) => {
          return commentComplete(prompt);
        },
      }),
      UserBehaviorDetector,
    ],

    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert h-full w-full mx-auto focus:outline-none",
      },
    },

    onUpdate() {
      // leaving logic
      clearCount();

      // timeout logic
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      const timeout = setTimeout(() => {
        if (leaving) {
          return;
        }

        toast("Seems like your writing is blocked", {
          description: "Would you like AI to finish your sentence?",
          action: {
            label: "Complete",
            onClick: () => {
              if (editor) {
                complete(
                  getPrevText(editor, {
                    chars: 5000,
                  })
                );
              }
            },
          },
        });

        setFocus();
      }, BLOCK_TIMEOUT);

      timeoutId.current = timeout;
    },
  });

  const prev = useRef("");

  const { complete, completion, isLoading, stop } = useCompletion({
    id: "essaypilot",
    api: "/api/generate",
  });

  const { complete: ideaComplete, isLoading: ideaIsLoading } = useCompletion({
    id: "essaypilot",
    api: "/api/idea",
  });

  const { complete: commentComplete, isLoading: commentIsLoading } =
    useCompletion({
      id: "essaypilot",
      api: "/api/generate/comment",
    });

  useEffect(() => {
    const diff = completion.slice(prev.current.length);
    prev.current = completion;
    if (diff) {
      editor?.commands.insertContent(diff);
    }
  }, [completion, isLoading]);

  // if the page is not empty, and leaveCount > 4, then show toast
  useEffect(() => {
    if (
      count > 4 &&
      editor?.getHTML() !== "<h1></h1>" &&
      editor?.getText() !== ""
    ) {
      clearCount();

      toast("Don't know how to continue?", {
        description: "Would you like AI to give you some ideas?",
        action: {
          label: "Ideas",
          onClick: () => {
            if (!editor) throw new Error("Editor not found");

            toast.promise(
              ideaComplete(
                getPrevText(editor, {
                  chars: 5000,
                })
              ),
              {
                loading: "Generating ideas...",
                error: "Failed to generate ideas",
                success: (completion) => {
                  if (!completion) throw new Error("Failed to generate ideas");
                  const ideas = JSON.parse(completion) as string[];

                  return (
                    <div className="space-y-2">
                      {ideas.map((idea, index) => (
                        <Button
                          variant={"outline"}
                          className="w-full"
                          key={index}
                          onClick={() => {
                            if (editor) {
                              complete(
                                getPrevText(editor, {
                                  chars: 5000,
                                }) +
                                  "Now, write about this idea: " +
                                  idea
                              );
                            }
                          }}
                        >
                          {idea}
                        </Button>
                      ))}
                    </div>
                  );
                },
              }
            );
          },
        },
      });

      clearCount();
    }
  }, [count]);

  const setFocus = () => {
    editor?.chain().focus().run();
  };

  if (!editor) {
    return null;
  }

  return (
    <div
      className="relative border rounded-lg shadow-sm h-full p-10 bg-card flex flex-col overflow-auto"
      // onClick={setFocus}
    >
      <Toaster position="bottom-left" />
      <EditorContent editor={editor} />
      <Card className="absolute top-5 left-5">
        <CardHeader>
          <CardTitle>User Behavior</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium leading-none">Typing Speed</p>
              <p className="text-sm text-muted-foreground">
                {editor.storage.userBehaviorDetector
                  .user_behavior()
                  .typing_speed.toFixed(2)}{" "}
                chars/s
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium leading-none">
                Distraction Count
              </p>
              <p className="text-sm text-muted-foreground">
                {
                  editor.storage.userBehaviorDetector.user_behavior()
                    .prob_distraction
                }{" "}
                times
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <Toaster /> */}
    </div>
  );
};

export default Editor;
