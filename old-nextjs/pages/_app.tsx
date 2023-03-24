import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/tailwind.css";
import "@/styles/reset.css";
import "uno.css";
import "@/styles/globals.css";
import "@/styles/article.scss";
import "@/public/fonts/estedad/css/estedad.css";
import "@/public/fonts/onvan/css/onvan.css";

import type {AppProps} from "next/app";
import {QueryClientProvider, Hydrate, DehydratedState, QueryClient} from "@tanstack/react-query";
import {useState} from "react";
import Lnk from "@/components/Lnk";
import {ThemeProvider} from "next-themes";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

import Head from "next/head";
import ThemeToggler from "@/components/ThemeToggler";
import Icon from "@/components/Icon";
import PWAProvider from "@/components/PWAProvider";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps<{ dehydratedState: DehydratedState }>) {
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
                  <meta name="googlebot" content="noindex"/>
                  <meta name="robots" content="noindex"/>
                  <meta name="robots" content="nofollow"/>
                </>
              )}
              <link rel="manifest" href="/manifest.json"/>
              <meta property="og:title" content=""/>
              <meta property="og:description" content="About my website in one sentence"/>
              <meta charSet="UTF-8"/>
              <meta name="viewport" content="width=device-width"/>
              <meta property="og:site_name" content="For Iran"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div data-comment="side menu container" class="mx-auto max-w-page  h-full">
              <SideMenu {...{isSideMenuOpen, setIsSideMenuOpen}} />
              <div class="grid sm:mis-60 min-h-full" style={{gridTemplateRows: "auto 1fr auto"}}>
                <Header {...{isSideMenuOpen, setIsSideMenuOpen}} />
                <main id="main-content" class="p-4  pb-14  h-full">
                  <PageLayout>
                    <Component {...pageProps} />
                  </PageLayout>
                </main>
                <Footer/>
              </div>
            </div>
          </ThemeProvider>
        </PWAProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

const PageLayout = ({children}: Children) => {
  const router = useRouter();

  if (router.asPath.startsWith("/posts/") || router.asPath === "/about-us") {
    return (
      <article class="article__wrapper">
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
c

const SideMenu = ({isSideMenuOpen, setIsSideMenuOpen}: SideMenuProps) => {
  return (
    <>
      <MobileSideMenuOverlay {...{isSideMenuOpen, setIsSideMenuOpen}} />
      <div class={`sidebar top-0 bg-gray1 p-4  z-30 w-sidebar  ${isSideMenuOpen && "drawer-open"} `}>
        <Nav {...{isSideMenuOpen, setIsSideMenuOpen}} class="sm:b-ie-1 b-gray7 h-full flex flex-col gap-6 "/>
      </div>
    </>
  );
};


