import Lnk from "@/components/Lnk";
import Draft from "@/components/Draft";
import ThemeToggler from "@/components/ThemeToggler";

const Nav = ({ className }: ClassName) => {
  return (
    <nav className={className}>
      <Lnk href="/" className="no-underline leading-none ls-tighter display-none sm:flex gap-1  text-xl" title="Home">
        <span className="fw-700 c-gray11 ">برای </span>

        <span className="fw-700 c-gray11 "> ایـــران</span>
      </Lnk>
      <div className="flex flex-col gap-6 mb-auto">
        <Lnk href={`/safety`} className="in-sub-path:underline bf-i-ph-first-aid-kit">
          ایمنی فیزیکی
        </Lnk>
        <Lnk href={`/fight`} className="in-sub-path:underline bf-i-ph-lightning ">
          نبرد
        </Lnk>
        <Lnk href={`/political-terms`} className="in-sub-path:underline bf-i-ph-book-bookmark ">
          واژه‌های سیاسی
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
