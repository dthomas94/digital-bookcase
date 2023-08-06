import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { REACT_APP_DEV_API, REACT_APP_PROD_API } from "@env";
import { Root } from "./Root";

const uri =
  process.env.NODE_ENV === "development"
    ? REACT_APP_DEV_API
    : REACT_APP_PROD_API;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
};

export default App;
