import Script from 'next/script';
import Head from 'next/head';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
        ></meta>
      </Head>
      <Script
        strategy='afterInteractive'
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
      });
    `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
