import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

export interface DaffProductGridFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	loading$: Observable<boolean>;
	products$: Observable<T[]>;
}
