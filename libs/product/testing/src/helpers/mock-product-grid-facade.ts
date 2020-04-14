import { BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffProductGridFacadeInterface } from '@daffodil/product';

export class MockDaffProductGridFacade<T extends DaffProduct> implements DaffProductGridFacadeInterface<T> {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	products$: BehaviorSubject<T[]> = new BehaviorSubject([]);
	dispatch() {};
}
