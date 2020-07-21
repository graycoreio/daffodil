# @daffodil/cart

Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/cart`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.


## Installation

```
npm install @daffodil/cart
```

## Magento

### Query Complexity Limit

The Magento cart address driver uses a query that has a high complexity of 481. This exceeds the default limit of 300. Users of the Magento cart drivers should raise the query complexity limit above 481 to prevent the cart address operations from failing.

Graycore maintains a Magento 2 module that will modify limits to accomodate Daffodil queries. Refer to [the module repository](https://github.com/graycoreio/magento2-graphql-query-complexity-limiter-module) for installation procedures.
