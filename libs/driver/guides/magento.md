
# Magento/MageOS

The `@daffodil/driver/magento` package configures the integration between your storefront and Magento 2/MageOS ecommerce platforms.

It provides fundamental configurations that other Daffodil packages use to interact with these platforms. Under the hood, this package configures the Apollo GraphQL client to query the Magento GraphQL API.


## Features

- GraphQl Caching via conversion of relevant requests to Varnish cacheable GET requests.
  - Configurable by other supplemental packages like `@daffodil/product` via `provideDaffMagentoCacheableOperation`
- Predefined `TypePolicies` and `PossibleTypes` for Apollo's `InMemoryCache`.
- Platform-specific cache clearing services for app state management and security in events where the page must have all of its memory cleared via the `DaffDriverHttpClientCacheServiceInterface`


## Prerequisites

- Magento 2.4+ or MageOS instance
- GraphQL endpoint enabled
- CORS configured for cross-origin requests (if frontend and Magento are on different domains)
 
### A note on CORS

You can easily configure CORS for Magento 2 using the [`graycoreio/magento2-cors`](https://github.com/graycoreio/magento2-cors) package with the following configuration in your `env.php`:

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

You can also configure CORS using Fastly, Varnish, Nginx, or any other tool that modifies HTTP responses.

However, you probably do not want/need CORS in production. While convenient during development, CORS introduces significant performance and security risks in production. [Kristof Ringleff](https://www.linkedin.com/in/kristofringleff?originalSubdomain=nz) from [Fooman](https://fooman.com/) explains [why you should avoid CORS in production](https://fooman.com/blog/magento-2-graphql-getting-off-cors.html) in detail. It's worth your time to make sure that you have understood this.

## Common issues

### GraphQL endpoint not available
If you receive errors about GraphQL not being available, ensure that:
- Your Magento instance has GraphQL enabled
- The `/graphql` endpoint is accessible
- Your store is running an Adobe-supported Magento version
- You have not installed [`graycoreio/magento2-cors`](https://github.com/graycoreio/magento2-cors)

