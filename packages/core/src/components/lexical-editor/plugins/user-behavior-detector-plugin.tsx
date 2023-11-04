"use client";

import { useSetAtom } from "jotai";
import React, { useEffect } from "react";

import {
  probDistractionAtom,
  typingSpeedAtom,
  UserBehavior,
} from "@/stores/user-behavior";
import { useLeavingCount } from "@/utils/hooks/use-leaving-count";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export default function UserBehaviorDetectorPlugin() {
  const [editor] = useLexicalComposerContext();
  const setTypingSpeed = useSetAtom(typingSpeedAtom);
  const setProbDistraction = useSetAtom(probDistractionAtom);
  const lastCharacterCount = React.useRef(0);
  const lastTime = React.useRef(Date.now());
  const { leaving, count } = useLeavingCount();

  useEffect(() => {
    const removeTextContentListener = editor.registerTextContentListener(
      (textContent) => {
        const characterCount = textContent.length;
        const currentTime = Date.now();

        const typingSpeed =
          ((characterCount - lastCharacterCount.current) /
            (currentTime - lastTime.current)) *
          1000;

        if (typingSpeed > 0) {
          setTypingSpeed(typingSpeed);
        }

        lastCharacterCount.current = characterCount;
        lastTime.current = currentTime;
      }
    );

    return removeTextContentListener;
  }, []);

  useEffect(() => {
    setProbDistraction(count);
  }, [count]);

  return null;
}
