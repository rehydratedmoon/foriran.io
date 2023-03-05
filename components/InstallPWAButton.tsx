import React, { useEffect, useState } from "react";
import { usePWA } from "./PWAProvider";

const InstallPWAButton = () => {
  const { supportsPWA, promptEvent, setPromptEvent } = usePWA();
  const [isTooEarly, setIsTooEarly] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsTooEarly(false);
    }, 2000);
  }, []);

  return (
    <div className="space-y-6">
      <button
        className="btn-prm bf-i-ph-download-simple-bold"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        disabled={!supportsPWA}
        onClick={async (e) => {
          e.preventDefault();
          if (!promptEvent) return;
          const result = await promptEvent.userChoice;
          console.log("🚀 ~ result:", result);
          setPromptEvent(null);
        }}
      >
        نصب اپلیکیشن
      </button>
      {!supportsPWA && !isTooEarly && (
        <div className="snack-warning">
          <p>مرورگر‌ شما از نصب PWA پیشتیبانی نمی‌کند.</p>
          <p>
            فهرست مرورگرهایی که این امکان را دارند را می‌توانید
            {` `}
            <a href="https://caniuse.com/web-app-manifest"> از اینجا</a>
            {` `}
            ببینید.
          </p>
        </div>
      )}
    </div>
  );
};

export default InstallPWAButton;
