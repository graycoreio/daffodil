import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffProduct } from '../../models/product';

export interface DaffProductFacadeInterface<T extends DaffProduct = DaffProduct> extends DaffStoreFacade<Action> {
	loading$: Observable<boolean>;
	product$: Observable<T>;
}
