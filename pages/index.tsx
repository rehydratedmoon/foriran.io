import usePWAUpdatePrompt from "@/hooks/usePWAUpadatePrompt";

const Page = () => {
  usePWAUpdatePrompt();
  return (
    <div className="space-y-8">
      <div>
        <h1>برای ایران</h1>
        <p>جایی برای سازماندهی محتوا انقلاب ایران</p>
      </div>
      <div>
        <p className="text-5xl -tracking-0.5 sm:text-7xl  sm:-tracking-0.7 !leading-[0.85em] fw-900 gradient-effect c-red12 c-tomato10">
          سازماندهی محتوای <br /> انقلاب ایران
        </p>
        <p className="c-gray11 max-w-[50ch] mt-2">
          محتوا‌های مهم درباره انقلاب ایران اینجا راحت در دسترسی شما قرار می‌گیرد.
        </p>
        <h1 className="H1 sr-only">IRAN Revolution</h1>
      </div>
      <p>این وب‌سایت روزانه بروز می‌شود.</p>
    </div>
  );
};

export default Page;
