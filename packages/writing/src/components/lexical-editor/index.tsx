"use client";

import { useAtomValue } from "jotai";
import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  ParagraphNode,
} from "lexical";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Toaster } from "sonner";

import CommentList from "@/components/comment/comment-list";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  probDistractionAtom,
  typingSpeedAtom,
  UserBehavior,
  userBehaviorAtom,
} from "@/stores/user-behavior";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { MarkNode } from "@lexical/mark";
import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

import AiHighlightPlugin, {
  AiHiglightNode,
} from "./plugins/ai-highlight-plugin";
import CommentPlugin from "./plugins/comment-plugin";
import {
  $createCustomParagraphNode,
  CustomParagraphNode,
} from "./plugins/custom-paragraph-plugin";
import TimeTravelPlugin from "./plugins/timetravel-plugin";
import TreeViewPlugin from "./plugins/treeview-plugin";
import UserBehaviorDetectorPlugin from "./plugins/user-behavior-detector-plugin";

function prepopulatedRichText() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const paragraph = $createCustomParagraphNode(false, false);
    paragraph.append(
      $createTextNode(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla orci vel ex sagittis pretium. Donec a metus sodales, auctor erat nec, laoreet arcu. In ut nunc vel mi molestie varius eu sit amet ligula. Praesent a consequat tortor. Nullam consequat, metus eu pellentesque ultricies, turpis tortor tempor est, a egestas augue dui in felis. Etiam consectetur, felis sed tincidunt tempor, purus lorem rhoncus sem, eu fermentum nisi dui porttitor lectus. Nunc venenatis volutpat risus ut eleifend."
      )
    );
    root.append(paragraph);

    const paragraph2 = $createCustomParagraphNode(false, false);
    paragraph2.append(
      $createTextNode(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla orci vel ex sagittis pretium. Donec a metus sodales, auctor erat nec, laoreet arcu. In ut nunc vel mi molestie varius eu sit amet ligula. Praesent a consequat tortor. Nullam consequat, metus eu pellentesque ultricies, turpis tortor tempor est, a egestas augue dui in felis. Etiam consectetur, felis sed tincidunt tempor, purus lorem rhoncus sem, eu fermentum nisi dui porttitor lectus. Nunc venenatis volutpat risus ut eleifend."
      )
    );
    root.append(paragraph2);
  }
}

interface EditorProps {
  debugMode?: boolean;
  onUserBehaviorChange?: (behavior: UserBehavior) => void;
}

function onError(error: Error) {
  console.error(error);
}

export default function Editor({
  debugMode = false,
  onUserBehaviorChange,
}: EditorProps) {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system";
  };

  const config: InitialConfigType = {
    namespace: "lexical-editor",
    theme: {
      root: "prose dark:prose-invert lg:prose-xl focus:outline-none flex-1 mx-auto",
      link: "cursor-pointer",
      placeholder: "text-gray-400",
      text: {
        bold: "font-semibold",
        underline: "underline",
        italic: "italic",
        strikethrough: "line-through",
        underlineStrikethrough: "underlined-line-through",
      },
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
      MarkNode,
      AiHiglightNode,
      CustomParagraphNode,
      {
        replace: ParagraphNode,
        with(node) {
          return new CustomParagraphNode(false, false);
        },
      },
    ],
    onError,
    editorState: prepopulatedRichText,
  };

  const typingSpeed = useAtomValue(typingSpeedAtom);
  const probDistraction = useAtomValue(probDistractionAtom);
  const userBehavior = useAtomValue(userBehaviorAtom);

  useEffect(() => {
    onUserBehaviorChange?.(userBehavior);
  }, [userBehavior]);

  return (
    <div className="relative h-full overflow-auto">
      <Toaster position="bottom-left" theme={theme} />
      {debugMode && (
        <Card className="fixed bottom-10 right-10">
          <CardHeader>
            <CardTitle>User Behavior</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium leading-none">Typing Speed</p>
                <p className="text-sm text-muted-foreground">
                  {typingSpeed.toFixed(2)} chars/s
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium leading-none">
                  Distraction Count
                </p>
                <p className="text-sm text-muted-foreground">
                  {probDistraction} times
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            {/* <Button
                onClick={() => {
                  editor.dispatchCommand(TOGGLE_AI_HIGHLIGHT_COMMAND, "");
                }}
              >
                toggleHighlight
              </Button> */}
          </CardFooter>
        </Card>
      )}
      <div className="h-full flex flex-row justify-center space-x-4">
        <div
          className={
            "w-full relative p-6 rounded-xl border bg-card text-card-foreground shadow"
          }
        >
          <LexicalComposer initialConfig={config}>
            <RichTextPlugin
              contentEditable={<ContentEditable />}
              placeholder={null}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <AutoFocusPlugin />

            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <HistoryPlugin />
            <ListPlugin />
            <LinkPlugin />
            <TabIndentationPlugin />

            <AiHighlightPlugin debugMode={debugMode} />
            <UserBehaviorDetectorPlugin />
            <CommentPlugin />
            <>
              {!!debugMode && (
                <div className="absolute bottom-0 left-0 border border-red-500 overflow-auto max-w-full h-1/2">
                  <TreeViewPlugin />
                </div>
              )}
            </>
            <TimeTravelPlugin />
          </LexicalComposer>
        </div>

        <Separator orientation={"vertical"} />
        <CommentList />
      </div>
    </div>
  );
}
