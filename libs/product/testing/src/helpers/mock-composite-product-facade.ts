import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { DaffCompositeProductFacadeInterface, DaffCompositeProductItemOption } from '@daffodil/product';

export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getDiscountAmount(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	getDiscountedPrice(id: string): BehaviorSubject<number> {
		return new BehaviorSubject(null);
	};
	hasDiscount(id: string): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	};
	getAppliedOptions(id: string): BehaviorSubject<Dictionary<DaffCompositeProductItemOption['id']>> {
		return new BehaviorSubject({});
	}
	dispatch(action) {};
}
