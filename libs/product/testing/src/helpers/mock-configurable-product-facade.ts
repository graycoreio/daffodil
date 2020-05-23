import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { DaffConfigurableProductFacadeInterface } from '@daffodil/product';

export class MockDaffConfigurableProductFacade implements DaffConfigurableProductFacadeInterface {
	getAppliedAttributes(id: string): BehaviorSubject<Dictionary<string>> {
		return new BehaviorSubject({});
	};
	getPrice(id: string): BehaviorSubject<string> {
		return new BehaviorSubject(null);
	};
	getUndeterminedAttributes(id: string): BehaviorSubject<Dictionary<string[]>> {
		return new BehaviorSubject({});
	};
	dispatch() {};
}
