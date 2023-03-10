import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
const useColorScheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [hasMountedInBrowser, setHasMountedInBrowser] = useState<boolean>(false);
  useEffect(() => {
    setHasMountedInBrowser(true);
  }, []);
  const toggleTheme = () => {
    if (!hasMountedInBrowser) return;
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("system");
  };

  let th: Theme = "system";
  if (theme === "dark") th = "dark";
  if (theme === "light") th = "light";
  let rth: Theme = "system";
  if (resolvedTheme === "dark") rth = "dark";
  if (resolvedTheme === "light") rth = "light";

  return { theme: th, resolvedTheme: rth, toggleTheme, setTheme, hasMountedInBrowser };
};

export default useColorScheme;
