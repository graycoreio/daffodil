import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { State } from '../selectors/newsletter.selector';
import { DaffNewsletterFacadeInterface } from './newsletter-facade.interface';
export declare class DaffNewsletterFacade implements DaffNewsletterFacadeInterface {
    private store;
    success$: Observable<boolean>;
    error$: Observable<string>;
    loading$: Observable<boolean>;
    constructor(store: Store<State>);
    dispatch(action: Action): void;
}
