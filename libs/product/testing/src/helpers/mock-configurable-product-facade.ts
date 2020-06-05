import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { DaffConfigurableProductFacadeInterface } from '@daffodil/product';

export class MockDaffConfigurableProductFacade implements DaffConfigurableProductFacadeInterface {
	getAllAttributes(id: string): BehaviorSubject<Dictionary<string[]>> {
		return new BehaviorSubject({});
	};
	getAppliedAttributes(id: string): BehaviorSubject<Dictionary<string>> {
		return new BehaviorSubject({});
	};
	getMinimumPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getMaximumPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	isPriceRanged(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(null);
	};
	getSelectableAttributes(id: string): BehaviorSubject<Dictionary<string[]>> {
		return new BehaviorSubject({});
	};
	dispatch(action) {};
}
