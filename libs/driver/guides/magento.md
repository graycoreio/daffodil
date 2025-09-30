
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

There's an easy way to setup CORS for Magento 2 with the [`graycoreio/magento2-cors`](https://github.com/graycoreio/magento2-cors) package. You can use the following configuration inside your `env.php`:

```php
<?php

return [
    ...otherConfig,
    'system' => [
        'default' => [
            'web' => [
                'graphql' => [
                    'cors_max_age' => 86400,
                    'cors_allow_credentials' => 1,
                    'cors_allowed_methods' => 'POST, OPTIONS, GET',
                    'cors_expose_headers' => 'X-Magento-Cache-Id',
                    'cors_allowed_headers' =>
                        'Content-Currency, Store, X-Magento-Cache-Id, X-Captcha, Content-Type, Authorization, DNT, TE',
                    // Daffodil
                    'cors_allowed_origins' => 'https://your-storefront-url.com,http://localhost:4200'
                    // Any
                    'cors_allowed_origins' => '*'
                ]
            ]
        ]
    ]
];
```

You can also setup CORS using Fastly, Varnish, Nginx, or any other tool that interacts with the HTTP Response. 

However, you probably do not want/need CORS in production. CORS is great for development, but it is a major performance and security risk in production environments. [Kristof Ringleff](https://www.linkedin.com/in/kristofringleff?originalSubdomain=nz) from [Fooman](https://fooman.com/) has [a wonderful article outlining why you should not use CORS in production](https://fooman.com/blog/magento-2-graphql-getting-off-cors.html). It's worth your time to make sure that you have understood this.

## Common Issues

### GraphQL Endpoint Not Available
If you receive errors about GraphQL not being available, ensure that:
- Your Magento instance has GraphQL enabled
- The `/graphql` endpoint is accessible
- Your store is running a supported (by Adobe) Magento version
- You have not installed [`graycoreio/magento2-cors`](https://github.com/graycoreio/magento2-cors).

