# @daffodil/external-router

## Purpose

This package extends `@angular/router` and allows you to render routes defined in external systems like Wordpress, Magento, Contentful, etc, as if you had defined the routes statically in your Angular `Routes`. This is useful when you are trying to generate "user-friendly" routes in external applications and want to resolve them by their "user-friendly" uri, e.g. `sweatshirts` instead of something like `category/6` or `category/sweatshirts`.

As an example scenario, you could:

1. Define a page with a "user-friendly" url, e.g. `sweatshirts` in an external service like Magento
2. Use the `@daffodil/external-router/driver` to make calls to the Magento instance's URL Resolver
3. Navigate to `www.your-domain.com/sweatshirts` and render the appropriate components for the blog post.

## Features

- Route Resolution from an External Service
- [Platform Agnostic Interface w/ Supporting Drivers](./guides/drivers.md)
  - [Testing](./guides/drivers/magento.md)
- [Configuration](./guides/configuration.md)

## Guides

- [Installation](./guides/installation.md)
- Usage (TODO)
