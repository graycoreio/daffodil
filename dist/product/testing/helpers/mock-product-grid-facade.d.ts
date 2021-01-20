import { BehaviorSubject } from 'rxjs';
import { DaffProduct, DaffProductGridFacadeInterface } from '@daffodil/product';
export declare class MockDaffProductGridFacade implements DaffProductGridFacadeInterface {
    loading$: BehaviorSubject<boolean>;
    products$: BehaviorSubject<DaffProduct[]>;
    dispatch(action: any): void;
}
