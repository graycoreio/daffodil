# @daffodil/category

Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/category`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.

The category module manages the graphQL calls, state, selectors, and models for single category calls. Requests for a category should be made with a `DaffCategoryLoad(id)` action through the `DaffCategoryFacade`. Selection of the retrieved category and its loading state can also be done through the `DaffCategoryFacade` with the `category$` and `loading$` attributes.

## Installation
```
npm install @daffodil/category
```
