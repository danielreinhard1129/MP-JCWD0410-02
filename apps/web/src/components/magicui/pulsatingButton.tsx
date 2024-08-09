"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#d80073bc",
  duration = "2.7s",
  ...props
}: PulsatingButtonProps) {
  return (
    <Link href="/landingpage">
      <button
        className={cn(
          "relative flex cursor-pointer items-center justify-center rounded-xl bg-[#d80072] px-4 py-3 text-center text-xl font-bold text-white outline-none",
          className,
        )}
        style={
          {
            "--pulse-color": pulseColor,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...props}
      >
        <div className="relative z-10">{children}</div>
        <div className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg bg-inherit" />
      </button>
    </Link>
  );
}
