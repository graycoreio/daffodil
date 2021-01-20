import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationReducersState } from '../reducers/navigation-reducers.interface';
import { DaffNavigationFacadeInterface } from './navigation-facade.interface';
export declare class DaffNavigationFacade<T extends DaffGenericNavigationTree<T>> implements DaffNavigationFacadeInterface<T> {
    private store;
    /**
     * The navigation retrieved in a single navigation call.
     */
    tree$: Observable<T>;
    /**
     * The loading state for retrieving a single navigation.
     */
    loading$: Observable<boolean>;
    /**
     * Errors associated with retrieving a single navigation.
     */
    errors$: Observable<string[]>;
    constructor(store: Store<DaffNavigationReducersState<T>>);
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    dispatch(action: Action): void;
}
