import usePWAUpdatePrompt from "@/hooks/usePWAUpadatePrompt";
import Icon from "@/components/Icon";
import InstallPWAButton from "@/components/InstallPWAButton";
import Head from "next/head";

// import localFont from "@next/font/local";

// const myFont = localFont({ src: "../public/fonts/estedad/fonts/woff2/Estedad-Bold.woff2" });

const Page = () => {
  usePWAUpdatePrompt();
  return (
    <div className="space-y-8">
      <Head>
        <title>برای ایران</title>
      </Head>
      {/* <p className={myFont.className}>تستستستسس بسب سب سب س </p> */}
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
            <Icon name="i-ph-list" className="!vertical-middle mx-2" />
            کلیک کنید تا منو را ببینید.
          </li>
          <li>روی هر کدام کلیک کنید تا به برگه مورد نظر بروید.</li>
        </ol>
        <h2>دسترسی آفلاین (بدون اینترنت)</h2>
        <p>با نصب برنامک (Application) می‌توانید بدون اینترنت به تمام محتوا دسترسی داشته باشید.</p>
        <InstallPWAButton />
        <ol>
          <li>برای دسترسی بدون اینترنت می‌توانید برنامک (Application) را نصب کنید.</li>
          <li>در پنجره باز شده گزینه بله را بزنید.</li>
          <li>پس از نصب اپلیکیشن، می‌توانید بدون اینترنت همه محتوا وبسایت را در اپلیکیشن ببینید.</li>
          <li>برای دریافت آخرین محتواها، زمانی که به اینترنت دسترسی دارید وارد برنامک شوید</li>
        </ol>
        <p className="text-tiny-note">
          این برنامک یک
          {` `}
          <a href="https://en.wikipedia.org/wiki/Progressive_web_app">Progressive Web Application</a>
          {` `}
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
        <p>
          شبکه‌های اجتماعی رسانه و راه ارتباطی اصلی در جنبش زن، زندگی، آزادی است. شبکه‌های اجتماعی کمک می‌کنند همه
          رسانه‌ای داشته باشند که اتفاق بی‌نظیریست.
        </p>
        <p>اما از طرفی، پر از موج هستند و محتواهای مهم براحتی گم یا فراموش می‌شوند.</p>
        <p>
          <a href="/about-us" target="_blank" className="">
            ما گروهی از مهاجران ایرانی
          </a>
          {` `}
          این وبگاه را راه‌انداختیم تا در کنار شبکه‌های اجتماعی، داده‌ها و محتواهای مهم انقلاب را دسترسی‌پذیر و قابل
          جستجو کنیم.
        </p>
      </section>
      <section className="space-y-1em">
        <h2>همرسانی</h2>
        <p>برای ایران را به دیگران معرفی کنید.</p>
      </section>
      <section className="space-y-1em">
        <h2>همکاری</h2>
        <p>ما تیم کوچکی هستیم و برای رشد این کار به کمک شما نیاز داریم.</p>
        <p>اگر علاقه‌مند هستید در جمع‌آوری، خلاصه‌سازی و مدیریت ‌محتوا کمک کنید به ما پیام دهید</p>
        <a
          href="mailto:info@foriran.com"
          className="btn-prm inline-block bf-i-ph-envelope-simple-bold before:( opacity-100 )"
        >
          <span className="">ایمیل ما</span>
        </a>
      </section>
    </div>
  );
};

export default Page;
