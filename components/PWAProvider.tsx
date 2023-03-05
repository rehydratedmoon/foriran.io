
import { createContext, useContext, useEffect, useState } from "react";

const PWAContext = createContext<any>(null);

export default function PWAProvider({ children }: { children: React.ReactNode }) {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptEvent, setPromptEvent] = useState<any>(null);
  useEffect(() => {
    const handler: EventListenerOrEventListenerObject = (e) => {
      e.preventDefault();
      console.log("before install...");
      setPromptEvent(e);
      setSupportsPWA(true);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  return (
    <PWAContext.Provider value={{ supportsPWA, promptEvent, setPromptEvent }}>{children}</PWAContext.Provider>
  );
}


export const usePWA = () => {
  return useContext(PWAContext)
}