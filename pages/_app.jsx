import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo";
import { Toaster } from 'react-hot-toast'
import GlobalStyles from '../styles/global'


function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
        <Toaster position="bottom-center" reverseOrder={false} />
    </ApolloProvider>
  );
}

export default MyApp;
