# Cart State Configuration

The `@daffodil/cart/state` package exposes a `forRoot` method on the `DaffCartStateModule` that allows you to pass in a configuration object to configure the behavior of the package.

You can import is like so

```ts
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
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCartStateModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppModule {}
```

The only argument to `forRoot` is the configuration object. For more information, see `DaffCartStateConfiguration`.

