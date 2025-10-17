import { MonitorCog, Moon, Sun } from "lucide-react";
import { Tooltip } from "../ui/Tooltip";
import { useTheme } from "../theme/useTheme";
import type { Theme } from "@/types/theme-types";

interface FloatingToolbarProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

export const FloatingToolbar = () => {
  const { theme, setTheme } = useTheme();

  const DATA_THEMES: { name: Theme; icon: React.ReactNode }[] = [
    { name: "light", icon: <Sun className="size-4" /> },
    { name: "dark", icon: <Moon className="size-4" /> },
    { name: "system", icon: <MonitorCog className="size-4" /> },
  ];

  return (
    <div className="flex gap-2">
      {DATA_THEMES.map((dataTheme) => (
        <ButtonIcon
          key={dataTheme.name}
          text={dataTheme.name}
          icon={dataTheme.icon}
          isActive={theme === dataTheme.name}
          onClick={() => setTheme(dataTheme.name)}
        />
      ))}
    </div>
  );
};

const ButtonIcon = ({ text, icon, onClick, isActive }: FloatingToolbarProps) => {
  return (
    <Tooltip content={`Theme ${text}`} arrow={false} disabled={isActive}>
      <button
        onClick={onClick}
        aria-label={`Switch to ${text} theme`}
        disabled={isActive}
        className={`p-2 rounded-full transition-colors ${
          isActive
            ? "bg-stone-200 dark:bg-stone-700"
            : "opacity-60 hover:opacity-100 cursor-pointer"
        }`}
      >
        {icon}
      </button>
    </Tooltip>
  );
};