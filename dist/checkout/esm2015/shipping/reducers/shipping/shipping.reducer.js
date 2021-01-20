/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffShippingActionTypes } from '../../actions/shipping.actions';
/** @type {?} */
export const initialState = {
    shippingAddress: null,
    selectedShippingOptionId: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffShippingReducer(state = initialState, action) {
    switch (action.type) {
        case DaffShippingActionTypes.UpdateShippingAddressAction:
            return Object.assign({}, state, { shippingAddress: action.payload });
        case DaffShippingActionTypes.SelectShippingOptionAction:
            return Object.assign({}, state, { selectedShippingOptionId: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbInNoaXBwaW5nL3JlZHVjZXJzL3NoaXBwaW5nL3NoaXBwaW5nLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBdUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFHOUYsTUFBTSxPQUFPLFlBQVksR0FBNkI7SUFDcEQsZUFBZSxFQUFFLElBQUk7SUFDckIsd0JBQXdCLEVBQUUsSUFBSTtDQUMvQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsTUFBMkI7SUFDbkYsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssdUJBQXVCLENBQUMsMkJBQTJCO1lBQ3RELHlCQUFXLEtBQUssSUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRTtRQUNyRCxLQUFLLHVCQUF1QixDQUFDLDBCQUEwQjtZQUNyRCx5QkFBVyxLQUFLLElBQUUsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRTtRQUM5RDtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhZmZTaGlwcGluZ0FjdGlvblR5cGVzLCBEYWZmU2hpcHBpbmdBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9zaGlwcGluZy5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZTaGlwcGluZ1JlZHVjZXJTdGF0ZSB9IGZyb20gJy4vc2hpcHBpbmctcmVkdWNlci5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBEYWZmU2hpcHBpbmdSZWR1Y2VyU3RhdGUgPSB7XG4gIHNoaXBwaW5nQWRkcmVzczogbnVsbCxcbiAgc2VsZWN0ZWRTaGlwcGluZ09wdGlvbklkOiBudWxsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGFmZlNoaXBwaW5nUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBEYWZmU2hpcHBpbmdBY3Rpb25zKTogRGFmZlNoaXBwaW5nUmVkdWNlclN0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZlNoaXBwaW5nQWN0aW9uVHlwZXMuVXBkYXRlU2hpcHBpbmdBZGRyZXNzQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc2hpcHBpbmdBZGRyZXNzOiBhY3Rpb24ucGF5bG9hZH07XG4gICAgY2FzZSBEYWZmU2hpcHBpbmdBY3Rpb25UeXBlcy5TZWxlY3RTaGlwcGluZ09wdGlvbkFjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNlbGVjdGVkU2hpcHBpbmdPcHRpb25JZDogYWN0aW9uLnBheWxvYWR9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==