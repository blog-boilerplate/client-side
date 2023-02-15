import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "../styles/global";
import MyCookieConsent from "../components/MyCookieConsent";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

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
