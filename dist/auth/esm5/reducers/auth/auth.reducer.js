/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DaffAuthActionTypes } from '../../actions/auth.actions';
import { daffAuthInitialState } from './auth-initial-state';
/**
 * @template T, U, S
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffAuthReducer(state, action) {
    if (state === void 0) { state = daffAuthInitialState; }
    switch (action.type) {
        case DaffAuthActionTypes.AuthCheckAction:
            return tslib_1.__assign({}, state, { loading: true });
        case DaffAuthActionTypes.AuthCheckSuccessAction:
            return tslib_1.__assign({}, state, { loading: false });
        case DaffAuthActionTypes.AuthCheckFailureAction:
            return tslib_1.__assign({}, state, { loading: false, errors: [action.errorMessage] });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJyZWR1Y2Vycy9hdXRoL2F1dGgucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBbUIsTUFBTSw0QkFBNEIsQ0FBQztBQUtsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztBQUU1RCxNQUFNLFVBQVUsZUFBZSxDQUs3QixLQUE0QixFQUM1QixNQUlDO0lBTEQsc0JBQUEsRUFBQSw0QkFBNEI7SUFPNUIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssbUJBQW1CLENBQUMsZUFBZTtZQUN0Qyw0QkFDSyxLQUFLLElBQ1IsT0FBTyxFQUFFLElBQUksSUFDYjtRQUVKLEtBQUssbUJBQW1CLENBQUMsc0JBQXNCO1lBQzdDLDRCQUNLLEtBQUssSUFDUixPQUFPLEVBQUUsS0FBSyxJQUNkO1FBRUosS0FBSyxtQkFBbUIsQ0FBQyxzQkFBc0I7WUFDN0MsNEJBQ0ssS0FBSyxJQUNSLE9BQU8sRUFBRSxLQUFLLEVBQ2QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUM3QjtRQUVKO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGFmZkF1dGhBY3Rpb25UeXBlcywgRGFmZkF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoLmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZkF1dGhSZWR1Y2VyU3RhdGUgfSBmcm9tICcuL2F1dGgtcmVkdWNlci1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoLXRva2VuJztcbmltcG9ydCB7IERhZmZMb2dpbkluZm8gfSBmcm9tICcuLi8uLi9tb2RlbHMvbG9naW4taW5mbyc7XG5pbXBvcnQgeyBEYWZmQWNjb3VudFJlZ2lzdHJhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9hY2NvdW50LXJlZ2lzdHJhdGlvbic7XG5pbXBvcnQgeyBkYWZmQXV0aEluaXRpYWxTdGF0ZSB9IGZyb20gJy4vYXV0aC1pbml0aWFsLXN0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRhZmZBdXRoUmVkdWNlcjxcbiAgVCBleHRlbmRzIERhZmZMb2dpbkluZm8sXG4gIFUgZXh0ZW5kcyBEYWZmQXV0aFRva2VuLFxuICBTIGV4dGVuZHMgRGFmZkFjY291bnRSZWdpc3RyYXRpb24sXG4+KFxuICBzdGF0ZSA9IGRhZmZBdXRoSW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IERhZmZBdXRoQWN0aW9uczxcbiAgICBULFxuICAgIFUsXG4gICAgU1xuICA+XG4pOiBEYWZmQXV0aFJlZHVjZXJTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aENoZWNrQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZBdXRoQWN0aW9uVHlwZXMuQXV0aENoZWNrU3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfTtcblxuICAgIGNhc2UgRGFmZkF1dGhBY3Rpb25UeXBlcy5BdXRoQ2hlY2tGYWlsdXJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IFthY3Rpb24uZXJyb3JNZXNzYWdlXVxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiJdfQ==