import { BehaviorSubject } from 'rxjs';

import { DaffProduct, DaffProductGridFacadeInterface } from '@daffodil/product';

export class MockDaffProductGridFacade implements DaffProductGridFacadeInterface {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	products$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);
	dispatch() {};
}
