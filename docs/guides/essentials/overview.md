# Essentials

## Overview

Daffodil consists of a few different layers, each which are appropriate for different use cases.

#### Driver
The driver layer is the most powerful layer. It interacts with external platforms and structures data into Daffodil's specific model format. This enables a single frontend application to interface with multiple platforms without dealing with the differences or intricacies of each of those platforms.

Driver usage is straightforward; simply call a method on the driver class and use the result! Nearly all driver methods return an [`Observable`](https://rxjs.dev/api/index/class/Observable) to encapsulate the async behavior of network requests.

```ts
import {DaffProductServiceInterface, DaffProductDriver} from '@daffodil/product/driver';

@Component({
	template: `
	  <div>{{ (product$ | async).name }}</div>
	`
})
class AppComponent implements OnInit {
	product$: Observable<DaffProduct>;

	constructor(
		@Inject(DaffProductDriver) private productDriver: DaffProductServiceInterface
	) {}

	ngOnInit() {
		this.product$ = this.productDriver.get('productId')
	}
}
```

#### State
The state layer builds upon the driver layer to provide app-wide redux state. Driver operations are triggered by dispatching actions and results (or the errors) are selectable from state. Daffodil abstracts both of these features in *facades*.

State usage is more complex than driver but offers more advanced capabilities like loading states and error handling.

```ts
import {DaffState, DaffStateError} from '@daffodil/core/state'
import {DaffProductPageFacade, DaffProductPageLoad} from '@daffodil/product/state';

@Component({
	selector: 'product',
	template: `
	  <div>{{ product().name }}</div>
	`
})
class ProductComponent implements OnInit {
	product = input<DaffProduct>()

	ngOnInit() {
		this.product$ = this.productDriver.get('productId')
	}
}

@Component({
	template: `
	  @switch (loading$ | async) {
			@case (STABLE) {
			  <product [product]="product$ | async"></product>
			}
			@case (ERROR) {
				Errors occurred:
				@for (const error in errors$ | async) {
				  <div>
				  	{{ error.message }}
					</div>
				}
			}
			@default {
				Product page is loading
			}
		}
	`
})
class AppComponent implements OnInit {
	product$: Observable<DaffProduct>;
	loading$: Observable<DaffState>;
	errors$: Observable<Array<DaffStateError>>;

	readonly STABLE = DaffState.Stable
	readonly ERROR = DaffState.Error

	constructor(
		private productFacade: DaffProductPageFacade
	) {}

	ngOnInit() {
		this.productFacade.dispatch(new DaffProductPageLoad('productId'));
		this.product$ = this.productFacade.product$;
		this.errors$ = this.productFacade.errors$;
	}
}
```
