import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { UserLoginPayload, UserRegisterPayload } from "graphql/graphql";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentUser: {
          read() {
            return userVar();
          },
        },
      },
    },
  },
});

/**
 * Set initial values when we create cache variables.
 */

const userInitialValue = null;

export const userVar: ReactiveVar<
  UserLoginPayload | UserRegisterPayload | null
> = makeVar<UserLoginPayload | UserRegisterPayload | null>(userInitialValue);
