# Getting Started

This overview assumes that you have already set up an Angular project and have gone through the [cart installation guide](./installation.md). If you have not, we recommend you do that first.

## Setting up your `AppModule`

To get started, import the `DaffCartModule` in your `AppModule`. Next, import `StoreModule.forRoot({})`, which will be relevant later on when utilizing the redux and state management features of the cart module.

```typescript
@ngModule({
  imports:[
    StoreModule.forRoot({}),
    DaffCartModule
  ]
})
export class AppModule {}
```

## Utilizing inside your component

The `DaffCartModule` provides a `DaffCartFacade` that wraps the complexities of the state library into one place. This facade will handle updating the user's cart and can also be utilized to build your UI with behaviors common to a cart.

To inject the facade inside your component, include an instance of `DaffCartFacade` in your component's constructor.

```typescript
@Component({})
export class CartComponent {
  constructor(public cartFacade: DaffCartFacade) {}
}
```