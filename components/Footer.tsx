import Link from "next/link";

const Footer = () => {
  return (
    <footer className="  px-4 c-gray9 ">
      <div className="b-t-1 b-gray7 py-4  flex flex-wrap ac gap-4">
        <p className="text-center  text-sm mie-auto w-full sm:w-auto">
          <span aria-hidden="true" className="c-gray10 font-family-heading fw-400">
            برای ایـــران
          </span>
          <span className="sr-only">برای ایران</span>
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
