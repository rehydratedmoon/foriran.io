import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/tailwind.css';
import '@/styles/reset.css';
import 'uno.css';
import '@/styles/globals.css';
import '@/public/fonts/iransans/css/iransans.css';

import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Lnk from '@/components/Lnk';
import Icon from '@/components/Icon';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
// import { useMDXComponents } from '@next/mdx'

import Head from "next/head";
import Link from "next/link";
import ThemeToggler from '@/components/ThemeToggler';


function MyApp({ Component, pageProps }: AppProps) {


  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  // useMDXComponents()
  return (

    <ThemeProvider attribute="class">
      <div className="side-menu-container h-full  overflow-x-hidden  mx-auto max-w-screen">
        {/* <Header /> */}
        <Head>
          <meta property="og:title" content="" />
          <meta property="og:description" content="About my website in one sentence" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <meta property="og:site_name" content="my-site0name" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className='main grid gap-6 h-full' style={{ gridTemplateRows: 'auto 1fr auto' }}>
          <Header {...{ isSideMenuOpen, setIsSideMenuOpen }} />
          <main className='p-4 h-full'>
            {/* <BreadCrumb /> */}
            <div className='h-full px-4 pb-4 p-4 sm:pis-4 sm:pie-0'>
              <Component {...pageProps} />
            </div>
          </main>
          <Footer />
        </div>
        <SideMenu {...{ isSideMenuOpen, setIsSideMenuOpen }} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;

// export function useMDXComponents(components:  any) {
//   // return components
//   // Allows customizing built-in components, e.g. to add styling.
//   return {
//     h1: ({ children }: Children) => <h1 className='H1'>{children}</h1>,
//     h2: ({ children }: Children) => <h2 className='H2'>{children}</h2>,
//     h3: ({ children }: Children) => <h3 className='H3'>{children}</h3>,
//     h4: ({ children }: Children) => <h1 className='H4'>{children}</h1>,
//     ...components,
//   }
// }

type Props = {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ isSideMenuOpen, setIsSideMenuOpen }: Props) => {
  return (
    <header className='py-4 px-4  bg-gray1  bg-blue4  sticky top-0 z-10 '>
      <div className=' grid sm:display-none gap-1' style={{ gridTemplateColumns: '1fr 3fr 1fr' }}>
        <div className='flex justify-start'>
          <button
            className='mobile-only bf-i-ph-list before:mie-0'
            aria-label='Open Menu'
            onClick={() => setIsSideMenuOpen((state) => !state)}
          >
            <span className='sr-only'>باز کردن منو</span>
          </button>
        </div>
        <div className='flex ac jc'>
          <Lnk
            href='/'
            className='no-underline leading-none fw-900 text-lg ls-tight c-orange10 sm:display-none ls-tightest  '
            aria-hidden='true'
          >
            <span className='fw-300 c-gray11'>برای ایران</span>
          </Lnk>

        </div>
        <div />
      </div>
    </header>
  );
};

const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }: Props) => {
  return (
    <>
      <MobileSideMenuOverlay {...{ isSideMenuOpen, setIsSideMenuOpen }} />
      <div className={`aside w-aside bg-gray2 z-30  ${isSideMenuOpen && 'drawer-open'} `}>
        <Nav className='p-4 h-full flex flex-col gap-6 ' />
      </div>
    </>
  );
};

const MobileSideMenuOverlay = ({ isSideMenuOpen, setIsSideMenuOpen }: Props) => {
  return (
    <div
      className={`drawer-overlay mobile-only fixed z-20 inset-0 bg-grayA-9 
            opacity-0  transition-opacity duration-600 ease-in-out
             ${isSideMenuOpen ? 'opacity-100 select-none' : 'pointer-events-none'}`}
      title='Close Menu'
      aria-label='Close Menu'
      onClick={() => setIsSideMenuOpen(false)}
    >
      <span className='sr-only'>بستن منو</span>
    </div>
  );
};
