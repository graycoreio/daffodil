import { Observable } from 'rxjs';

import { DaffProduct } from '../../models/product';

export interface DaffProductFacadeInterface<T extends DaffProduct = DaffProduct> {
	loading$: Observable<boolean>;
	product$: Observable<T>;
	dispatch: Function;
}
