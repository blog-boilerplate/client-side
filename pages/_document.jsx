import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import MobileMessage from "../components/MobileMessage";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          type="application/javascript"
          data-idzone="4914922"
          src="https://a.exdynsrv.com/nativeads-v2.js"
        ></script>
        <script
          type="application/javascript"
          data-idzone="4914930"
          data-ad_frequency_count="1"
          data-ad_frequency_period="720"
          data-type="mobile"
          data-browser_settings="1"
          data-ad_trigger_method="3"
          src="https://a.exdynsrv.com/fp-interstitial.js"
        ></script>
        <MobileMessage />
      </Html>
    );
  }
}
