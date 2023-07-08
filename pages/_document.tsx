import Document, { Head, Html, Main, NextScript } from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" />
          <Link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
