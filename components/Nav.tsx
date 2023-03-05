import Lnk from "@/components/Lnk";
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
      {/* <a href="#main-content" className="px-4 py-1 rd-xl bg-violet2 abs -translate-y-100 focus:translate-y-0 ">
        Skip to the main content
      </a> */}

      <Lnk href="/" className="no-underline  display-none sm:flex gap-4 ac text-xl" title="صفحه خانه">
        <img src="/logo.svg" alt="برای ایران" className="w-6 h-6  translate-x-0.5" />
        <span className="fw-700 c-violet12 font-family-heading -translate-y-0.3  leading-none ls-tighter ">
          برای ایــران{" "}
        </span>
        {/* <div className="lh-4">
          <span className="fw-400 c-violet12 font-family-heading leading-none ls-tighter  ">برای </span>
          <span className="fw-400 c-violet12 font-family-heading leading-none ls-tighter "> ایــران</span>
        </div> */}
      </Lnk>
      <div className="sm:mt-10 flex flex-col gap-6 mb-auto">
        <NavLink href="/safety" icon=" bf-i-ph-first-aid-kit">
          ایمنی
        </NavLink>
        <NavLink href="/fight" icon=" bf-i-ph-lightning ">
          نبرد
        </NavLink>
        <NavLink href="/terms" icon=" bf-i-ph-book-bookmark ">
          واژه‌ه‌نامه سیاسی
        </NavLink>
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
type NavLinkProps = {
  children?: React.ReactNode;
  icon: string;
  href: string;
  className?: string;
};

const NavLink = ({ children, icon, href, className }: NavLinkProps) => {
  return (
    <Lnk href={href} className={`in-sub-path:underline ${icon} ls-tighter  ${className}`}>
      {children}
    </Lnk>
  );
};
