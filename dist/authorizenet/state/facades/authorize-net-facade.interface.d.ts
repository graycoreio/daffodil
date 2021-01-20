import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffStateError, DaffStoreFacade } from '@daffodil/core/state';
export interface DaffAuthorizeNetFacadeInterface extends DaffStoreFacade<Action> {
    isAcceptJsLoaded$: Observable<boolean>;
    loading$: Observable<boolean>;
    paymentError$: Observable<DaffStateError>;
    acceptJsLoadError$: Observable<DaffStateError>;
}
