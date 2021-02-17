# @daffodil/external-router

## Purpose

This package extends `@angular/router` and allows you to seamlessly add external systems that resolve routes alongside the Angular [Router](https://angular.io/guide/router).

For example, this package allows you to:

1. Define pages in an external service like Wordpress
2. Make calls to the Wordpress instance's URL Resolver
3. Use the Angular Router to render the appropriate component or lazy-loaded module as determined by that service.

## Features

- Route Resolution from an External Service
- [Platform Agnostic Interface w/ Supporting Drivers](./guides/drivers.md)
  - [Testing](./guides/drivers/magento.md)
- [Configuration](./guides/configuration.md)

## Guides

- [Installation](./guides/installation.md)
- Usage (TODO)
