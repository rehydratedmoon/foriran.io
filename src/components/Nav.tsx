// import ThemeToggler from "./ThemeToggler";
import { useStore } from '@nanostores/solid';
import { isSideMenuOpen } from '../stores/sideMenuStore';
// type SideMenuProps = {
//   isSideMenuOpen: boolean;
//   setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };
const Nav = (props) => {
  const $isSideMenuOpen = useStore(isSideMenuOpen);


  const closeMenu = () => isSideMenuOpen.set(false);
  const navLinkProps = {onClick: closeMenu};
  return (
    <div class={`sidebar top-0 bg-gray1 p-4  z-30 w-sidebar  ${$isSideMenuOpen() && 'drawer-open'} `}>
    <nav class={props.class}>
      <a href="/" class="no-underline  display-none sm:flex gap-4 ac text-xl" title="صفحه خانه">
        {/* <img src="/images/derafsh.svg" alt="برای ایران" class="w-8 h-8 translate-x-0.5 dark:filter-invert" /> */}
        <span aria-hidden="true" class="fw-700 c-violet12 font-family-heading   leading-none ls-tighter ">
          برای ایــران{" "}
        </span>
        <span class="sr-only">برای ایران</span>
      </a>
      <a
        href={props.currentPath + "#main-content"}
        class="px-4 py-1  bg-violet2 abs  c-violet11  italic text-xs af-i-ph-arrow-left-thin -translate-y-100 focus:translate-y-10"
      >
        برو به بخش اصلی صفحه
      </a>
      <div class="mt-15 sm:mt-10  flex flex-col gap-6 mb-auto">
        <NavLink
          href="/posts/safety"
          class=" bf-i-ph-shield-plus hover:bf-i-ph-shield-plus-duotone  aria-[current-page]:bf-i-ph-shield-plus-fill "
          {...navLinkProps}
        >
          ایمنی
        </NavLink>
        {/* <NavLink href="/posts/fight" class=" bf-i-ph-lightning data-[in-path]:bf-i-ph-lightning-fill" {...navLinkProps}>
          نبرد
        </NavLink> */}
        <NavLink
          href="/posts/terms"
          class=" bf-i-ph-book-bookmark hover:bf-i-ph-book-bookmark-duotone aria-[current-page]:bf-i-ph-book-bookmark-fill "
          {...navLinkProps}
        >
          واژه‌ه‌نامه
        </NavLink>
        <NavLink
          href="/posts/oppression-methods"
          class="bf-i-ph-lightning hover:bf-i-ph-lightning-duotone aria-[current=page]:bf-i-ph-lightning-fill"
          {...navLinkProps}
        >
          تکنیک‌های سرکوب
        </NavLink>
      </div>
      <div class="mt-auto flex flex-col gap-6">
        {/* <ThemeToggler class="flex ac gap-4"/> */}
           {/* <ThemeSwitch strategy="select" defaultTheme="system">
    <select>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  </ThemeSwitch> */}
      </div>
    </nav>
    </div>
  );
};

export default Nav;

// old stuff or comments

//  <Link href={`/revolution-phases`} class="in-sub-path:underline bf-i-ph-arrows-out">
//           فاز‌های انقلاب
//         </Link>
type NavLinkProps = {
  children?: React.ReactNode;
  href: string;
  class?: string;
  [key: string]: any;
};

const NavLink = ({children, icon, href,  ...props}: NavLinkProps) => {
  return (
    <a
      href={href}
      class={`data-[in-path]:c-prm11 data-[in-path]:before:opacity-100 ls-tighter  ${props.class}`}
      {...props}
    >
      {children}
    </a>
  );
};
