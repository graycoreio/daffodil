import { Action } from '@ngrx/store';
import { DaffNewsletterSubmission } from '../models/newsletter.model';
export declare enum DaffNewsletterActionTypes {
    NewsletterSubscribeAction = "[Daff-Newsletter] Newsletter Subscribe Action",
    NewsletterCancelAction = "[Daff-Newsletter] Newsletter Cancel Action",
    NewsletterSuccessSubscribeAction = "[Daff-Newsletter] Succeeded on Newsletter Subscribe Action",
    NewsletterFailedSubscribeAction = "[Daff-Newsletter] Failed on Newsletter Subscribe Action",
    NewsletterRetry = "[Daff-Newsletter] Retrying submission",
    NewsletterReset = "[Daff-Newsletter] Reset Newsletter"
}
export declare class DaffNewsletterSubscribe<T extends DaffNewsletterSubmission> implements Action {
    payload: T;
    readonly type = DaffNewsletterActionTypes.NewsletterSubscribeAction;
    constructor(payload: T);
}
export declare class DaffNewsletterRetry<T extends DaffNewsletterSubmission> implements Action {
    payload: T;
    readonly type = DaffNewsletterActionTypes.NewsletterRetry;
    constructor(payload: T);
}
export declare class DaffNewsletterCancel implements Action {
    readonly type = DaffNewsletterActionTypes.NewsletterCancelAction;
}
export declare class DaffNewsletterFailedSubscribe implements Action {
    payload: string;
    readonly type = DaffNewsletterActionTypes.NewsletterFailedSubscribeAction;
    constructor(payload: string);
}
export declare class DaffNewsletterSuccessSubscribe implements Action {
    readonly type = DaffNewsletterActionTypes.NewsletterSuccessSubscribeAction;
}
export declare class DaffNewsletterReset implements Action {
    readonly type = DaffNewsletterActionTypes.NewsletterReset;
}
export declare type DaffNewsletterActions<T extends DaffNewsletterSubmission> = DaffNewsletterSubscribe<T> | DaffNewsletterSuccessSubscribe | DaffNewsletterFailedSubscribe | DaffNewsletterReset | DaffNewsletterRetry<T> | DaffNewsletterCancel;
