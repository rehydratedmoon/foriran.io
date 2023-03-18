import Lnk from "@/components/Lnk";
import ThemeToggler from "@/components/ThemeToggler";
import {useRouter} from "next/router";

type SideMenuProps = {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Nav = ({className, isSideMenuOpen, setIsSideMenuOpen}: ClassName & SideMenuProps) => {
  const router = useRouter();

  const closeMenu = () => setIsSideMenuOpen(false);
  const navLinkProps = {onClick: closeMenu};
  return (
    <nav className={className}>

      <Lnk href="/" className="no-underline  display-none sm:flex gap-4 ac text-xl" title="صفحه خانه">
        {/* <img src="/images/derafsh.svg" alt="برای ایران" className="w-8 h-8 translate-x-0.5 dark:filter-invert" /> */}
        <span aria-hidden="true" className="fw-700 c-violet12 font-family-heading   leading-none ls-tighter ">
          برای ایــران{" "}
        </span>
        <span className="sr-only">برای ایران</span>
      </Lnk>
      <a
        href={router.asPath + "#main-content"}
        className="px-4 py-1  bg-violet2 abs  c-violet11  italic text-xs af-i-ph-arrow-left-thin -translate-y-100 focus:translate-y-10"
      >
        برو به بخش اصلی صفحه
      </a>
      <div className="mt-15 sm:mt-10  flex flex-col gap-6 mb-auto">
        <NavLink
          href="/posts/safety"
          className=" bf-i-ph-shield-plus-thin  data-[in-path]:bf-i-ph-shield-plus-fill "
          {...navLinkProps}
        >
          ایمنی
        </NavLink>
        {/* <NavLink href="/posts/fight" className=" bf-i-ph-lightning data-[in-path]:bf-i-ph-lightning-fill" {...navLinkProps}>
          نبرد
        </NavLink> */}
        <NavLink
          href="/posts/terms"
          className=" bf-i-ph-book-bookmark-thin data-[in-path]:bf-i-ph-book-bookmark-fill "
          {...navLinkProps}
        >
          واژه‌ه‌نامه
        </NavLink>
        <NavLink
          href="/posts/oppression-methods"
          className=" bf-i-ph-lightning-thin data-[in-path]:bf-i-ph-lightning-fill"
          {...navLinkProps}
        >
          تکنیک‌های سرکوب
        </NavLink>
      </div>
      <div className="mt-auto flex flex-col gap-6">
        <ThemeToggler className="flex ac gap-4"/>
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
  href: string;
  className?: string;
  [key: string]: any;
};

const NavLink = ({children, icon, href, className, ...props}: NavLinkProps) => {
  return (
    <Lnk
      href={href}
      className={`data-[in-path]:c-prm11 data-[in-path]:before:opacity-100 ls-tighter  ${className}`}
      {...props}
    >
      {children}
    </Lnk>
  );
};
