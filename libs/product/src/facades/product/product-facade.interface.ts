import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffProduct } from '../../models/product';

export interface DaffProductFacadeInterface<T extends DaffProduct = DaffProduct> {
	loading$: Observable<boolean>;
	product$: Observable<T>;
	dispatch(action: Action): void;
}
