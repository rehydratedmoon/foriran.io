import { useStore } from '@nanostores/solid';
import { isSideMenuOpen } from '../stores/sideMenuStore';
// import Icon from "./Icon.astro";
// import ThemeToggler from './ThemeToggler';

const Header = () => {
  const $isSideMenuOpen = useStore(isSideMenuOpen);
  return (
    <header class="px-4  sm:px-0 bg-gray1  bg-blue4  sticky top-0 z-10 lt-sm:b-b-1 b-gray6">
      <div class="py-2 grid sm:display-none gap-1" style="grid-template-columns: 1fr 3fr 1fr;">
        <div class="flex justify-start">
          <button
            class="sm:display-none py-2 opacity-90 flex ac"
            aria-label="باز کردن منو"
            onClick={() => isSideMenuOpen.set(!$isSideMenuOpen())}
          >
            {/* <Icon name="i-ph-list" alt="باز کردن منو"/> */}
          </button>
        </div>
        <div class="flex ac jc">
          <a
            href="/"
            class="py-2  leading-none text-lg ls-tight flex gap-2 ac c-orange10 sm:display-none lh-5  "
            aria-hidden="true"
          >
            {/* <img src="/logo.svg" alt="برای ایران" class="w-6 h-6 inline-block " /> */}
            <span aria-hidden="true" class="fw-700 c-violet12 font-family-heading   leading-none ls-tighter ">
              برای ایــران{" "}
            </span>
            <span class="sr-only">برای ایران</span>
          </a>
        </div>
        <div class="flex ac justify-end ">
          {/* <ThemeToggler hasText={false} class="opacity-90 flex ac"/> */}
        </div>
      </div>
    </header>
  );
};

export default Header;