# Filter Architecture

## Use Cases

As a user, I would like to be able to apply filters to a collection of items of a category.
As a user, I would like to know what filters are currently applied to the category. 
As a user, I would like to see the filters applied IMMEDIATELY, without waiting for a [response from a backend platform (input-delay).](https://web.dev/fid/)

## Features
- [Filter Types](./filtering/types.md)
  - [Equal](./filtering/types/equal.md)
  - [Range](./filtering/types/range.md)
- [Idempotence](./filtering/idempotence.md)

## Implementation Details

When an action is dispatched that would modify the "applied" filter state of the application, we intentionally optimistically apply the filters to the state of the category page. This means the following occurs in following order:

1. An action modifying the applied filter state is dispatched
2. Reducers computing the next state ASSUMING that the associated filters will be applied/removed.
3. An associated driver call will be made to get the resulting category (and items) object.
  a. Computing a `DaffCategoryRequest` from the current category state
4. Processing the response from the associated driver into a `DaffGetCategoryResponse`.
  a. See [Driver Specific Mechanisms](./#driver-specific-mechanisms) 

### Driver Specific Mechanisms
Certain platforms are not guaranteed to provide a response with the resulting filter states, i.e. they do not return whether or not a filter was or was not applied. As a result, drivers targeting such platforms **must** process their responses to return appropriately applied filter states, otherwise the applied state will be lost when state rehydrates from the response. Drivers can do so by using the [behaviors](../../src/filters/behaviors) of the `@daffodil/category` package.