import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { REACT_APP_DEV_API, REACT_APP_PROD_API } from "@env";
import { Root } from "./Root";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apolloDevToolsInit } from "react-native-apollo-devtools-client";

const uri =
  process.env.NODE_ENV === "development"
    ? REACT_APP_DEV_API
    : REACT_APP_PROD_API;

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((res) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get("Authorization");
    AsyncStorage.setItem("token", authHeader);
    return res;
  });
});

const httpLink = createHttpLink({ uri });

const client = new ApolloClient({
  link: ApolloLink.from([afterwareLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

if (__DEV__) {
  apolloDevToolsInit(client);
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
};

export default App;
