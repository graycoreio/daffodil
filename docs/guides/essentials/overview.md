# Overview

Daffodil provides multiple architectural layers for different use cases.

## Driver Layer

The driver layer is the most powerful layer. Drivers interact with external platforms and structure data into Daffodil's model format. This enables a single frontend application to interface with multiple platforms without having to deal with platform-specific differences.

Driver usage is straightforward. Simply call a method on the driver class and use the result!

Most driver methods return an [Observable](https://rxjs.dev/api/index/class/Observable) to handle the async behavior of network requests.


```ts
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductDriver, DaffProductServiceInterface } from '@daffodil/product/driver';

@Component({
  template: `
    <div>{{ (product$ | async).name }}</div>
  `,
})
class AppComponent implements OnInit {
  product$: Observable<DaffProduct>;

  constructor(
    @Inject(DaffProductDriver) private productDriver: DaffProductServiceInterface,
  ) {}

  ngOnInit() {
    this.product$ = this.productDriver.get('productId');
  }
}
```

See the [drivers guide](/docs/guides/essentials/drivers.md) for more information.

## State Layer

The state layer builds upon the driver layer to provide app-wide Redux state management. Operations are triggered by dispatching actions, and results (or the errors) are selectable from state. Daffodil abstracts both of these features in *facades*.

State usage is more complex than driver but offers more advanced capabilities like loading states and error handling.

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffState, DaffStateError } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
import { DaffProductPageFacade, DaffProductPageLoad } from '@daffodil/product/state';

@Component({
  template: `
    @switch (loading$ | async) {
      @case (STABLE) {
        <product [product]="product$ | async"></product>
      }
      @case (ERROR) {
        <div>Error occurred</div>
        @for (error of errors$ | async; track error) {
          <div>{{ error.message }}</div>
        }
      }
      @default {
        <div>Loading...</div>
      }
    }
  `,
})
class AppComponent implements OnInit {
  product$: Observable<DaffProduct>;
  loading$: Observable<DaffState>;
  errors$: Observable<Array<DaffStateError>>;

  readonly STABLE = DaffState.Stable;
  readonly ERROR = DaffState.Error;

  constructor(
    private productFacade: DaffProductPageFacade,
  ) {}

  ngOnInit() {
    this.productFacade.dispatch(new DaffProductPageLoad('productId'));
    this.product$ = this.productFacade.product$;
    this.loading$ = this.productFacade.loading$;
    this.errors$ = this.productFacade.errors$;
  }
}
```
