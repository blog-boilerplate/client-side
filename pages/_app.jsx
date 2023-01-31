import "../styles/index.css";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo";
import { Toaster } from 'react-hot-toast'


function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
      <div style={{ fontSize: "1.5rem" }}>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
