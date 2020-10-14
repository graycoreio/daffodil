# Getting Started

This overview assumes that you have already set up an Angular project and have gone through the [cart installation guide](./installation.md). If you have not, we recommend you do that first.

Daffodil includes multiple layers of functionality that build on each other. The models can be used on their own. The driver layers can be used with the models but also allow custom extensions to those models to be passed as generics. A state layer sits on top of the driver layer. Individual drivers can be overridden through driver injection tokens and custom extensions to models can be passed into the state layer's generics.

The recommended way to use Daffodil is with the state layer.

See [the driver](./drivers.md) and [state](./state.md) guides for information about those layers. See [the extension guide](./extension.md) for information about extending Daffodil. See [the usage guide](./usage.md) for general information about the other parts of `@daffodil/cart`.
