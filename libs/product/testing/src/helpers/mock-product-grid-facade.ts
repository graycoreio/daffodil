import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { DaffProduct, DaffProductGridFacadeInterface } from '@daffodil/product';

@Injectable({providedIn: 'root'})
export class MockDaffProductGridFacade implements DaffProductGridFacadeInterface {
	loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
	products$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);
	dispatch(action) {};
}
