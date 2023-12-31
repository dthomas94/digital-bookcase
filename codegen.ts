import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "graphql/schema.graphql",
  documents: ["**/gql/queries/*.ts", "**/gql/mutations/*.ts"],
  generates: {
    "./graphql/": {
      preset: "client",
    },
  },
};

export default config;
