import React, {useEffect, useState} from "react";
import {usePWA} from "./PWAProvider";

const InstallPWAButton = () => {
   const [supportsPWA, setSupportsPWA] = useState(false);
   const [promptEvent, setPromptEvent] = useState<any>(null);
   useEffect(() => {
     const handler: EventListenerOrEventListenerObject = (e) => {
       e.preventDefault();
       console.log('before install...');
       setPromptEvent(e);
       setSupportsPWA(true);
     };
     window.addEventListener('beforeinstallprompt', handler);

     return () => window.removeEventListener('transitionend', handler);
   }, []);

  // const {supportsPWA, promptEvent, setPromptEvent} = usePWA();
  const [isTooEarly, setIsTooEarly] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsTooEarly(false);
    }, 2000);
  }, []);

  return (
    <div class="space-y-6">
      <button
        class="btn-prm fw-500 bf-i-ph-download-simple"
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
        <div class="snack-warning">
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
