import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Life Nômade - Blog de viagem e turismo</title>
        <link rel="icon" href="favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;500;600;700;800;900&display=swap"
          rel="stylesheet"
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
          property="og:description"
          content="Viaje com a gente pelo mundo! Nossos relatos de viagem incluem dicas incríveis, belas fotos e experiências únicas. Junte-se a nós em uma jornada para explorar culturas, sabores e paisagens exóticas. Inspire-se e planeje sua próxima aventura."
        />
        <meta property="og:image" content="https://i.imgur.com/tIte0sw.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
