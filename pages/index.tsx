import usePWAUpdatePrompt from "@/hooks/usePWAUpadatePrompt";
import Icon from "@/components/Icon";
import InstallPWAButton from "@/components/InstallPWAButton";
import Head from "next/head";

// import localFont from "@next/font/local";

// const myFont = localFont({ src: "../public/fonts/estedad/fonts/woff2/Estedad-Bold.woff2" });

const Page = () => {
  usePWAUpdatePrompt();
  return (
    <div className="space-y-32">
      <Head>
        <title>برای ایران</title>
      </Head>
      {/* <p className={myFont.className}>تستستستسس بسب سب سب س </p> */}
      <section className="">
        <img
          src="/images/banner.svg"
          alt=""
          className="w-full max-w-full max-w-min(100%,30rem) mx-auto px-10 dark:filter-invert dark:opacity-70"
        />
        <h1 className="unstyled  font-family-heading  text-12vw sm:text-7xl  text-center  ">
          <span className="block leading-1em px-1 ">دسترسی بهتر</span>
          <span className="block leading-1em px-1 pb-5 sm:pb-10">به اطلاعات مهم‌تر</span>
        </h1>
        <p className=" c-gray11 max-w-60ch  text-center mx-auto">
          <strong className="fw-400 "> «برای ایران» </strong>
          داده‌ها و محتوای مهم انقلاب ایران را سازماندهی می‌کند.
        </p>
      </section>
      <section>
        <ul className="grid grid-min-col-10rem gap-10 list-none">
          <li className="">
            <img src="/images/accessible.svg" alt="" className="-mb-4   w-5/7 dark:filter-invert dark:opacity-70"/>
            <p className="fw-700 font-family-heading text-2xl">دسترسی‌پذیر</p>
            <p className="text-note">همه از جمله کم‌بینایان، نابینایان و کورنگ‌ها می‌توانند از مطالب استفاده کنند </p>
          </li>
          <li className="">
            <img src="/images/focus.svg" alt="" className="-mb-4  w-5/7 dark:filter-invert dark:opacity-70"/>
            <p className="fw-700 font-family-heading text-2xl">متمرکز </p>
            <p className="text-note">
              بدور از موج‌ها و آشفتگی شبکه‌های اجتماعی، مطالب مهم را یکجا و ساختاریافته ببیند{" "}
            </p>
          </li>
          <li className="">
            <img src="/images/search.svg" alt="" className="-mb-4   w-5/7 dark:filter-invert dark:opacity-70"/>
            <p className="fw-700 font-family-heading text-2xl">جستجو‌پذیر</p>
            <p className="text-note">
              نگران گم کردن مطالب نباشید. هر چیزی را سریع از منو کناری یا جستجو گوگل دوباره پیدا کنید
            </p>
          </li>
          {/* <li className="">
            <img src="/images/search.svg" alt="" className="w-3/5" />
            <p className="fw-700 font-family-heading text-2xl">ایمن و متن‌باز</p>
            <p className="text-note">
چیزی برای پنهان کردن وجود ندارد. با هم  برای ایران را می‌سازیم؟            </p>
          </li> */}
        </ul>
      </section>
      <section className="space-y-8">
        <img src="/images/arrow-wavy.svg" alt="" className="w-10 opacity-30 dark:filter-invert"/>
        <h2 className="H1 !mt-0">از اینجا شروع کنید</h2>
        <ol>
          <li>
            <p>همه مطالب موجود در منوی کناری دسته‌بندی شده‌اند.</p>
            <p className="">
              (در موبایل باید روی
              <Icon name="i-ph-list" className="!vertical-middle mx-2"/>
              کلیک کنید تا منو را ببینید.)
            </p>
          </li>
          <li>روی هر کدام کلیک کنید تا به برگه مورد نظر بروید.</li>
        </ol>
      </section>
      <section className="space-y-8">
        <img src="/images/no-wifi.svg" alt="" className="w-10 opacity-30 dark:filter-invert "/>
        <h2 className="H1 !mt-0">دسترسی بدون اینترنت</h2>
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

      <section className="space-y-1em ">
        <img src="/images/support.svg" alt="" className="w-10 opacity-30 dark:filter-invert "/>
        <h2 className="H1 !mt-0">همکاری</h2>
        <p>ما تیم کوچکی هستیم و برای رشد این کار به کمک شما نیاز داریم.</p>
        <p>اگر علاقه‌مند هستید در جمع‌آوری، خلاصه‌سازی و مدیریت ‌محتوا کمک کنید به ما پیام دهید</p>
        <a
          href="mailto:info@foriran.com"
          className="btn-prm  inline-block bf-i-ph-envelope-simple before:( opacity-100 )"
        >
          <span className="">ایمیل ما</span>
        </a>
      </section>
    </div>
  );
};

export default Page;

{
  /* <section className="space-y-8">
  <h2 className="H1">
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
      این وبگاه را راه‌انداختیم تا در کنار شبکه‌های اجتماعی، داده‌ها و محتواهای مهم انقلاب را گردآوری، دسترسی‌پذیر و
      قابل جستجو کنیم.
    </p>
  </div>
</section>; */
}

{
  /*  */
}
{
  /* <section className="space-y-1em">
        <h2>همرسانی</h2>
        <p>برای ایران را به دیگران معرفی کنید.</p>
      </section> */
}
