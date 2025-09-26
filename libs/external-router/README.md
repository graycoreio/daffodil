# @daffodil/external-router

`@daffodil/external-router` extends `@angular/router` and allows you to render routes defined in external systems like Wordpress, Magento, Contentful, etc, as if you had defined the routes statically in your Angular `Routes`.

## Overview
It's useful when generating user-friendly routes in external applications and resolving them by their user-friendly URI, such as `/sweatshirts` instead of `/category/6` or `category/sweatshirts.`

## Installation

To install `@daffodil/external-router`, use the following commands in your terminal.

Install with npm:

```bash
npm install @daffodil/external-router --save
```

Install with yarn:

```bash
yarn add @daffodil/external-router
```

## Getting Started

See the [usage guide](/libs/external-router/guides/usage.md) for a step-by-step walkthrough of setting up external routing in your application.

## Configuration

Configure the external router behavior with custom options. See the [configuration guide](/libs/external-router/guides/configuration.md) for available options.

## Drivers

We provide a driver interface along with a few pre-fabricated drivers for you to simply drop into your app and get started with external route resolution.

- [Custom Driver](/libs/external-router/guides/drivers/custom.md) - Create your own driver for any external system
- [In-Memory Driver](/libs/external-router/guides/drivers/in-memory.md) - Store routes in memory for development
- [Magento Driver](/libs/external-router/guides/drivers/magento.md) - Integration with Magento 2 URL resolution
- [Testing Driver](/libs/external-router/guides/drivers/testing.md) - Mock driver for unit testing

## Testing

Learn how to test your external router configuration and route guards. See the [testing guide](/libs/external-router/guides/testing.md) for examples and best practices.
