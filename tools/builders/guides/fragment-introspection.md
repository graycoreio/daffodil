# GraphQL Fragment Introspection

- [GraphQL Fragment Introspection](#graphql-fragment-introspection)
  - [Fetching and Processing](#fetching-and-processing)
  - [Adding to the Codebase](#adding-to-the-codebase)
  - [Loading into Apollo Cache](#loading-into-apollo-cache)

In order for Apollo to properly match fragment types, the GraphQL schema must be fetched, processed, added to the codebase, and loaded into the `ApolloClient` cache.

<!-- TODO: add link to apollo docs -->

## Fetching and Processing

To help streamline the process, Daffodil provides a `@daffodil/builders` package that contains the `generateFragmentTypes` builder. This builder will fetch the schema from the specified URL and write the processed data to the specified file.

We recommend adding a command to your `angular.json` to generate fragment types. The following example demonstrates this for a [mage2docker backend](https://github.com/graycoreio/mage2docker).

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "",
  "projects": {
    "app": {
      ...
      "architect": {
        "generateFragmentTypes": {
          "builder": "@daffodil/builders:generateFragmentTypes",
          "options": {
            "url": "",
            "path": ""
          },
          "configurations": {
            "magento-local": {
              "url": "https://magento2.test/graphql",
              "path": "src/app/fragmentTypes.json"
            }
          }
        },
        ...
      }
    }
  },
  ...
}
```

`fragmentTypes.json` can then be generated with the single command:
```bash
NODE_TLS_REJECT_UNAUTHORIZED=0 ng run app:generateFragmentTypes -c magento-local
```

> Note that using `NODE_TLS_REJECT_UNAUTHORIZED=0` is _unsafe_. It is recommended _only_ for local services using self-signed certificates, such as mage2docker.

Refer to [the `@daffodil/builders` README](../../tools/builders/README) for more info.

## Adding to the Codebase

The generated JSON document containing fragment types can and should be committed to source control.

An alternative is to generate the schema during a build and release phase, during CI for example. This is up to the developer.

## Loading into Apollo Cache

Once the fragment types JSON document has been generated and added to the codebase, it needs to be loaded into cache.

The following example shows a possible Apollo configuration that creates an introspection fragment matcher and loads it into the in-memory cache.

```typescript
import { ApolloModule, Apollo } from 'apollo-angular';
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';

import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

@NgModule({
  ...,
  imports: [
    ...,
    ApolloModule,
    HttpLinkModule
  ]
})
class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: ApolloLink.from([
        httpLink.create({
          uri: 'https://magento2.test/graphql',
          withCredentials: false,
        }),
      ]),
      cache,
    });
  }
}
```

