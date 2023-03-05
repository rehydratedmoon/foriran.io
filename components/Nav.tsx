import Lnk from "@/components/Lnk";
import Draft from "@/components/Draft";
import ThemeToggler from "@/components/ThemeToggler";

const Nav = ({ className }: ClassName) => {
  return (
    <nav className={className}>
      {/* <Lnk
        href="/"
        className="no-underline font-family-heading  leading-none ls-tighter display-none sm:flex gap-2.4 ac text-xl"
        title="Home"
      >
        <img src="/logo.svg" alt="برای ایران" className="w-6 h-6 translate-y-0.5 translate-x-1" />
        <div className="lh-4">
          <span className="fw-400 c-gray12  ">بـرای </span>
          <br />
          <span className="fw-400 c-gray12  "> ایـــران</span>
        </div>
      </Lnk> */}
      <Lnk href="/" className="no-underline  display-none sm:flex gap-4 ac text-xl" title="Home">
        <img src="/logo.svg" alt="برای ایران" className="w-6 h-6  translate-x-0.5" />
        <span className="fw-700 c-violet12 font-family-heading -translate-y-0.5  leading-none ls-tighter ">
          برای ایــران{" "}
        </span>
        {/* <div className="lh-4">
          <span className="fw-400 c-violet12 font-family-heading leading-none ls-tighter  ">برای </span>
          <span className="fw-400 c-violet12 font-family-heading leading-none ls-tighter "> ایــران</span>
        </div> */}
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
        <ThemeToggler className="flex ac gap-4" />
      </div>
    </nav>
  );
};

export default Nav;

// old stuff or comments

//  <Lnk href={`/revolution-phases`} className="in-sub-path:underline bf-i-ph-arrows-out">
//           فاز‌های انقلاب
//         </Lnk>

// const NavLink = ({ children, icon, href }) => {
//   return (
//     <Lnk href={href} className={`in-sub-path:underline ${icon}`}>
//       {children}
//     </Lnk>
//   );
// };
