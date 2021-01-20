import { Action } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
export declare enum DaffShippingActionTypes {
    UpdateShippingAddressAction = "[Shipping] Update Shipping Address Action",
    SelectShippingOptionAction = "[Shipping] Select Shipping Option Action"
}
export declare class DaffUpdateShippingAddress implements Action {
    payload: DaffAddress;
    readonly type = DaffShippingActionTypes.UpdateShippingAddressAction;
    constructor(payload: DaffAddress);
}
export declare class DaffSelectShippingOption implements Action {
    payload: string;
    readonly type = DaffShippingActionTypes.SelectShippingOptionAction;
    constructor(payload: string);
}
export declare type DaffShippingActions = DaffUpdateShippingAddress | DaffSelectShippingOption;
