import { BehaviorSubject } from 'rxjs';
import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationFacadeInterface } from '@daffodil/navigation/state';
/**
 * A mock of the DaffNavigationFacade used to remove any interaction with the ngrx store.
 * This mock should be imported into tests using the DaffNavigationTestingModule.
 */
export declare class MockDaffNavigationFacade<T extends DaffGenericNavigationTree<T>> implements DaffNavigationFacadeInterface<T> {
    loading$: BehaviorSubject<boolean>;
    tree$: BehaviorSubject<T>;
    errors$: BehaviorSubject<string[]>;
    dispatch(action: any): void;
}
