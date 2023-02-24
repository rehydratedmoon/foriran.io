import React, { useEffect, useState } from "react";

const InstallPWAButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);

  useEffect(() => {
    const handler: EventListenerOrEventListenerObject = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  if (!supportsPWA) {
    return (
      <>
        <button className="btn-prm bf-i-ph-download-simple" disabled>
          نصب اپلیکیشن
        </button>
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
      </>
    );
  }
  return (
    <button
      className="btn-prm bf-i-ph-download-simple"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={(e) => {
        e.preventDefault();
        if (!promptInstall) return;
        promptInstall.prompt();
      }}
    >
      نصب اپلیکیشن
    </button>
  );
};

export default InstallPWAButton;
