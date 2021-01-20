import { Action } from '@ngrx/store';
import { DaffGenericNavigationTree } from '@daffodil/navigation';
export declare enum DaffNavigationActionTypes {
    NavigationLoadAction = "[Daff-Navigation] Navigation Load Action",
    NavigationLoadSuccessAction = "[Daff-Navigation] Navigation Load Success Action",
    NavigationLoadFailureAction = "[Daff-Navigation] Navigation Load Failure Action"
}
export declare class DaffNavigationLoad implements Action {
    payload: string;
    readonly type = DaffNavigationActionTypes.NavigationLoadAction;
    constructor(payload: string);
}
export declare class DaffNavigationLoadSuccess<T extends DaffGenericNavigationTree<T>> implements Action {
    payload: T;
    readonly type = DaffNavigationActionTypes.NavigationLoadSuccessAction;
    constructor(payload: T);
}
export declare class DaffNavigationLoadFailure implements Action {
    payload: string;
    readonly type = DaffNavigationActionTypes.NavigationLoadFailureAction;
    constructor(payload: string);
}
export declare type DaffNavigationActions<T extends DaffGenericNavigationTree<T>> = DaffNavigationLoad | DaffNavigationLoadSuccess<T> | DaffNavigationLoadFailure;
