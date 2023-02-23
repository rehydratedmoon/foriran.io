import Lnk from "@/components/Lnk";
import Draft from "@/components/Draft";
import ThemeToggler from "@/components/ThemeToggler";

const Nav = ({ className }: ClassName) => {
  return (
    <nav className={className}>
      <Lnk
        href="/"
        className="no-underline font-family-onvan fw-400 leading-none ls-tighter display-none sm:flex gap-3  ac text-xl"
        title="Home"
      >
        <img src="/logo.svg" alt="برای ایران" className="w-12 h-12" />
        <div>
          <span className="fw-700 c-gray11 ">برای </span>
          <br />
          <span className="fw-700 c-gray11 "> ایـــران</span>
        </div>
        {/* <img src="/logotype.svg" alt="برای ایران" className="w-20 h-15" /> */}
      </Lnk>
      <div className="sm:mt-10 flex flex-col gap-6 mb-auto">
        <Lnk href={`/safety`} className="in-sub-path:underline bf-i-ph-first-aid-kit">
          ایمنی
        </Lnk>
        <Lnk href={`/fight`} className="in-sub-path:underline bf-i-ph-lightning ">
          نبرد
        </Lnk>
        <Lnk href={`/terms`} className="in-sub-path:underline bf-i-ph-book-bookmark ">
          واژه‌ه‌نامه سیاسی
        </Lnk>
      </div>
      <div className="mt-auto flex flex-col gap-6">
        <div>
          <ThemeToggler className="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// old stuff or comments

//  <Lnk href={`/revolution-phases`} className="in-sub-path:underline bf-i-ph-arrows-out">
//           فاز‌های انقلاب
//         </Lnk>
