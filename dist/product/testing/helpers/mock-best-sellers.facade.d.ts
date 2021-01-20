import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';
export declare class MockDaffBestSellersFacade implements DaffStoreFacade<Action> {
    loading$: BehaviorSubject<boolean>;
    bestSellers$: BehaviorSubject<DaffProduct[]>;
    dispatch(action: Action): void;
}
