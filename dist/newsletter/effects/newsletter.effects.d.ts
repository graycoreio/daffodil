import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { DaffNewsletterSubmission } from '../models/newsletter.model';
import { DaffNewsletterServiceInterface } from '../driver/public_api';
export declare class DaffNewsletterEffects<T extends DaffNewsletterSubmission, V> {
    private actions$;
    private driver;
    constructor(actions$: Actions, driver: DaffNewsletterServiceInterface<T, V>);
    trySubmission$: Observable<Action>;
}
