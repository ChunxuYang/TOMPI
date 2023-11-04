"use client";

import { useAtom, useAtomValue } from "jotai";
import { Toaster } from "sonner";

import {
  probDistractionAtom,
  typingSpeedAtom,
  UserBehavior,
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
// import dynamic from "next/dynamic";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import AiHighlightPlugin, {
  AiHiglightNode,
  TOGGLE_AI_HIGHLIGHT_COMMAND,
} from "./plugins/ai-highlight-plugin";
import UserBehaviorDetectorPlugin from "./plugins/user-behavior-detector-plugin";

interface EditorProps {
  debugMode?: boolean;
  onUserBehaviorChange?: (behavior: UserBehavior) => void;
}

function onError(error: Error) {
  console.error(error);
}

export default function Editor({
  debugMode = true,
  onUserBehaviorChange,
}: EditorProps) {
  const config = {
    namespace: "lexical-editor",
    theme: {
      root: "prose dark:prose-invert h-full w-full mx-auto focus:outline-none",
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
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,

      AiHiglightNode,
    ],
    onError,
  };

  // const [editor] = useLexicalComposerContext();

  const typingSpeed = useAtomValue(typingSpeedAtom);
  const probDistraction = useAtomValue(probDistractionAtom);

  return (
    <div className="relative border rounded-lg shadow-sm h-full p-10 bg-card flex flex-col overflow-auto">
      <Toaster position="bottom-left" />
      {debugMode && (
        <Card className="absolute top-5 left-5">
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
      </LexicalComposer>
    </div>
  );
}
