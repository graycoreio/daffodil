import { BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffProductFacadeInterface } from '@daffodil/product';

export class MockDaffProductFacade implements DaffProductFacadeInterface {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	product$: BehaviorSubject<DaffProduct> = new BehaviorSubject(null);
	dispatch() {};
}
