"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface Props extends Omit<ImageProps, "onError"> {
  fallbackEmoji?: string;
  fallbackBg?: string;
}

export default function ImageWithFallback({
  fallbackEmoji = "🍽️",
  fallbackBg = "linear-gradient(135deg, #2A1A0E 0%, #3D2010 60%, #5C1A0A 100%)",
  alt,
  ...props
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-2 select-none"
        style={{ background: fallbackBg }}
        aria-label={alt as string}
      >
        <span style={{ fontSize: "2.5rem", lineHeight: 1 }}>{fallbackEmoji}</span>
        <span className="text-[#F4E4C1]/30 text-xs font-medium tracking-wide uppercase">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      onError={() => setErrored(true)}
      {...props}
    />
  );
}
