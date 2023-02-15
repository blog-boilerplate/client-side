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
        <Head>
          <link rel="icon" href="favicon.ico"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <meta
            name="description"
            content="Viaje com a gente pelo mundo! Nossos relatos de viagem incluem dicas incríveis, belas fotos e experiências únicas. Junte-se a nós em uma jornada para explorar culturas, sabores e paisagens exóticas. Inspire-se e planeje sua próxima aventura."
          />
          <meta
            property="og:title"
            content="Life Nômade - Blog de viagem e turismo"
          />
          <meta
            name="p:domain_verify"
            content="f4e739dcb17f8e979f52c26b8d3f7e7c"
          />
          <meta name="monetag" content="598c6c161fec152d1fd30a1c7c960f7f" />
          <meta
            property="og:description"
            content="Viaje com a gente pelo mundo! Nossos relatos de viagem incluem dicas incríveis, belas fotos e experiências únicas. Junte-se a nós em uma jornada para explorar culturas, sabores e paisagens exóticas. Inspire-se e planeje sua próxima aventura."
          />
          <meta property="og:image" content="https://i.imgur.com/tIte0sw.png" />
          <meta
            name="exoclick-site-verification"
            content="39a5ab4f545e7fd0e213249948a375eb"
          ></meta>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <MobileMessage />
      </Html>
    );
  }
}
