import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "../styles/global";
import MyCookieConsent from "../components/MyCookieConsent";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import * as gtag from "../lib/gtag";
import Analytics from "../components/Analytics";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const client = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      {/* <ThemeProvider> */}
      <Head>
        <link rel="icon" href="favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
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
        <script type="application/javascript" src="https://syndication.exdynsrv.com/splash.php?idzone=4914886&capping=0"></script>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
      <MyCookieConsent />
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* </ThemeProvider> */}
    </ApolloProvider>
  );
}

export default MyApp;
