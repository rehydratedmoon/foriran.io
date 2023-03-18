import React, {useEffect, useState} from "react";
import {usePWA} from "./PWAProvider";

const InstallPWAButton = () => {
  const {supportsPWA, promptEvent, setPromptEvent} = usePWA();
  const [isTooEarly, setIsTooEarly] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsTooEarly(false);
    }, 2000);
  }, []);

  return (
    <div className="space-y-6">
      <button
        className="btn-prm-grd fw-500 bf-i-ph-download-simple"
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
            می‌توانید از مرورگر کروم برای اندروید و ویندوز، و مرورگر سافاری برای iOS استفاده کنید.
          </p>
          <p>
            فهرست مرورگرهای دارای امکانات PWA را
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
