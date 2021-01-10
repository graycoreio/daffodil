# @daffodil/builders
Custom Angular builders for Daffodil projects.

## Installation

```
npm install --save @daffodil/builders
```

## Usage

### Generate Fragment Types

> Note that this builder now generates possible type data instead of raw fragment types data. This is to comply with the [breaking cache changes](https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/#breaking-cache-changes) from Apollo Client v3. See [information about usage here](https://www.apollographql.com/docs/react/data/fragments/#defining-possibletypes-manually).

In your `angular.json`, add an architect section for generating fragment type data. Pass the URL of your GraphQL schema in as the `url` option. The data will be generated and written to the file specified by the `path` option.

If either `url` or `path` are falsey, the builder will do nothing and exit successfully. You can use this behavior to disable the builder for environments where the schema is not available.

```json
"architect": {
  "generateGraphQLFragmentTypes": {
    "builder": "@daffodil/builders:generateFragmentTypes",
    "options": {
      "url": "https://example.com/graphql",
      "path": "src/app/fragmentTypes.json"
    },
    "configurations": {
      "test": {
        "url": "",
        "path": ""
      }
    }
  },
  ...
}
```

Run the builder, optionally passing in the configuration token (`test` in this case).

```
ng run <project>:generateGraphQLFragmentTypes -c test
```
