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

## Drivers

We provide a driver interface along with a few pre-fabricated drivers for you to simply drop into your app and get started with external route resolution.

- [Customize your own driver](/libs/external-router/guides/drivers/custom.md)
- [In-Memory](/libs/external-router/guides/drivers/in-memory.md)
- [Magento](/libs/external-router/guides/drivers/magento.md)
- [Testing](/libs/external-router/guides/drivers/testing.md)
