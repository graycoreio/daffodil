
# Magento/MageOS

The `@daffodil/driver/magento` package configures the basic integration between your storefront and Magento 2/MageOS ecommerce platforms. 

It provides the fundamental configurations that other Daffodil packages will use to interact with the relevant platforms. 

Under the hood, this packages configures the Apollo GraphQl client to optimally query the Magento GraphQl api.

## Features

- GraphQl Caching via conversion of relevant requests to Varnish cacheable GET requests.
  - Configurable by other supplemental packages like `@daffodil/product` via `provideDaffMagentoCacheableOperation`
- Predefined `TypePolicies` and `PossibleTypes` for Apollo's `InMemoryCache`.
- Platform-specific cache clearing services for app state management and security in events where the page must have all of its memory cleared via the `DaffDriverHttpClientCacheServiceInterface`


## Prerequisites

- Magento 2.4+ or MageOS instance
- GraphQL endpoint enabled
- CORS configured for cross-origin requests (if your frontend is not on the same domain as your ecommerce store)

### A note on CORS

You probably do not want/need CORS in production. CORS is great for development, but it is a major performance and security risk in production environments. [Kristof Ringleff](https://www.linkedin.com/in/kristofringleff?originalSubdomain=nz) from [Fooman](https://fooman.com/) has [a wonderful article outlining why you should not use CORS in production](https://fooman.com/blog/magento-2-graphql-getting-off-cors.html). It's worth your, and your customer's time, to make sure that you have understood this.

## Common Issues

### GraphQL Endpoint Not Available
If you receive errors about GraphQL not being available, ensure that:
- Your Magento instance has GraphQL enabled
- The `/graphql` endpoint is accessible
- Your store is running a supported (by Adobe) Magento version
- You have the CORS Module installed.

