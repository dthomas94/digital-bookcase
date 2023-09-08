# Digital Bookcase

Digital Bookcase is a mobile application allowing users to create/manage a personal bookcase.

## Installation

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) to install dependencies in the root folder.

```bash
yarn
```


## Description

### Background

This project utilizes data from [OpenLibary](https://openlibrary.org/developers) and Ruby on Rails for the backend with GraphQL as the api layer. The source for the backend code can be found at [Digital Bookcase API](https://github.com/dthomas94/digital-bookcase-api)

### Updating the GraphQL TypeScript Types
Codegen is used for generating TypeScript types from the GraphQL schema generated in [Digital Bookcase API](https://github.com/dthomas94/digital-bookcase-api)

To update the TypeScript types on the frontend:

1. Copy schema.graphql from the backend repo into the /graphql folder in this repo
2. Run the code generation command ```yarn run graphql-codegen```



### Technologies
- Styled Components
- Apollo Client
- GraphQL
- Expo
- React Native
- TypeScript

### Features

- Sign up for an account
- Login/logout
- Create a named bookcase
- Add books to your bookcase
- Search for books by title
- "Favorite" books
- Mark books as "read" (COMING SOON)
- Use your phone's camera to scan a book's ISBN and display it in the app (COMING SOON)




