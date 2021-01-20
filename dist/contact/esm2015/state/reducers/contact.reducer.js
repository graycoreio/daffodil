/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DaffContactActionTypes } from '../actions/contact.actions';
/**
 * @record
 */
export function DaffContactState() { }
if (false) {
    /** @type {?} */
    DaffContactState.prototype.success;
    /** @type {?} */
    DaffContactState.prototype.loading;
    /** @type {?} */
    DaffContactState.prototype.errors;
}
/** @type {?} */
const initialState = {
    success: false,
    loading: false,
    errors: null
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case DaffContactActionTypes.ContactRetryAction:
        case DaffContactActionTypes.ContactSubmitAction:
            return Object.assign({}, state, { loading: true });
        case DaffContactActionTypes.ContactFailedSubmitAction:
            return Object.assign({}, state, { loading: false, errors: action.payload });
        case DaffContactActionTypes.ContactSuccessSubmitAction:
            return Object.assign({}, state, { success: true, loading: false });
        case DaffContactActionTypes.ContactCancelAction:
            return Object.assign({}, state, { loading: false });
        case DaffContactActionTypes.ContactResetAction:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3Qvc3RhdGUvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jb250YWN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBc0Isc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUV2RixzQ0FJQzs7O0lBSEMsbUNBQWlCOztJQUNqQixtQ0FBaUI7O0lBQ2pCLGtDQUF3Qjs7O01BR3BCLFlBQVksR0FBcUI7SUFDckMsT0FBTyxFQUFFLEtBQUs7SUFDZCxPQUFPLEVBQUUsS0FBSztJQUNkLE1BQU0sRUFBRSxJQUFJO0NBQ2I7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFJLFFBQTBCLFlBQVksRUFDL0QsTUFBNkI7SUFDM0IsUUFBTyxNQUFNLENBQUMsSUFBSSxFQUFDO1FBQ2pCLEtBQUssc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7UUFDL0MsS0FBSyxzQkFBc0IsQ0FBQyxtQkFBbUI7WUFDN0MseUJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUU7UUFDbkMsS0FBSyxzQkFBc0IsQ0FBQyx5QkFBeUI7WUFDbkQseUJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQUU7UUFDNUQsS0FBSyxzQkFBc0IsQ0FBQywwQkFBMEI7WUFDcEQseUJBQVcsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBQztRQUNsRCxLQUFLLHNCQUFzQixDQUFDLG1CQUFtQjtZQUM3Qyx5QkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLEtBQUssSUFBRTtRQUNwQyxLQUFLLHNCQUFzQixDQUFDLGtCQUFrQjtZQUM1Qyx5QkFBVyxLQUFLLEVBQU0sWUFBWSxFQUFFO1FBQ3RDO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkNvbnRhY3RBY3Rpb25zLCBEYWZmQ29udGFjdEFjdGlvblR5cGVzfSBmcm9tICcuLi9hY3Rpb25zL2NvbnRhY3QuYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbnRhY3RTdGF0ZSB7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yczogc3RyaW5nW10gfCBudWxsO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IERhZmZDb250YWN0U3RhdGUgPSB7XG4gIHN1Y2Nlc3M6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3JzOiBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyPFQ+KHN0YXRlOiBEYWZmQ29udGFjdFN0YXRlID0gaW5pdGlhbFN0YXRlLCBcbiAgYWN0aW9uOiBEYWZmQ29udGFjdEFjdGlvbnM8VD4pe1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICBjYXNlIERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdFJldHJ5QWN0aW9uOlxuICAgICAgY2FzZSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RTdWJtaXRBY3Rpb246XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IHRydWV9O1xuICAgICAgY2FzZSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RGYWlsZWRTdWJtaXRBY3Rpb246XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcnM6IGFjdGlvbi5wYXlsb2FkfTtcbiAgICAgIGNhc2UgRGFmZkNvbnRhY3RBY3Rpb25UeXBlcy5Db250YWN0U3VjY2Vzc1N1Ym1pdEFjdGlvbjpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgc3VjY2VzczogdHJ1ZSwgbG9hZGluZzogZmFsc2V9XG4gICAgICBjYXNlIERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdENhbmNlbEFjdGlvbjpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2V9O1xuICAgICAgY2FzZSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RSZXNldEFjdGlvbjpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uIGluaXRpYWxTdGF0ZX07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9Il19