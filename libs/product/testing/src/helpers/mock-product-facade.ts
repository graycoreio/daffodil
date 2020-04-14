import { BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffProductFacadeInterface } from '@daffodil/product';

export class MockDaffProductFacade<T extends DaffProduct> implements DaffProductFacadeInterface<T> {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	product$: BehaviorSubject<T> = new BehaviorSubject(null);
	dispatch() {};
}
