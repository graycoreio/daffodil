import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '../../models/product';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
/**
 * A facade for accessing best sellers state from an application component.
 */
export declare class DaffBestSellersFacade<T extends DaffProduct = DaffProduct> implements DaffStoreFacade<Action> {
    private store;
    /**
     * The loading state for getting best selling products.
     */
    loading$: Observable<boolean>;
    /**
     * Best selling products.
     */
    bestSellers$: Observable<DaffProduct[]>;
    constructor(store: Store<DaffProductReducersState<T>>);
    /**
     * Dispatches an action to the rxjs action stream.
     * @param action
     */
    dispatch(action: Action): void;
}
