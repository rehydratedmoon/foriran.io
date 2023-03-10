import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/tailwind.css";
import "@/styles/reset.css";
import "uno.css";
import "@/styles/globals.css";
import "@/styles/article.scss";
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
import PWAProvider from "@/components/PWAProvider";
import { useRouter } from "next/router";

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
        <PWAProvider>
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
              <SideMenu {...{ isSideMenuOpen, setIsSideMenuOpen }} />
              <div className="grid sm:mis-60 min-h-full" style={{ gridTemplateRows: "auto 1fr auto" }}>
                <Header {...{ isSideMenuOpen, setIsSideMenuOpen }} />
                <main id="main-content" className="p-4  pb-14  h-full">
                  <PageLayout>
                    <Component {...pageProps} />
                  </PageLayout>
                </main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </PWAProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

const PageLayout = ({ children }: Children) => {
  const router = useRouter();

  if (router.asPath.startsWith("/posts/")) {
    return (
      <article className="article__wrapper">
          <>{children}</>
      </article>
    );
  }
  return <>{children}</>;
};

type SideMenuProps = {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) => {
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
            className="py-2  leading-none text-lg ls-tight flex gap-2 ac c-orange10 sm:display-none lh-5  "
            aria-hidden="true"
          >
            <img src="/logo.svg" alt="برای ایران" className="w-6 h-6 inline-block " />
            <span className="fw-700 c-violet12 font-family-heading   leading-none ls-tighter ">برای ایــران </span>
          </Lnk>
        </div>
        <div className="flex ac justify-end ">
          <ThemeToggler hasText={false} className="opacity-90 flex ac" />
        </div>
      </div>
    </header>
  );
};

const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) => {
  return (
    <>
      <MobileSideMenuOverlay {...{ isSideMenuOpen, setIsSideMenuOpen }} />
      <div className={`sidebar top-0 bg-gray1 p-4  z-30 w-sidebar  ${isSideMenuOpen && "drawer-open"} `}>
        <Nav {...{ isSideMenuOpen, setIsSideMenuOpen }} className="sm:b-ie-1 b-gray7 h-full flex flex-col gap-6 " />
      </div>
    </>
  );
};

const MobileSideMenuOverlay = ({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) => {
  return (
    <div
      className={`sm:display-none fixed z-20 inset-0 bg-grayA-9 
              transition-opacity duration-400 ease-in-out
             ${isSideMenuOpen ? "opacity-100 select-none" : "opacity-0 pointer-events-none"}`}
      title="Close Menu"
      aria-label="Close Menu"
      onClick={() => setIsSideMenuOpen(false)}
    >
      <span className="sr-only">بستن منو</span>
    </div>
  );
};
