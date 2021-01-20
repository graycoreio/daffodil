import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaffContactFeatureState } from '../selectors/contact.selector';
import { DaffContactFacadeInterface } from './contact-facade.interface';
export declare class DaffContactFacade implements DaffContactFacadeInterface {
    private store;
    success$: Observable<boolean>;
    error$: Observable<string[]>;
    loading$: Observable<boolean>;
    constructor(store: Store<DaffContactFeatureState>);
    dispatch(action: Action): void;
}
