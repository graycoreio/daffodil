/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffShippingActionTypes } from '../../actions/shipping.actions';
/** @type {?} */
export var initialState = {
    shippingAddress: null,
    selectedShippingOptionId: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffShippingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffShippingActionTypes.UpdateShippingAddressAction:
            return tslib_1.__assign({}, state, { shippingAddress: action.payload });
        case DaffShippingActionTypes.SelectShippingOptionAction:
            return tslib_1.__assign({}, state, { selectedShippingOptionId: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbInNoaXBwaW5nL3JlZHVjZXJzL3NoaXBwaW5nL3NoaXBwaW5nLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXVCLE1BQU0sZ0NBQWdDLENBQUM7O0FBRzlGLE1BQU0sS0FBTyxZQUFZLEdBQTZCO0lBQ3BELGVBQWUsRUFBRSxJQUFJO0lBQ3JCLHdCQUF3QixFQUFFLElBQUk7Q0FDL0I7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFvQixFQUFFLE1BQTJCO0lBQWpELHNCQUFBLEVBQUEsb0JBQW9CO0lBQ3RELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHVCQUF1QixDQUFDLDJCQUEyQjtZQUN0RCw0QkFBVyxLQUFLLElBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUU7UUFDckQsS0FBSyx1QkFBdUIsQ0FBQywwQkFBMEI7WUFDckQsNEJBQVcsS0FBSyxJQUFFLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUU7UUFDOUQ7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmU2hpcHBpbmdBY3Rpb25UeXBlcywgRGFmZlNoaXBwaW5nQWN0aW9ucyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvc2hpcHBpbmcuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmU2hpcHBpbmdSZWR1Y2VyU3RhdGUgfSBmcm9tICcuL3NoaXBwaW5nLXJlZHVjZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogRGFmZlNoaXBwaW5nUmVkdWNlclN0YXRlID0ge1xuICBzaGlwcGluZ0FkZHJlc3M6IG51bGwsXG4gIHNlbGVjdGVkU2hpcHBpbmdPcHRpb25JZDogbnVsbFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRhZmZTaGlwcGluZ1JlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGFmZlNoaXBwaW5nQWN0aW9ucyk6IERhZmZTaGlwcGluZ1JlZHVjZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZTaGlwcGluZ0FjdGlvblR5cGVzLlVwZGF0ZVNoaXBwaW5nQWRkcmVzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNoaXBwaW5nQWRkcmVzczogYWN0aW9uLnBheWxvYWR9O1xuICAgIGNhc2UgRGFmZlNoaXBwaW5nQWN0aW9uVHlwZXMuU2VsZWN0U2hpcHBpbmdPcHRpb25BY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLCBzZWxlY3RlZFNoaXBwaW5nT3B0aW9uSWQ6IGFjdGlvbi5wYXlsb2FkfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=