import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <meta
            name="og:description"
            content="sensei.sh - project based learning hub"
          />
          <meta
            name="description"
            content="sensei.sh - project based learning hub"
          />
          <meta property="og:image" content="opengraph.png"></meta>
        </Head>
        <body>
          <Main />
          <div id="root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
