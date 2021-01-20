import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { DaffAuthorizeNetFacadeInterface } from '@daffodil/authorizenet/state';
import { DaffStateError } from '@daffodil/core/state';
export declare class MockDaffAuthorizeNetFacade implements DaffAuthorizeNetFacadeInterface {
    isAcceptJsLoaded$: BehaviorSubject<boolean>;
    loading$: BehaviorSubject<boolean>;
    paymentError$: BehaviorSubject<DaffStateError>;
    acceptJsLoadError$: BehaviorSubject<DaffStateError>;
    dispatch(action: Action): void;
}
