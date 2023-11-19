"use client";

import dynamic from "next/dynamic";

const TW = dynamic(() => import("typewriter-effect"), {
  ssr: false,
});

interface TypeWriterProps extends React.HTMLAttributes<HTMLDivElement> {
  strings: string[];
}

export default function TypeWriter({ strings, ...props }: TypeWriterProps) {
  return (
    <TW
      options={{
        strings,
        autoStart: true,
        loop: true,
      }}
      {...props}
    />
  );
}
