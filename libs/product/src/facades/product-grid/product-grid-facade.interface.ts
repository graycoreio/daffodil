import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core/state';

import { DaffProduct } from '../../models/product';

export interface DaffProductGridFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	loading$: Observable<boolean>;
	products$: Observable<T[]>;
}
