import { Loader2 } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "icon";
  loading?: boolean;
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      className = "",
      loading = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const isDisabled = loading || disabled;

    const variants = {
      default: "rounded-md sm:text-sm text-xs md:px-4 px-3 py-2",
      icon: "p-2 rounded-md",
    }[variant];

    return (
      <button
        ref={ref}
        className={`flex items-center justify-center transition-colors duration-300 ease-in-out ${variants} ${className}`}
        disabled={isDisabled}
        {...props}
      >
        {loading ? <Loader2 className="size-5 animate-spin" /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
