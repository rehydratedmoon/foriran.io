import usePWAUpdatePrompt from "@/hooks/usePWAUpadatePrompt";
import Icon from "@/components/Icon";
import InstallPWAButton from "@/components/InstallPWAButton";
import Head from "next/head";

// import localFont from "@next/font/local";

// const myFont = localFont({ src: "../public/fonts/estedad/fonts/woff2/Estedad-Bold.woff2" });

const Page = () => {
  usePWAUpdatePrompt();
  return (
    <div class="space-y-32">
      <Head>
        <title>برای ایران</title>
      </Head>
      {/* <p class={myFont.class}>تستستستسس بسب سب سب س </p> */}
      <section class="">
        <img
          src="/images/banner.svg"
          alt=""
          class="w-full max-w-full max-w-min(100%,30rem) mx-auto px-10 dark:filter-invert dark:opacity-70"
        />
        <h1 class="unstyled  font-family-heading  text-12vw sm:text-7xl  text-center  ">
          <span class="block leading-1em px-1 ">دسترسی بهتر</span>
          <span class="block leading-1em px-1 pb-5 sm:pb-10">به اطلاعات مهم‌تر</span>
        </h1>
        <p class=" c-gray11 max-w-60ch  text-center mx-auto">
          <strong class="fw-400 "> «برای ایران» </strong>
          داده‌ها و محتوای مهم انقلاب ایران را سازماندهی می‌کند.
        </p>
      </section>
      <section>
        <ul class="grid grid-min-col-10rem gap-10 list-none">
          <li class="">
            <img src="/images/accessible.svg" alt="" class="-mb-4   w-5/7 dark:filter-invert dark:opacity-70"/>
            <p class="fw-700 font-family-heading text-2xl">دسترسی‌پذیر</p>
            <p class="text-note">همه از جمله کم‌بینایان، نابینایان و کورنگ‌ها می‌توانند از مطالب استفاده کنند </p>
          </li>
          <li class="">
            <img src="/images/focus.svg" alt="" class="-mb-4  w-5/7 dark:filter-invert dark:opacity-70"/>
            <p class="fw-700 font-family-heading text-2xl">متمرکز </p>
            <p class="text-note">
              بدور از موج‌ها و آشفتگی شبکه‌های اجتماعی، مطالب مهم را یکجا و ساختاریافته ببیند{" "}
            </p>
          </li>
          <li class="">
            <img src="/images/search.svg" alt="" class="-mb-4   w-5/7 dark:filter-invert dark:opacity-70"/>
            <p class="fw-700 font-family-heading text-2xl">جستجو‌پذیر</p>
            <p class="text-note">
              نگران گم کردن مطالب نباشید. هر چیزی را سریع از منو کناری یا جستجو گوگل دوباره پیدا کنید
            </p>
          </li>
          {/* <li class="">
            <img src="/images/search.svg" alt="" class="w-3/5" />
            <p class="fw-700 font-family-heading text-2xl">ایمن و متن‌باز</p>
            <p class="text-note">
چیزی برای پنهان کردن وجود ندارد. با هم  برای ایران را می‌سازیم؟            </p>
          </li> */}
        </ul>
      </section>
      <section class="space-y-8">
        <img src="/images/arrow-wavy.svg" alt="" class="w-10 opacity-30 dark:filter-invert"/>
        <h2 class="H1 !mt-0">از اینجا شروع کنید</h2>
        <ol>
          <li>
            <p>همه مطالب موجود در منوی کناری دسته‌بندی شده‌اند.</p>
            <p class="">
              (در موبایل باید روی
              <Icon name="i-ph-list" class="!vertical-middle mx-2"/>
              کلیک کنید تا منو را ببینید.)
            </p>
          </li>
          <li>روی هر کدام کلیک کنید تا به برگه مورد نظر بروید.</li>
        </ol>
      </section>
      <section class="space-y-8">
        <img src="/images/no-wifi.svg" alt="" class="w-10 opacity-30 dark:filter-invert "/>
        <h2 class="H1 !mt-0">دسترسی بدون اینترنت</h2>
        <div>
          <p>با نصب اپلیکیشن (Application) می‌توانید بدون اینترنت به تمام محتوا دسترسی داشته باشید.</p>
          <p>هر زمان دوباره اینترنت داشتید، برنامه را باز کنید تا محتوای بروز را دریافت کنید.</p>
        </div>
        <InstallPWAButton/>
        <p class="text-tiny-note">
          این برنامک یک
          {` `}
          <a href="https://en.wikipedia.org/wiki/Progressive_web_app">Progressive Web Application</a>
          {` `}
          یا PWA است. یعنی یک نسخه از کل وبسایت دانلود می‌شود به کمک قابلیت‌های PWA مرورگر‌های امروزی بر روی گوشی یا
          لپتاپ مانند یک اپلیکیشن کار می‌کند.{" "}
        </p>
      </section>

      <section class="space-y-1em ">
        <img src="/images/support.svg" alt="" class="w-10 opacity-30 dark:filter-invert "/>
        <h2 class="H1 !mt-0">همکاری</h2>
        <p>ما تیم کوچکی هستیم و برای رشد این کار به کمک شما نیاز داریم.</p>
        <p>اگر علاقه‌مند هستید در جمع‌آوری، خلاصه‌سازی و مدیریت ‌محتوا کمک کنید به ما پیام دهید</p>
        <a
          href="mailto:info@foriran.com"
          class="btn-prm  inline-block bf-i-ph-envelope-simple before:( opacity-100 )"
        >
          <span class="">ایمیل ما</span>
        </a>
      </section>
    </div>
  );
};

export default Page;

{
  /* <section class="space-y-8">
  <h2 class="H1">
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
      <a href="/about-us" target="_blank" class="">
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
  /* <section class="space-y-1em">
        <h2>همرسانی</h2>
        <p>برای ایران را به دیگران معرفی کنید.</p>
      </section> */
}
