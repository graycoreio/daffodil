import { Observable, of } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { DaffConfigurableProductFacadeInterface } from '@daffodil/product';

export class MockDaffConfigurableProductFacade implements DaffConfigurableProductFacadeInterface {
	getAllAttributes(id: string): Observable<Dictionary<string[]>> {
		return of({});
	};
	getAppliedAttributes(id: string): Observable<Dictionary<string>> {
		return of({});
	};
	getMinimumPrice(id: string): Observable<number> {
		return of(null);
	};
	getMaximumPrice(id: string): Observable<number> {
		return of(null);
	};
	isPriceRanged(id: string): Observable<boolean> {
		return of(null);
	};
	getSelectableAttributes(id: string): Observable<Dictionary<string[]>> {
		return of({});
	};
	dispatch(action) {};
}
