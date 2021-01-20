import { DaffNewsletterSubmission } from './../models/newsletter.model';
import { DaffNewsletterActions } from './../actions/newsletter.actions';
export interface DaffNewsletterState {
    success: boolean;
    loading: boolean;
    error: string | null;
}
export declare function reducer<T extends DaffNewsletterSubmission>(state: DaffNewsletterState, action: DaffNewsletterActions<T>): DaffNewsletterState;
