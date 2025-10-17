import React from "react";

interface DividerProps {
  text?: string;
  className?: string;
  textClassName?: string;
}

export const Divider: React.FC<DividerProps> = ({
  text,
  className = "",
  textClassName = "",
}) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      {text && (
        <span
          className={`mr-3 text-sm font-semibold whitespace-nowrap ${textClassName}`}
        >
          {text}
        </span>
      )}
      <div className="flex-grow border-t border-stone-300 dark:border-stone-700"></div>
    </div>
  );
};
