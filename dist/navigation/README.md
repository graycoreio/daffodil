# @daffodil/navigation

Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/navigation`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.

The navigation module manages the graphQL calls, state, selectors, and models for a complete tree of the root category request. Requests for a navigation should be made with a `DaffNavigationLoad(id)` action through the `DaffNavigationFacade`. Selection of the retrieved navigation and its loading state can also be done through the `DaffNavigationFacade` with the `navigation$` and `loading$` attributes.

Right now, the `@daffodil/navigation` package supports an in-memory for developing locally (only outputs a shallow tree) and a magento driver.

## Installation
```
npm install @daffodil/navigation
```

To use the `@daffodil/navigation` with an `in-memory-web-api`, import the `DaffNavigationInMemoryDriverModule.forRoot()` into your app.module. To use the `@daffodil/navigation` with a magento backend, import the `DaffNavigationMagentoDriverModule.forRoot()` into your app.module.
