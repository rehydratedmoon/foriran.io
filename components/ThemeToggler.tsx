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
  light: "i-ph-circle-half",
  dark: "i-ph-moon",
  system: "i-ph-circle-half",
};
const ThemeToggler = ({ hasText = true, ...props }: { hasText?: boolean } & HTMLAttributes<HTMLButtonElement>) => {
  const { theme, toggleTheme, hasMountedInBrowser } = useColorScheme();

  return (
    <button onClick={(e) => toggleTheme()} {...props} title={textMap[hasMountedInBrowser ? theme : "system"]}>
      <Icon name={iconMap[hasMountedInBrowser ? theme : "system"]} className={hasText ? 'opacity-50' : ''} />
      {hasText && <span>{textMap[hasMountedInBrowser ? theme : "system"]}</span>}
    </button>
  );
};

export default ThemeToggler;
