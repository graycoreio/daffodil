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
export function daffGeographyReducer(state = daffGeographyInitialState, action) {
    switch (action.type) {
        case DaffGeographyActionTypes.CountryLoadAction:
        case DaffGeographyActionTypes.CountryListAction:
            return Object.assign({}, state, { loading: true });
        case DaffGeographyActionTypes.CountryLoadSuccessAction:
        case DaffGeographyActionTypes.CountryListSuccessAction:
            return Object.assign({}, state, { errors: [], loading: false });
        case DaffGeographyActionTypes.CountryLoadFailureAction:
        case DaffGeographyActionTypes.CountryListFailureAction:
            return Object.assign({}, state, { errors: [
                    ...state.errors,
                    action.payload
                ], loading: false });
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlLyIsInNvdXJjZXMiOlsicmVkdWNlcnMvZ2VvZ3JhcGh5L2dlb2dyYXBoeS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RSxPQUFPLEVBQXdCLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFHMUYsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxLQUFLLEdBQUcseUJBQXlCLEVBQ2pDLE1BQStCO0lBRS9CLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDO1FBQ2hELEtBQUssd0JBQXdCLENBQUMsaUJBQWlCO1lBQzdDLHlCQUFZLEtBQUssSUFBRSxPQUFPLEVBQUUsSUFBSSxJQUFHO1FBRXJDLEtBQUssd0JBQXdCLENBQUMsd0JBQXdCLENBQUM7UUFDdkQsS0FBSyx3QkFBd0IsQ0FBQyx3QkFBd0I7WUFDcEQseUJBQ0ssS0FBSyxJQUNSLE1BQU0sRUFBRSxFQUFFLEVBQ1YsT0FBTyxFQUFFLEtBQUssSUFDZDtRQUVKLEtBQUssd0JBQXdCLENBQUMsd0JBQXdCLENBQUM7UUFDdkQsS0FBSyx3QkFBd0IsQ0FBQyx3QkFBd0I7WUFDcEQseUJBQ0ssS0FBSyxJQUNSLE1BQU0sRUFBRTtvQkFDTixHQUFHLEtBQUssQ0FBQyxNQUFNO29CQUNmLE1BQU0sQ0FBQyxPQUFPO2lCQUNmLEVBQ0QsT0FBTyxFQUFFLEtBQUssSUFDZDtRQUVKO1lBQ0UsT0FBTyxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGFmZkdlb2dyYXBoeUluaXRpYWxTdGF0ZSB9IGZyb20gJy4vZ2VvZ3JhcGh5LWluaXRpYWwtc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkdlb2dyYXBoeVJlZHVjZXJTdGF0ZSB9IGZyb20gJy4vZ2VvZ3JhcGh5LXN0YXRlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5QWN0aW9ucywgRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZDb3VudHJ5IH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkYWZmR2VvZ3JhcGh5UmVkdWNlcjxUIGV4dGVuZHMgRGFmZkNvdW50cnk+KFxuICBzdGF0ZSA9IGRhZmZHZW9ncmFwaHlJbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogRGFmZkdlb2dyYXBoeUFjdGlvbnM8VD5cbik6IERhZmZHZW9ncmFwaHlSZWR1Y2VyU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxvYWRBY3Rpb246XG4gICAgY2FzZSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxpc3RBY3Rpb246XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9O1xuXG4gICAgY2FzZSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxvYWRTdWNjZXNzQWN0aW9uOlxuICAgIGNhc2UgRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMaXN0U3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICBjYXNlIERhZmZHZW9ncmFwaHlBY3Rpb25UeXBlcy5Db3VudHJ5TG9hZEZhaWx1cmVBY3Rpb246XG4gICAgY2FzZSBEYWZmR2VvZ3JhcGh5QWN0aW9uVHlwZXMuQ291bnRyeUxpc3RGYWlsdXJlQWN0aW9uOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yczogW1xuICAgICAgICAgIC4uLnN0YXRlLmVycm9ycyxcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICAgICBdLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=