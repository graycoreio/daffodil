# @daffodil/cart
Building and maintaining a model and code for an ecommerce store is complex and mentally taxing. `@daffodil/cart`
provides clear interfaces, models, and factories for the frontend of an ecommerce store so that you don't have to.

## Installation
To install `@daffodil/cart`, use the following commands in your terminal.

Install with npm:
```
npm install @daffodil/cart --save
```

Install with yarn:
```
yarn add @daffodil/cart
```

## Getting started
`@daffodil/cart` includes multiple layers of functionality that build on each other. The models can be used on their own. The recommended way to use Daffodil is with the state layer.

| Layer                                        | Description                                                                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [State](/libs/cart/guides/state.md)          | Can be used with the models but also allow custom extensions to those models to be passed as generics                                              |
| [Drivers](/libs/cart/guides/drivers.md)      | Sits on top of the driver layer                                                                                                                    |
| [Extensions](/libs/cart/guides/extension.md) | Individual drivers can be overridden through driver injection tokens and custom extensions to models can be passed into the state layer's generics |
