# @daffodil/category
`@daffodil/category` manages the graphQL calls, state, selectors, and models for single category calls.

## Overview
`@daffodil/category` currently supports both a Magento driver and an in-memory driver for local development.

## Installation
To install `@daffodil/category`, use the following commands in the terminal.

Install with npm:
```bash
npm install @daffodil/category --save
```

Install with yarn:

```bash
yarn add @daffodil/category
```

## Getting started

### Using in-memory web API
Import the `DaffCategoryInMemoryDriverModule.forRoot()` into your root component.

### Using Magento backend
Import the `DaffCategoryMagentoDriverModule.forRoot()` into your root component.
