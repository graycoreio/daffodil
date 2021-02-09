# @daffodil/external-router

## Purpose

This package extends `@angular/router` and allows you to add external systems that resolve routes, and then use the [Router](https://angular.io/guide/router) to navigate between them.

For example, this package allows you to:

1. Define routes in an external service
2. Make calls to that service
3. Use the Angular Router to render the appropriate component or lazy-loaded module as determined by that service.

## Features

- Route Resolution from an External Service
- [Platform Agnostic Interface w/ Supporting Drivers](./guides/drivers.md)
  - [Testing](./guides/drivers/magento.md)
- [Configuration](./guides/configuration.md)

## Guides

- [Installation](./guides/installation.md)
- Usage (TODO)
