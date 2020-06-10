import { BehaviorSubject, Observable, of } from 'rxjs';

import { DaffProduct, DaffProductFacadeInterface } from '@daffodil/product';

export class MockDaffProductFacade implements DaffProductFacadeInterface {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	/**
	 * @deprecated use getProduct instead.
	 */
	product$: BehaviorSubject<DaffProduct> = new BehaviorSubject(null);
	getProduct(id: string): Observable<DaffProduct> {
		return of(null);
	}
	dispatch(action) {};
}
