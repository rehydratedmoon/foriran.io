import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl" className="h-full">
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="theme-color" content="#000000" /> */}
          <meta
            name="robots"
            content="max-snippet:20, max-image-preview:large"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;900&family=Vazirmatn:wght@400;500;600;700;900&display=swap" rel="stylesheet"></link>
        </Head>
        <body className="h-full bg-gray1 c-gray12">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
