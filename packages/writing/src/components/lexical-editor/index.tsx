"use client";

import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { Toaster } from "sonner";

import {
  probDistractionAtom,
  typingSpeedAtom,
  UserBehavior,
  userBehaviorAtom,
} from "@/stores/user-behavior";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@tompi/ui";
import AiHighlightPlugin, {
  AiHiglightNode,
} from "./plugins/ai-highlight-plugin";
import UserBehaviorDetectorPlugin from "./plugins/user-behavior-detector-plugin";
import { useTheme } from "next-themes";
import { Separator } from "@tompi/ui";
import CommentList from "@/components/comment/comment-list";

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

  const config = {
    namespace: "lexical-editor",
    theme: {
      root: "prose dark:prose-invert focus:outline-none flex-1",
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
      AiHiglightNode,
    ],
    onError,
  };

  const typingSpeed = useAtomValue(typingSpeedAtom);
  const probDistraction = useAtomValue(probDistractionAtom);
  const userBehavior = useAtomValue(userBehaviorAtom);

  useEffect(() => {
    onUserBehaviorChange?.(userBehavior);
  }, [userBehavior]);

  return (
    <div className="relative border rounded-lg shadow-sm h-full p-10 bg-card flex flex-col overflow-auto">
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

      <div className="flex-1 flex flex-row">
        <LexicalComposer initialConfig={config}>
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={
              <span className="lexical-placeholder">Input something...</span>
            }
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
        </LexicalComposer>

        <Separator orientation={"vertical"} />
        <CommentList />
      </div>
    </div>
  );
}
