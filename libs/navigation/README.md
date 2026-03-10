# @daffodil/navigation
`@daffodil/navigation` manages the graphQL calls, state, selectors, and models for a complete tree of the root category request.

## Overview
`@daffodil/navigation` currently supports a Magento, Shopify, and an in-memory driver (only outputs a shallow trees) for local development.

## Installation
To install `@daffodil/navigation`, use the following commands in your terminal:

Install with npm:
```bash
npm install @daffodil/navigation --save
```

Install with yarn:
```bash
yarn add @daffodil/navigation
```

## Drivers
- [In-memory](/libs/navigation/guides/drivers/in-memory.md)
- [Magento](/libs/navigation/guides/drivers/magento.md)
- [Shopify](/libs/navigation/guides/drivers/shopify.md)

## Usage
Requests for a navigation should be made with a `DaffNavigationLoad(id)` action through the `DaffNavigationFacade`. Selection of the retrieved navigation and its loading state can also be done through the `DaffNavigationFacade` with the `navigation$` and `loading$` attributes.