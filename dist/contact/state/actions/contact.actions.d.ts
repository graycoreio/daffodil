import { Action } from '@ngrx/store';
export declare enum DaffContactActionTypes {
    ContactSubmitAction = "[Daff-Contact] Contact Submit Action",
    ContactCancelAction = "[Daff-Contact] Contact Cancel Action",
    ContactSuccessSubmitAction = "[Daff-Contact] Contact Success Submit Action",
    ContactFailedSubmitAction = "[Daff-Contact] Contact Failed Submit Action",
    ContactRetryAction = "[Daff-Contact] Contact Retry Action",
    ContactResetAction = "[Daff-Contact] Contact Reset Action"
}
export declare class DaffContactSubmit<T> implements Action {
    payload: T;
    readonly type = DaffContactActionTypes.ContactSubmitAction;
    constructor(payload: T);
}
export declare class DaffContactRetry<T> implements Action {
    payload: T;
    readonly type = DaffContactActionTypes.ContactRetryAction;
    constructor(payload: T);
}
export declare class DaffContactFailedSubmit implements Action {
    payload: string[];
    readonly type = DaffContactActionTypes.ContactFailedSubmitAction;
    constructor(payload: string[]);
}
export declare class DaffContactCancel implements Action {
    readonly type = DaffContactActionTypes.ContactCancelAction;
}
export declare class DaffContactSuccessSubmit implements Action {
    readonly type = DaffContactActionTypes.ContactSuccessSubmitAction;
}
export declare class DaffContactReset implements Action {
    readonly type = DaffContactActionTypes.ContactResetAction;
}
export declare type DaffContactActions<T> = DaffContactSubmit<T> | DaffContactRetry<T> | DaffContactFailedSubmit | DaffContactCancel | DaffContactSuccessSubmit | DaffContactReset;
