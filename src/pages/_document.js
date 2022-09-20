import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta
          name='description'
          content='김인턴에 정보 등록하고 채용 제안 받기'
        />
      </Head>
      <body>
        <div id='modal'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
