import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffStateError } from '@daffodil/core/state';
import { DaffAuthorizeNetReducersState } from '../reducers/authorize-net-reducers.interface';
import { DaffAuthorizeNetFacadeInterface } from './authorize-net-facade.interface';
export declare class DaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {
    private store;
    isAcceptJsLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    paymentError$: Observable<DaffStateError>;
    acceptJsLoadError$: Observable<DaffStateError>;
    constructor(store: Store<DaffAuthorizeNetReducersState>);
    dispatch(action: Action): void;
}
