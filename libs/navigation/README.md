# @daffodil/navigation
`@daffodil/navigation` manages the graphQL calls, state, selectors, and models for a complete tree of the root category request.

## Overview
Right now, `@daffodil/navigation` currently supports both a Magento driver and an in-memory driver (only outputs a shallow trees) for local development.

## Installation
To install `@daffodil/navigation`, use the following commands in your terminal.

Install with npm:
```bash
npm install @daffodil/navigation --save
```

Install with yarn:

```bash
yarn add @daffodil/navigation
```

## Getting started

### Using in-memory web API
Import the `DaffNavigationInMemoryDriverModule.forRoot()` into your root component.

### Using Magento backend
Import the `DaffNavigationMagentoDriverModule.forRoot()` into your root component.

## Usage
Requests for a navigation should be made with a `DaffNavigationLoad(id)` action through the `DaffNavigationFacade`. Selection of the retrieved navigation and its loading state can also be done through the `DaffNavigationFacade` with the `navigation$` and `loading$` attributes.