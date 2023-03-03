import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/tailwind.css";
import "@/styles/reset.css";
import "uno.css";
import "@/styles/globals.css";
import "@/public/fonts/estedad/css/estedad.css";
import "@/public/fonts/onvan/css/onvan.css";

import type { AppProps } from "next/app";
import { QueryClientProvider, Hydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Lnk from "@/components/Lnk";
import Icon from "@/components/Icon";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
// import { useMDXComponents } from '@next/mdx'

import Head from "next/head";
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler";

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  // useMDXComponents()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider attribute="class">
          {/* <Header /> */}
          <Head>
            {process.env.NEXT_PUBLIC_ENV !== "production" && (
              <>
                <meta name="googlebot" content="noindex" />
                <meta name="robots" content="noindex" />
                <meta name="robots" content="nofollow" />
              </>
            )}
            <link rel="manifest" href="/manifest.json" />
            <meta property="og:title" content="" />
            <meta property="og:description" content="About my website in one sentence" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width" />
            <meta property="og:site_name" content="For Iran" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          </Head>
          <div className="side-menu-container  mx-auto max-w-page">
            <div className="main grid  sm:mis-60" style={{ gridTemplateRows: "auto 1fr auto" }}>
              <Header {...{ isSideMenuOpen, setIsSideMenuOpen }} />
              <main className=" ">
                {/* <BreadCrumb /> */}
                <div className="p-4  pb-14  ">
                  <Component {...pageProps} />
                </div>
              </main>
              <Footer />
            </div>
            <SideMenu {...{ isSideMenuOpen, setIsSideMenuOpen }} />
          </div>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

type Props = {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ isSideMenuOpen, setIsSideMenuOpen }: Props) => {
  return (
    <header className="px-4 py-2 sm:px-0 bg-gray1  bg-blue4  sticky top-0 z-10 lt-sm:b-b-1 b-gray6">
      <div className=" grid sm:display-none gap-1" style={{ gridTemplateColumns: "1fr 3fr 1fr" }}>
        <div className="flex justify-start">
          <button
            className="sm:display-none bf-i-ph-list before:mie-0 py-2"
            aria-label="Open Menu"
            onClick={() => setIsSideMenuOpen((state) => !state)}
          >
            <span className="sr-only">باز کردن منو</span>
          </button>
        </div>
        <div className="flex ac jc">
          <Lnk
            href="/"
            className="py-2  leading-none text-lg ls-tight flex gap-1 c-orange10 sm:display-none lh-5  "
            aria-hidden="true"
          >
            <img src="/logo.svg" alt="برای ایران" className="w-5 h-5 inline-block" />
            <span className="fw-400 c-gray11 font-family-heading ">برای ایـــران </span>
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
      <div className={`aside top-0 bg-gray1 p-4  rw-aside z-30 w-aside  ${isSideMenuOpen && "drawer-open"} `}>
        <Nav className="sm:b-ie-1 b-gray7 h-full flex flex-col gap-6 " />
      </div>
    </>
  );
};

const MobileSideMenuOverlay = ({ isSideMenuOpen, setIsSideMenuOpen }: Props) => {
  return (
    <div
      className={`drawer-overlay mobile-only fixed z-20 inset-0 bg-grayA-9 
            opacity-0  transition-opacity duration-600 ease-in-out
             ${isSideMenuOpen ? "opacity-100 select-none" : "pointer-events-none"}`}
      title="Close Menu"
      aria-label="Close Menu"
      onClick={() => setIsSideMenuOpen(false)}
    >
      <span className="sr-only">بستن منو</span>
    </div>
  );
};
