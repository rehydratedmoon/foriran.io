import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";

const useColorScheme = (): { theme: Theme } & AnyProps => {
  const { theme, setTheme } = useTheme();

  const [hasMountedInBrowser, setHasMountedInBrowser] = useState(false);
  useEffect(() => {
    setHasMountedInBrowser(true);
  }, []);
  const toggleTheme = () => {
    if (!hasMountedInBrowser) return;
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("system");
  };

  if (theme === "dark") return { theme: "dark", toggleTheme, setTheme, hasMountedInBrowser };
  if (theme === "light") return { theme: "light", toggleTheme, setTheme, hasMountedInBrowser };
  return { theme: "system", toggleTheme, setTheme, hasMountedInBrowser };
};

export default useColorScheme;
