# Filter Architecture

## Use Cases

As a user, I would like to be able to apply filters to a collection of items of a category.
As a user, I would like to know what filters are currently applied to the category. 
As a user, I would like to see the filters applied IMMEDIATELY, without waiting for a [response from a backend platform (input-delay).](https://web.dev/fid/)

## Features
- [Idempotence](./filtering/idempotence.md)

## Implementation Details

When an action is dispatched that would modify the applied filter state of the application, we intentionally and optimistically apply the filters to the state of the category page. This means the following occurs in order:

1. An action modifying the applied filter state is dispatched
2. Reducers add/remove the filters modified by the action in state. The modification assumes that the associated filters will be applied/removed successfully by the backing platform (optimistic).
3. A driver call will be made to get the resulting category (and its items) by computing a `DaffCategoryRequest` from the current category state including the applied filter modification from (2).
4. Processing the response from the [associated driver](./#driver-specific-mechanisms) into a `DaffGetCategoryResponse`. 

### Driver Specific Mechanisms
It is important to note that not all platforms guarantee a response with enough information to determine whether or not a filter state was modified successfully. As a result, drivers targeting such platforms **must** internally process their responses to return appropriately applied filter states, otherwise the applied filter state will be lost when the next state is computed from the response. Such drivers can do so by using the [behaviors](../../src/filters/behaviors) of the `@daffodil/category` package.

## Idempotence

Daffodil applies filters "idempotently". That is to say, when a filter operation is applied multiple times, the returned result is guaranteed to be the same. 

The only exception to this rule is a toggle action, as it is strictly impossible for such an action to be idempotent since it intentionally oscillates a state property from one value to another.
