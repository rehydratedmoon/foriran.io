import type {} from "next-themes";
import { HTMLAttributes } from "react";
import useColorScheme from "@/hooks/useColorScheme";

const textMap = {
  light: "تم روشن",
  dark: "تم تاریک",
  system: "تم سیستم",
};
const iconMap = {
  light: "bf-i-ph-circle-half",
  dark: "bf-i-ph-moon",
  system: "bf-i-ph-circle-half",
};
const ThemeToggler = ({ hasText = true, ...props }: { hasText?: boolean } & HTMLAttributes<HTMLButtonElement>) => {
  const { theme, toggleTheme, hasMountedInBrowser } = useColorScheme();

  if (!hasMountedInBrowser)
    return (
      <button {...props}>
        <span className="bf-i-ph-circle-half sr-only sm:not-sr-only capitalize">Auto</span>
      </button>
    );

  return (
    <button onClick={(e) => toggleTheme()} className="" {...props} title={textMap[theme]}>
      <span className={iconMap[theme]}>{hasText && textMap[theme]}</span>
    </button>
  );
};

export default ThemeToggler;
