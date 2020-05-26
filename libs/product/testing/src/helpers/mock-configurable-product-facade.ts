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
	getPrice(id: string): BehaviorSubject<string> {
		return new BehaviorSubject(null);
	};
	getSelectableAttributes(id: string): BehaviorSubject<Dictionary<string[]>> {
		return new BehaviorSubject({});
	};
	dispatch(action) {};
}
