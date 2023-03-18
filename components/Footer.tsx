import Link from "next/link";

const Footer = () => {
  return (
    <footer className="  px-4 c-gray11 ">
      <div className="b-t-1 b-gray7 py-4  flex flex-wrap ac gap-4">
        <p className="text-center  text-sm mie-auto w-full sm:w-auto">
          {/* <span aria-hidden="true" className="c-gray10 font-family-heading fw-400">
            برای ایـــران
          </span> */}

          <Link
            href="/"
            className="py-2 no-underline  leading-none text-lg ls-tight inline-flex gap-2 ac c-orange10 sm:display-none lh-5  "
            aria-hidden="true"
          >
            {/* <img src="/logo.svg" alt="برای ایران" className="w-4 h-4 inline-block  translate-y-0.5  " /> */}
            <span aria-hidden="true" className="fw-700 text-sm c-gray10 font-family-heading   leading-none ls-tighter ">
              <span aria-hidden="true">برای ایــران</span>
              <span className="sr-only">برای ایران</span>
            </span>
          </Link>
        </p>
        <div className="flex gap-4 jc text-xs w-full sm:w-auto">
          <Link href={`/about-us`}>درباره ما</Link>
          {/* <Link href="/terms-of-use">قوانین کاربری</Link> */}
          <Link href="/privacy-policy">سیاست محرمانگی</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
