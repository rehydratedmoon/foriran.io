import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/tailwind.css";
import "@/styles/reset.css";
import "uno.css";
import "@/styles/globals.css";
import "@/public/fonts/estedad/css/estedad.css";
import "@/public/fonts/onvan/css/onvan.css";

import type { AppProps } from "next/app";
import { QueryClientProvider, Hydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Lnk from "@/components/Lnk";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

import Head from "next/head";
import ThemeToggler from "@/components/ThemeToggler";
import Icon from "@/components/Icon";

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
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <div data-comment="side menu container" className="mx-auto max-w-page  h-full">
            <div className="grid sm:mis-60 h-full" style={{ gridTemplateRows: "auto 1fr auto" }}>
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
    <header className="px-4  sm:px-0 bg-gray1  bg-blue4  sticky top-0 z-10 lt-sm:b-b-1 b-gray6">
      <div className="py-2 grid sm:display-none gap-1" style={{ gridTemplateColumns: "1fr 3fr 1fr" }}>
        <div className="flex justify-start">
          <button
            className="sm:display-none py-2 opacity-90 flex ac"
            aria-label="باز کردن منو"
            onClick={() => setIsSideMenuOpen((state) => !state)}
          >
            <Icon name="i-ph-list" alt="باز کردن منو" />
          </button>
        </div>
        <div className="flex ac jc">
          <Lnk
            href="/"
            className="py-2  leading-none text-lg ls-tight flex gap-1.5 ac c-orange10 sm:display-none lh-5  "
            aria-hidden="true"
          >
            <img src="/logo.svg" alt="برای ایران" className="w-5 h-5 inline-block" />
            <span className="fw-400 c-gray12 font-family-heading -translate-y-0.5 opacity-90 ">برای ایـــران </span>
          </Lnk>
        </div>
        <div className="flex ac justify-end ">
          <ThemeToggler hasText={false} className="opacity-90 flex ac" />
        </div>
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
              transition-opacity duration-600 ease-in-out
             ${isSideMenuOpen ? "opacity-100 select-none" : "opacity-0 pointer-events-none"}`}
      title="Close Menu"
      aria-label="Close Menu"
      onClick={() => setIsSideMenuOpen(false)}
    >
      <span className="sr-only">بستن منو</span>
    </div>
  );
};
