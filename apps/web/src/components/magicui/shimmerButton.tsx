import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  hoverBackground?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.09em",
      shimmerDuration = "2.7s",
      borderRadius = "100px",
      background = "#b1005b",
      hoverBackground = "#DB2777",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
      <Link href="/login">
        <button
          style={
            {
              "--spread": "90deg",
              "--shimmer-color": shimmerColor,
              "--radius": borderRadius,
              "--speed": shimmerDuration,
              "--cut": shimmerSize,
              "--bg": background,
              "--hover-bg": hoverBackground,
            } as CSSProperties
          }
          className={cn(
            "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden border border-white/10 px-3 py-4 text-white [background:var(--bg)] [border-radius:var(--radius)] sm:px-6",
            "transform-gpu transition-transform duration-500 ease-in-out active:translate-y-1",
            `${
              isHovered
                ? "z-50 transition duration-200 hover:[background:var(--hover-bg)]"
                : "[background:var(--bg)]"
            }`,
            className,
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={ref}
          {...props}
        >
          {/* spark container */}
          <div
            className={cn(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible [container-type:size]",
            )}
          >
            {/* spark */}
            <div className="animate-slide absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]">
              {/* spark before */}
              <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </div>
          </div>
          {children}

          {/* backdrop */}
          <div
            className={cn(
              "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
            )}
          />
        </button>
      </Link>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
