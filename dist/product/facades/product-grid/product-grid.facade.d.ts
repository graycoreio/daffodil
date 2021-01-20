import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffProductReducersState } from '../../reducers/product-reducers-state.interface';
import { DaffProduct } from '../../models/product';
import { DaffProductGridFacadeInterface } from './product-grid-facade.interface';
/**
 * A facade for accessing state for a list of products from an application component.
 */
export declare class DaffProductGridFacade<T extends DaffProduct = DaffProduct> implements DaffProductGridFacadeInterface<T> {
    private store;
    /**
     * The loading state for retrieving a list of products.
     */
    loading$: Observable<boolean>;
    /**
     * The state for a list of products.
     */
    products$: Observable<T[]>;
    constructor(store: Store<DaffProductReducersState<T>>);
    /**
     * Dispatches an action to the rxjs action stream.
     */
    dispatch(action: Action): void;
}
