import usePWAUpdatePrompt from "@/hooks/usePWAUpadatePrompt";
import Icon from "@/components/Icon";

const Page = () => {
  usePWAUpdatePrompt();
  return (
    <div className="space-y-8">
      <section className="">
        <h1 className="sr-only">برای ایران</h1>
        <div>
          <p className="p-1 font-family-heading fw-400 text-5xl sm:text-7xl !leading-1.2em gradient-effect ">
            محتوا + دسترسی ← آگاهی
          </p>
          <p className="p-1 font-family-heading fw-400 text-5xl sm:text-4xl !leading-1.2em gradient-effect">
            آگاهی + کنش‌گری + نبرد ← ایرانی آزاد
          </p>
        </div>
        <p className={"mt-10"}>
          وبگاه
          <strong> برای ایران </strong>
          تلاشی است برای گردآوری و دسترسی‌پذیر کردن داده‌ها، اطلاعات و محتواهای مهم انقلاب ایران
        </p>
      </section>
      <section className="space-y-8">
        <h2>از اینجا شروع کنید</h2>
        <ol>
          <li>همه موضوعات در منوی کناری هستند.</li>
          <li>
            در موبایل باید روی
            <Icon name="i-ph-list" />
            کلیک کنید تا منو را ببینید.
          </li>
          <li>روی هر کدام کلیک کنید تا به برگه مورد نظر بروید.</li>
        </ol>
        <h2>دسترسی آفلاین (بدون اینترنت)</h2>
        <p>با نصب برنامک (Application) می‌توانید بدون اینترنت به تمام محتوا دسترسی داشته باشید.</p>

        <ol>
          <li>برای دسترسی بدون اینترنت می‌توانید برنامک (Application) را نصب کنید.</li>
          <li>در پنجره باز شده گزینه بله را بزنید.</li>
          <li>پس از نصب اپلیکیشن، می‌توانید بدون اینترنت همه محتوا وبسایت را در اپلیکیشن ببینید.</li>
          <li>برای دریافت آخرین محتواها، زمانی که به اینترنت دسترسی دارید وارد برنامک شوید</li>
        </ol>

        <p className="text-tiny-note">
          این برنامک یک
          <a href="https://en.wikipedia.org/wiki/Progressive_web_app">Progressive Web Application </a>
          یا PWA است. یعنی یک نسخه از کل وبسایت دانلود می‌شود به کمک قابلیت‌های PWA مرورگر‌های امروزی بر روی گوشی یا
          لپتاپ مانند یک اپلیکیشن کار می‌کند.{" "}
        </p>
      </section>
      <section className="space-y-8">
        <h2>
          چرا
          <strong> برای ایران </strong>
          {` `} را راه‌انداختیم؟
        </h2>
        <p>شبکه‌های اجتماعی رسانه و راه ارتباطی اصلی در جنبش زن، زندگی، آزادی است.</p>
        <p>
          شبکه‌های اجتماعی کمک می‌کند همه بتوانند رسانه‌ای داشته باشند. اما از طرفی، پر از موج و تلاتم است و محتواهای
          مهم براحتی گم یا فراموش می‌شوند.
        </p>
        <p>ما این وبگاه را راه‌انداختیم تا داده‌ها و محتواهای مهم را دسترسی‌پذیر و قابل جستجو کنیم.</p>
      </section>
      <section className="space-y-8">
        <h2>ما که هستیم؟ </h2>
        <p>ما گروهی از مهاجران ایرانی هستیم که می‌خواهیم به کشورمان خدمت کنیم</p>
        <p>مأموریت ما جمع‌آوری محتوا و داده‌هایی است که برای پیروزی در نبرد با جمهوری اسلامی لازم است.</p>
        <a href="/who-we-are" target="_blank" className="af-i-ph-arrow-left">
          درباره ما
        </a>
      </section>
      <section className="space-y-1em">
        <h2>همرسانی</h2>
        <p>برای ایران را به دیگران معرفی کنید.</p>
      </section>
      <section className="space-y-1em">
        <h2>همکاری</h2>
        <p>ما تیم کوچکی هستیم و برای رشد این کار به کمک شما نیاز داریم.</p>
        <p>اگر در جمع‌آوری، خلاصه‌سازی و مدیریت ‌محتوا علاقه‌مند هستند به ما پیام دهید</p>
        <a href="mailto:info@foriran.com" className="btn-prm inline-block bf-i-ph-envelope-simple">
          ایمیل ما
        </a>
      </section>
    </div>
  );
};

export default Page;
