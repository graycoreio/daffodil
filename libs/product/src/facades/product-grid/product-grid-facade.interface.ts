import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffProduct } from '../../models/product';

export interface DaffProductGridFacadeInterface<T extends DaffProduct = DaffProduct> {
	loading$: Observable<boolean>;
	products$: Observable<T[]>;
	dispatch(action: Action): void;
}
