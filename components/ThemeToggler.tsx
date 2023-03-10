import type {} from "next-themes";
import { HTMLAttributes } from "react";
import useColorScheme from "@/hooks/useColorScheme";
import Icon from "./Icon";

const textMap = {
  light: "تم روشن",
  dark: "تم تاریک",
  system: "تم سیستم",
};
const iconMap = {
  light: "i-ph-sun",
  dark: "i-ph-moon",
};
const ThemeToggler = ({ hasText = true, ...props }: { hasText?: boolean } & HTMLAttributes<HTMLButtonElement>) => {
  const { theme, resolvedTheme, toggleTheme, hasMountedInBrowser } = useColorScheme();

  return (
    <button onClick={(e) => toggleTheme()} {...props} title={textMap[hasMountedInBrowser ? theme : "system"]}>
      <Icon name={iconMap[resolvedTheme]} className={`${hasText ? "opacity-50" : ""} `} />
      {hasText && <span className="c-gray11 fw-300">{textMap[hasMountedInBrowser ? theme : "system"]}</span>}
    </button>
  );
};

export default ThemeToggler;
