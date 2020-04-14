import { Observable } from 'rxjs';

import { DaffProduct } from '../../models/product';

export interface DaffProductGridFacadeInterface<T extends DaffProduct = DaffProduct> {
	loading$: Observable<boolean>;
	products$: Observable<T[]>;
	dispatch: Function;
}
