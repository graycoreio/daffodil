var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var initialState = {
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
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffContactActionTypes.ContactRetryAction:
        case DaffContactActionTypes.ContactSubmitAction:
            return __assign({}, state, { loading: true });
        case DaffContactActionTypes.ContactFailedSubmitAction:
            return __assign({}, state, { loading: false, errors: action.payload });
        case DaffContactActionTypes.ContactSuccessSubmitAction:
            return __assign({}, state, { success: true, loading: false });
        case DaffContactActionTypes.ContactCancelAction:
            return __assign({}, state, { loading: false });
        case DaffContactActionTypes.ContactResetAction:
            return __assign({}, state, initialState);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3Qvc3RhdGUvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9jb250YWN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFzQixzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7O0FBRXZGLHNDQUlDOzs7SUFIQyxtQ0FBaUI7O0lBQ2pCLG1DQUFpQjs7SUFDakIsa0NBQXdCOzs7SUFHcEIsWUFBWSxHQUFxQjtJQUNyQyxPQUFPLEVBQUUsS0FBSztJQUNkLE9BQU8sRUFBRSxLQUFLO0lBQ2QsTUFBTSxFQUFFLElBQUk7Q0FDYjs7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQUksS0FBc0MsRUFDL0QsTUFBNkI7SUFESixzQkFBQSxFQUFBLG9CQUFzQztJQUU3RCxRQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUM7UUFDakIsS0FBSyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvQyxLQUFLLHNCQUFzQixDQUFDLG1CQUFtQjtZQUM3QyxvQkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLElBQUksSUFBRTtRQUNuQyxLQUFLLHNCQUFzQixDQUFDLHlCQUF5QjtZQUNuRCxvQkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRTtRQUM1RCxLQUFLLHNCQUFzQixDQUFDLDBCQUEwQjtZQUNwRCxvQkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFDO1FBQ2xELEtBQUssc0JBQXNCLENBQUMsbUJBQW1CO1lBQzdDLG9CQUFXLEtBQUssSUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFFO1FBQ3BDLEtBQUssc0JBQXNCLENBQUMsa0JBQWtCO1lBQzVDLG9CQUFXLEtBQUssRUFBTSxZQUFZLEVBQUU7UUFDdEM7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmQ29udGFjdEFjdGlvbnMsIERhZmZDb250YWN0QWN0aW9uVHlwZXN9IGZyb20gJy4uL2FjdGlvbnMvY29udGFjdC5hY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQ29udGFjdFN0YXRlIHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgZXJyb3JzOiBzdHJpbmdbXSB8IG51bGw7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogRGFmZkNvbnRhY3RTdGF0ZSA9IHtcbiAgc3VjY2VzczogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBlcnJvcnM6IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXI8VD4oc3RhdGU6IERhZmZDb250YWN0U3RhdGUgPSBpbml0aWFsU3RhdGUsIFxuICBhY3Rpb246IERhZmZDb250YWN0QWN0aW9uczxUPil7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgIGNhc2UgRGFmZkNvbnRhY3RBY3Rpb25UeXBlcy5Db250YWN0UmV0cnlBY3Rpb246XG4gICAgICBjYXNlIERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdFN1Ym1pdEFjdGlvbjpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgICBjYXNlIERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdEZhaWxlZFN1Ym1pdEFjdGlvbjpcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yczogYWN0aW9uLnBheWxvYWR9O1xuICAgICAgY2FzZSBEYWZmQ29udGFjdEFjdGlvblR5cGVzLkNvbnRhY3RTdWNjZXNzU3VibWl0QWN0aW9uOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBzdWNjZXNzOiB0cnVlLCBsb2FkaW5nOiBmYWxzZX1cbiAgICAgIGNhc2UgRGFmZkNvbnRhY3RBY3Rpb25UeXBlcy5Db250YWN0Q2FuY2VsQWN0aW9uOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZX07XG4gICAgICBjYXNlIERhZmZDb250YWN0QWN0aW9uVHlwZXMuQ29udGFjdFJlc2V0QWN0aW9uOlxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi4gaW5pdGlhbFN0YXRlfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0iXX0=