/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffNavigationActionTypes } from '../../actions/navigation.actions';
/** @type {?} */
export var initialState = {
    navigationTree: null,
    loading: false,
    errors: []
};
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffNavigationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffNavigationActionTypes.NavigationLoadAction:
            return tslib_1.__assign({}, state, { loading: true });
        case DaffNavigationActionTypes.NavigationLoadSuccessAction:
            return tslib_1.__assign({}, state, { loading: false, navigationTree: action.payload });
        case DaffNavigationActionTypes.NavigationLoadFailureAction:
            return tslib_1.__assign({}, state, { loading: false, errors: [action.payload] });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vc3RhdGUvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBeUIsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFHcEcsTUFBTSxLQUFPLFlBQVksR0FBb0M7SUFDNUQsY0FBYyxFQUFFLElBQUk7SUFDcEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxNQUFNLEVBQUUsRUFBRTtDQUNWOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxLQUFtRCxFQUFFLE1BQWdDO0lBQXJGLHNCQUFBLEVBQUEsb0JBQW1EO0lBQ25ELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHlCQUF5QixDQUFDLG9CQUFvQjtZQUNqRCw0QkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLElBQUksSUFBRTtRQUNuQyxLQUFLLHlCQUF5QixDQUFDLDJCQUEyQjtZQUN4RCw0QkFBVyxLQUFLLElBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFBRTtRQUNwRSxLQUFLLHlCQUF5QixDQUFDLDJCQUEyQjtZQUN4RCw0QkFBVyxLQUFLLElBQ2QsT0FBTyxFQUFFLEtBQUssRUFDZCxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQ3hCO1FBQ0o7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmR2VuZXJpY05hdmlnYXRpb25UcmVlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24nO1xuXG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvbkFjdGlvblR5cGVzLCBEYWZmTmF2aWdhdGlvbkFjdGlvbnMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL25hdmlnYXRpb24uYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1yZWR1Y2VyLXN0YXRlLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IERhZmZOYXZpZ2F0aW9uUmVkdWNlclN0YXRlPGFueT4gPSB7XG5cdG5hdmlnYXRpb25UcmVlOiBudWxsLFxuXHRsb2FkaW5nOiBmYWxzZSxcblx0ZXJyb3JzOiBbXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRhZmZOYXZpZ2F0aW9uUmVkdWNlciA8VCBleHRlbmRzIERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWU8VD4+XG5cdChzdGF0ZTogRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGU8VD4gPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogRGFmZk5hdmlnYXRpb25BY3Rpb25zPFQ+KTogRGFmZk5hdmlnYXRpb25SZWR1Y2VyU3RhdGU8VD4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmTmF2aWdhdGlvbkFjdGlvblR5cGVzLk5hdmlnYXRpb25Mb2FkQWN0aW9uOlxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZX07XG4gICAgY2FzZSBEYWZmTmF2aWdhdGlvbkFjdGlvblR5cGVzLk5hdmlnYXRpb25Mb2FkU3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBuYXZpZ2F0aW9uVHJlZTogYWN0aW9uLnBheWxvYWR9O1xuICAgIGNhc2UgRGFmZk5hdmlnYXRpb25BY3Rpb25UeXBlcy5OYXZpZ2F0aW9uTG9hZEZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4gey4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBbYWN0aW9uLnBheWxvYWRdXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==