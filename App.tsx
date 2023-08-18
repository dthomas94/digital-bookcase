import "react-native-gesture-handler";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { REACT_APP_DEV_GRAPHQL_API, REACT_APP_PROD_GRAPHQL_API } from "@env";
import { Root } from "./app/Root";
import { apolloDevToolsInit } from "react-native-apollo-devtools-client";
import { MenuProvider } from "react-native-popup-menu";

const uri =
  process.env.NODE_ENV === "development"
    ? REACT_APP_DEV_GRAPHQL_API
    : REACT_APP_PROD_GRAPHQL_API;

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

if (__DEV__) {
  apolloDevToolsInit(client);
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MenuProvider>
        <Root />
      </MenuProvider>
    </ApolloProvider>
  );
};

export default App;
