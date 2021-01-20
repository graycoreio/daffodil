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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { daffGeographyInitialState } from './geography-initial-state';
import { DaffGeographyActionTypes } from '../../actions/public_api';
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffGeographyReducer(state, action) {
    if (state === void 0) { state = daffGeographyInitialState; }
    switch (action.type) {
        case DaffGeographyActionTypes.CountryLoadAction:
        case DaffGeographyActionTypes.CountryListAction:
            return __assign({}, state, { loading: true });
        case DaffGeographyActionTypes.CountryLoadSuccessAction:
        case DaffGeographyActionTypes.CountryListSuccessAction:
            return __assign({}, state, { errors: [], loading: false });
        case DaffGeographyActionTypes.CountryLoadFailureAction:
        case DaffGeographyActionTypes.CountryListFailureAction:
            return __assign({}, state, { errors: __spread(state.errors, [
                    action.payload
                ]), loading: false });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlLyIsInNvdXJjZXMiOlsicmVkdWNlcnMvZ2VvZ3JhcGh5L2dlb2dyYXBoeS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEUsT0FBTyxFQUF3Qix3QkFBd0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBRzFGLE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsS0FBaUMsRUFDakMsTUFBK0I7SUFEL0Isc0JBQUEsRUFBQSxpQ0FBaUM7SUFHakMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssd0JBQXdCLENBQUMsaUJBQWlCLENBQUM7UUFDaEQsS0FBSyx3QkFBd0IsQ0FBQyxpQkFBaUI7WUFDN0Msb0JBQVksS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLElBQUc7UUFFckMsS0FBSyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQztRQUN2RCxLQUFLLHdCQUF3QixDQUFDLHdCQUF3QjtZQUNwRCxvQkFDSyxLQUFLLElBQ1IsTUFBTSxFQUFFLEVBQUUsRUFDVixPQUFPLEVBQUUsS0FBSyxJQUNkO1FBRUosS0FBSyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQztRQUN2RCxLQUFLLHdCQUF3QixDQUFDLHdCQUF3QjtZQUNwRCxvQkFDSyxLQUFLLElBQ1IsTUFBTSxXQUNELEtBQUssQ0FBQyxNQUFNO29CQUNmLE1BQU0sQ0FBQyxPQUFPO29CQUVoQixPQUFPLEVBQUUsS0FBSyxJQUNkO1FBRUo7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYWZmR2VvZ3JhcGh5SW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9nZW9ncmFwaHktaW5pdGlhbC1zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5UmVkdWNlclN0YXRlIH0gZnJvbSAnLi9nZW9ncmFwaHktc3RhdGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZHZW9ncmFwaHlBY3Rpb25zLCBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNvdW50cnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRhZmZHZW9ncmFwaHlSZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmQ291bnRyeT4oXG4gIHN0YXRlID0gZGFmZkdlb2dyYXBoeUluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBEYWZmR2VvZ3JhcGh5QWN0aW9uczxUPlxuKTogRGFmZkdlb2dyYXBoeVJlZHVjZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TG9hZEFjdGlvbjpcbiAgICBjYXNlIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TGlzdEFjdGlvbjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XG5cbiAgICBjYXNlIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TG9hZFN1Y2Nlc3NBY3Rpb246XG4gICAgY2FzZSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxpc3RTdWNjZXNzQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgIGNhc2UgRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMb2FkRmFpbHVyZUFjdGlvbjpcbiAgICBjYXNlIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TGlzdEZhaWx1cmVBY3Rpb246XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3JzOiBbXG4gICAgICAgICAgLi4uc3RhdGUuZXJyb3JzLFxuICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXG4gICAgICAgIF0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==