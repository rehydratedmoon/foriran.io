import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl" className="h-full">
        <Head>
          <meta charSet="utf-8"/>
          {/* <meta name="theme-color" content="#000000" /> */}
          <meta name="robots" content="max-snippet:20, max-image-preview:large"/>
          {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
          {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />*/}
          {/*<link*/}
          {/*  href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&family=Vazirmatn:wght@400;500;600;700;900&display=swap"*/}
          {/*  rel="stylesheet"*/}
          {/*></link>*/}

          {/* PWA APP META TAGS */}

          <meta name="application-name" content="FOR IRAN"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="#4814c7"/>
          <meta name="apple-mobile-web-app-title" content="FOR IRAN"/>
          <meta name="description" content="a place to easily find important content about Iran Revolution"/>
          <meta name="format-detection" content="telephone=no"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="msapplication-config" content="/icons/browserconfig.xml"/>
          <meta name="msapplication-TileColor" content="#4814c7"/>
          <meta name="msapplication-tap-highlight" content="no"/>
          <meta name="theme-color" content="#4814c7"/>

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png"/>
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png"/>

          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#4814c7"/>
          <link rel="shortcut icon" href="/favicon.ico"/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:url" content="https://foriran.io"/>
          <meta name="twitter:title" content="For IRAN"/>
          <meta name="twitter:description" content="a place to easily find important content about Iran Revolution"/>
          <meta name="twitter:image" content="https://foriran.io/icons/android-chrome-192x192.png"/>
          <meta name="twitter:creator" content="For IRAN Team"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="For IRAN"/>
          <meta property="og:description" content="a place to easily find important content about Iran Revolution"/>
          <meta property="og:site_name" content="For IRAN"/>
          <meta property="og:url" content="https://foriran.io"/>
          <meta property="og:image" content="https://foriran.io/icons/apple-touch-icon.png"/>
        </Head>
        <body className="h-full bg-gray1 c-gray12">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
