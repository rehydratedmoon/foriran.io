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
      <section className="!mb-32">
        {/*<div>*/}
        {/*  <p className="p-1 font-family-heading fw-400 text-5xl sm:text-7xl !leading-1.2em gradient-effect ">*/}
        {/*    محتوا + دسترسی ← آگاهی*/}
        {/*  </p>*/}
        {/*  <p className="p-1 font-family-heading fw-400 text-5xl sm:text-4xl !leading-1.2em gradient-effect">*/}
        {/*    آگاهی + کنش‌گری + نبرد ← ایرانی آزاد*/}
        {/*  </p>*/}
        {/*</div>*/}
        <h1 className="unstyled gradient-effect font-family-heading fs-5xl  ">
          <span className="block leading-1em px-1 pt-10">دسترسی بهتر</span>
          <span className="block leading-1em px-1 pb-20">به اطلاعات مهم</span>
        </h1>

        <p className="mt-6 c-gray11">
          <strong className="fw-400"> «برای ایران» </strong>
          تلاشی است برای گردآوری، دسترسی‌پذیر و جستجو پذیر کردن
          <br/>
          داده‌ها و محتوای مهم انقلاب ایران
        </p>
      </section>
      <section className="space-y-8">
        <h2>از اینجا شروع کنید</h2>
        <ol>
          <li>
            <p>همه مطالب موجود در منوی کناری دسته‌بندی شده‌اند.</p>
            <p className="c-gray11">
              (در موبایل باید روی
              <Icon name="i-ph-list" className="!vertical-middle mx-2"/>
              کلیک کنید تا منو را ببینید.)
            </p>
          </li>
          <li>روی هر کدام کلیک کنید تا به برگه مورد نظر بروید.</li>
        </ol>
        <h2>دسترسی بدون اینترنت</h2>
        <div>
          <p>با نصب اپلیکیشن (Application) می‌توانید بدون اینترنت به تمام محتوا دسترسی داشته باشید.</p>
          <p>هر زمان دوباره اینترنت داشتید، برنامه را باز کنید تا محتوای بروز را دریافت کنید.</p>
        </div>
        <InstallPWAButton/>
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
        <div>
          <p>
            شبکه‌های اجتماعی، رسانه و راه ارتباطی اصلی در جنبش زن، زندگی، آزادی بوده‌اند. اما از طرفی، پر از موج هستند،
            محتواهای مهم فراموش می‌شوند و به راحتی قابل جستجو نیستند.
          </p>
          <p>
            <a href="/about-us" target="_blank" className="">
              ما گروهی از مهاجران ایرانی
            </a>
            {` `}
            این وبگاه را راه‌انداختیم تا در کنار شبکه‌های اجتماعی، داده‌ها و محتواهای مهم انقلاب را گردآوری، دسترسی‌پذیر
            و قابل جستجو کنیم.
          </p>
        </div>
      </section>
      {/* <section className="space-y-1em">
        <h2>همرسانی</h2>
        <p>برای ایران را به دیگران معرفی کنید.</p>
      </section> */}
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
