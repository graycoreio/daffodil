import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductGridFacadeInterface } from '@daffodil/product/state';

@Injectable({ providedIn: 'root' })
export class MockDaffProductGridFacade implements DaffProductGridFacadeInterface {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	products$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);
	dispatch(action) {};
}
