import type { } from "next-themes";
import { HTMLAttributes } from "react";
import useColorScheme from "@/hooks/useColorScheme";

const ThemeToggler = ({ ...props }: HTMLAttributes<HTMLButtonElement>) => {
  const { theme, toggleTheme, hasMountedInBrowser } = useColorScheme();

  if (!hasMountedInBrowser)
    return (
      <button {...props}>
        <span className="bf-i-ph-circle-half sr-only sm:not-sr-only capitalize">Auto</span>
      </button>
    );

  return (
    <button onClick={(e) => toggleTheme()} className="bg-red3" {...props}>
      {theme === "system" && (
        <span className="bf-i-ph-circle-half ">تم سیستم</span>
      )}
      {theme === "dark" && (
        <span className="bf-i-ph-moon ">تم تاریک</span>
      )}
      {theme === "light" && (
        <span className="bf-i-ph-sun ">تم روشن</span>
      )}
    </button>
  );
};

export default ThemeToggler;
