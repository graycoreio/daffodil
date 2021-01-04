# Cart Resolution

This tutorial will walk you through Daffodil's Cart Resolution process which is responsible for resolving a user's cart upon application initialization. This behavior is chiefly managed by the `DaffResolvedCartGuard`.

## Supported Scenarios

At the moment, the following scenarios are handled by the `DaffResolvedCartGuard` **for guest users only**.

> Note that currently, carts for authenticated users are not supported.

[//]: # "TODO(griest024): remove note when authenticated carts are supported."

- Generating a new cart when a user visits the application for the very first time.
- Retrieving a previously existing cart for a user upon page reload.
- Generating a new cart for a user when their prior cart isn't found (e.g., after expiry).
- Skipping cart resolution during server-side rendering.
- Upon a resolution failure, bailing out and navigating somewhere outside the scope of a cart resolution (e.g. your Ecommerce Service's API is down).

## Usage

Assuming that you're already using the `DaffCartStateModule` and have previously selected a [driver](../../drivers.md) for `@daffodil/cart`, you can simply add the guard to your route's `canActivate` and the guard will handle the rest.

```typescript
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { DaffResolvedCartGuard } from '@daffodil/cart/state';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
export const appRoutes: [
   {
      path: '',
      component: HelloComponent,
      canActivate: [DaffResolvedCartGuard],
   }
]

@NgModule({
  imports: [
    //DaffCartInMemoryDriverModule.forRoot(),
    DaffCartStateModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppModule {}
```

Upon adding the code, load up the route and take a look at the Network Requests in your browser. You should see at least one request to your ecommerce systems's cart endpoint that attempts resolution.

## Configuration

You can configure the route to which the `DaffResolvedCartGuard` navigates when an error occurs during resolution. See the [configuration guide](./configuration.md) and the `resolution` key of `DaffCartStateConfiguration` for more information.

## Gotchas

### Guard Ordering
The guard's return is observable, and as such, when paired with other guards it won't necessarily complete in the order you expect, be sure to be careful about your guard ordering.

For example, Angular provides no guarantee that either of these guards runs before the other.

```ts
{
  ...,
  canActivate: [DaffResolvedCartGuard, SomeOtherGuard]
}
```

If you need the guarantee, you can nest the guards.

```ts
{
  ...,
  canActivate: [DaffResolvedCartGuard],
  children: [
    {
      ...
      canActivate: [SomeOtherGuard]
    }
  ]
}
```