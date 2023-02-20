import usePWAUpdatePrompt from "@/hooks/usePWAUpadatePrompt";

const Page = () => {
  usePWAUpdatePrompt();
  return (
    <div className="space-y-8">
      <div>
        <h1>برای ایران</h1>
        <p>جایی برای سازماندهی محتوا انقلاب ایران</p>
      </div>
      <p>این وب‌سایت روزانه بروز می‌شود.</p>
    </div>
  );
};

export default Page;
