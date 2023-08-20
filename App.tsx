import "react-native-gesture-handler";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
  concat,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { REACT_APP_DEV_GRAPHQL_API, REACT_APP_PROD_GRAPHQL_API } from "@env";
import { Root } from "./app/Root";
import { apolloDevToolsInit } from "react-native-apollo-devtools-client";
import * as SecureStore from "expo-secure-store";
import { cache } from "./app/utils/cache";

const uri =
  process.env.NODE_ENV === "development"
    ? REACT_APP_DEV_GRAPHQL_API
    : REACT_APP_PROD_GRAPHQL_API;
const httpLink = createHttpLink({
  uri,
});
const setStorage = async (name: string, value: string) => {
  await SecureStore.setItemAsync(name, value);
};
const authLink = setContext(async (_, { headers }) => {
  const accessToken = await SecureStore.getItemAsync("access-token");
  const client = await SecureStore.getItemAsync("client");
  const authorization = await SecureStore.getItemAsync("authorization");
  return {
    headers: {
      ...headers,
      "access-token": accessToken,
      client: client,
      authorization,
    },
  };
});
const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const accessToken = context.response.headers.get("access-token");
    const client = context.response.headers.get("client");
    const authorization = context.response.headers.get("authorization");
    if (accessToken) setStorage("access-token", accessToken);
    if (client) setStorage("client", client);
    if (authorization) setStorage("authorization", authorization);

    if (typeof response !== "object")
      console.error(`Response is of type ${typeof response}, expected object`);
    return response;
  });
});

const client = new ApolloClient({
  link: from([authLink, afterwareLink, httpLink]),
  cache,
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
