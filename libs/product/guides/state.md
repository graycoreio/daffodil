# State

## Configurable product attributes selection
The purpose of this section is to describe how the available/selectable configurable product attributes are determined at any given time by the Daffodil configurable product selectors. With that goal in mind the following questions will be answered:

- What is a configurable product variant?
- How are the initial available attributes determined?
- How do the Daffodil configurable product selectors provide an ideal user experience?

### What is a configurable product variant?
A variant is one version of the configurable product with all attributes assigned a chosen option. Variants exist because all configurations of the product might not be in stock. For example, a shirt might have a medium, red shirt and a small, green shirt in stock, but no small, red shirts or medium, green shirts. In this case there would be two variants in stock (mediumRed, smallGreen) but 4 variants total (smallRed, mediumRed, smallGreen, mediumGreen). It could even be that the retailer doesn't ever sell a particular variant of a product. This ensures the customer can't add a configurable product to the cart that is not in stock or isn't for sale.

### How are the initial available attributes determined?
When no attributes have yet been selected by the user, the available attributes are simply every possible attribute option of every variant in stock. To expand the shirt product example, consider the following variants:

| Size | Color | Stock Status |
| ---- | ----- | ------------ |
| S    | Red   | In stock     |
| S    | Green | In stock     |
| M    | Red   | Out of stock |
| N    | Green | Out of stock |
| L    | Red   | In stock     |
| L    | Green | Out of stock |

The initial available attributes for these variants would look something like:
1. Size: S, L
2. Color: Red, Green

Since there are no M sized variants in stock, that attribute option is not included in the available attribute options.

### How do the Daffodil configurable product selectors provide an ideal user experience?
Perhaps that question is a bit bold. Maybe a better question with more defined acceptance criteria is, how do Daffodil selectors provide the user with the maximum amount of information for the least amount of user interaction?

To further expand the shirt product example, considering that all variants are in stock:

| Size | Color | Material  |
| ---- | ----- | --------- |
| S    | Red   | Cotton    |
| S    | Green | Cotton    |
| M    | Red   | Cotton    |
| M    | Green | Cotton    |
| L    | Green | Cotton    |
| S    | Red   | Polyester |
| L    | Green | Polyester |

Available attributes:
1. Size: S, M, L
2. Color: Red, Green
3. Material: Cotton, Polyester

Suppose the first user interaction is to choose the size M option. Immediately, there are no polyester variants remaining, since there are no size M polyester shirts. To keep the user interaction to a minimum, the Daffodil selectors remove the polyester material from the available attributes.

Available attributes:
1. Size: S, M, L
2. Color: Red, Green
3. Material: Cotton

Notice that even though size M is selected, the other sizes are still avaiable. This is so the user doesn't ever need to deselect an attribute option. Instead, they can simply select another size. Suppose they select size L from the current state.

Available attributes:
1. Size: S, M, L
2. Color: Green
3. Material: Cotton, Polyester

Now, both materials become available and the Red color is not, because there are no L, Red shirts. Now the user selects Green.

Available attributes:
1. Size: S, M, L
2. Color: Green
3. Material: Cotton, Polyester

At this point, the user should see that the L and Green options are selected and that only the available attributes are interactable. The final question is, why are all of the sizes still available, but only the Green color is? The answer is that the order in which the user selects attribute options matters, and this is the key to how the selectors work. Each set of available attribute options ("Material: Cotton, Polyester" would be a set) is determined only by the attributes that were chosen before it. This allows the user to deselect an option simply by choosing a different one, while at the same time informing the user of what attribute options will result in a product that is actually in stock. Furthermore, whenever the user chooses a new option for an attribute they'd already chosen (e.g. size S), all attributes that were chosen after the newly selected attribute will be reset, since the available attributes for the proceeding attributes may have changed (in this case, color would change to include Red).

## Dependency injectable meta-reducers
`@daffodil/product/state` exposes the `daffProductProvideMetaReducers` function with which custom meta-reducers can be provided. Meta-reducers run before the reducer and should be used for behavior other than modifying state. Modifying actions or logging are good examples of behavior that belongs in meta-reducers.

See [meta-reducers](https://ngrx.io/guide/store/metareducers) for more information.

### Example
The following example demonstrates providing a custom meta-reducer that modifies the names of loaded products.

```ts
const metaReducer: MetaReducer<DaffProductReducersState, DaffProductPageActions | DaffProductActions> =
  (reducer) => (state, action) => {
    switch (action.type) {
      case DaffProductPageActionTypes.ProductPageLoadSuccessAction:
      case DaffProductActionTypes.ProductLoadSuccessAction:
        return reducer(
          state,
          new DaffProductPageLoadSuccess({
            ...action.payload,
            products: action.payload.products.map(product => ({
              ...product,
              name: `${product.name} meta-reducer was here`,
            })),
          }),
        );

      default:
        return reducer(state, action);
    }
  };

@NgModule({
  imports: [
    DaffProductStateModule,
  ],
  providers: [
    ...daffProductProvideMetaReducers(metaReducer),
  ],
})
class MyModule {}
```
