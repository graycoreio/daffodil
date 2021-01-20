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
import { DaffGeographyActionTypes } from '../../actions/public_api';
import { getCountryAdapter } from './country-entities-adapter';
import { daffCountryEntitiesInitialState } from './country-entities-initial-state';
/**
 * Reducer function that catches actions and changes/overwrites country entities state.
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function daffCountryEntitiesReducer(state, action) {
    if (state === void 0) { state = daffCountryEntitiesInitialState; }
    /** @type {?} */
    var adapter = getCountryAdapter();
    switch (action.type) {
        case DaffGeographyActionTypes.CountryLoadSuccessAction:
            return adapter.upsertOne(__assign({}, action.payload, { loaded: true }), state);
        case DaffGeographyActionTypes.CountryListSuccessAction:
            return adapter.upsertMany(action.payload.map((/**
             * @param {?} country
             * @return {?}
             */
            function (country) { return (__assign({}, country, { loaded: (state.entities[country.id] && state.entities[country.id].loaded) || false, subdivisions: country.subdivisions.length === 0 && state.entities[country.id] && state.entities[country.id].subdivisions.length > 0
                    ? state.entities[country.id].subdivisions
                    : country.subdivisions })); })), state);
        default:
            return state;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1lbnRpdGllcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9zdGF0ZS8iLCJzb3VyY2VzIjpbInJlZHVjZXJzL2NvdW50cnktZW50aXRpZXMvY291bnRyeS1lbnRpdGllcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU8sRUFBd0Isd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7QUFLbkYsTUFBTSxVQUFVLDBCQUEwQixDQUN4QyxLQUF1QyxFQUN2QyxNQUErQjtJQUQvQixzQkFBQSxFQUFBLHVDQUF1Qzs7UUFHakMsT0FBTyxHQUFHLGlCQUFpQixFQUFLO0lBRXRDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLHdCQUF3QixDQUFDLHdCQUF3QjtZQUNwRCxPQUFPLE9BQU8sQ0FBQyxTQUFTLGNBQ25CLE1BQU0sQ0FBQyxPQUFPLElBQ2pCLE1BQU0sRUFBRSxJQUFJLEtBQ1gsS0FBSyxDQUFDLENBQUM7UUFFWixLQUFLLHdCQUF3QixDQUFDLHdCQUF3QjtZQUNwRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsY0FDekIsT0FBTyxJQUVWLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFFbEYsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUM7b0JBQ2pJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZO29CQUN6QyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksSUFDeEIsRUFSNEIsQ0FRNUIsRUFBQyxFQUNILEtBQUssQ0FDTixDQUFDO1FBRUo7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5QWN0aW9ucywgRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IGdldENvdW50cnlBZGFwdGVyIH0gZnJvbSAnLi9jb3VudHJ5LWVudGl0aWVzLWFkYXB0ZXInO1xuaW1wb3J0IHsgRGFmZkNvdW50cnlFbnRpdHlTdGF0ZSB9IGZyb20gJy4vY291bnRyeS1lbnRpdGllcy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZGFmZkNvdW50cnlFbnRpdGllc0luaXRpYWxTdGF0ZSB9IGZyb20gJy4vY291bnRyeS1lbnRpdGllcy1pbml0aWFsLXN0YXRlJztcblxuLyoqXG4gKiBSZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgY2F0Y2hlcyBhY3Rpb25zIGFuZCBjaGFuZ2VzL292ZXJ3cml0ZXMgY291bnRyeSBlbnRpdGllcyBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZDb3VudHJ5RW50aXRpZXNSZWR1Y2VyPFQgZXh0ZW5kcyBEYWZmQ291bnRyeSA9IERhZmZDb3VudHJ5PihcbiAgc3RhdGUgPSBkYWZmQ291bnRyeUVudGl0aWVzSW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IERhZmZHZW9ncmFwaHlBY3Rpb25zPFQ+XG4pOiBEYWZmQ291bnRyeUVudGl0eVN0YXRlPFQ+IHtcbiAgY29uc3QgYWRhcHRlciA9IGdldENvdW50cnlBZGFwdGVyPFQ+KCk7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMb2FkU3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiBhZGFwdGVyLnVwc2VydE9uZSh7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICBsb2FkZWQ6IHRydWVcbiAgICAgIH0sIHN0YXRlKTtcblxuICAgIGNhc2UgRGFmZkdlb2dyYXBoeUFjdGlvblR5cGVzLkNvdW50cnlMaXN0U3VjY2Vzc0FjdGlvbjpcbiAgICAgIHJldHVybiBhZGFwdGVyLnVwc2VydE1hbnkoXG4gICAgICAgIGFjdGlvbi5wYXlsb2FkLm1hcChjb3VudHJ5ID0+ICh7XG4gICAgICAgICAgLi4uY291bnRyeSxcbiAgICAgICAgICAvLyBkZWZlciB0byB0aGUgbG9hZGVkIHN0YXRlIG9mIHRoZSBjb3VudHJ5IGFscmVhZHkgaW4gc3RhdGUgKGlmIGl0IGV4aXN0cykgYnV0IGluaXQgZmllbGQgdG8gZmFsc2UgaWYgaXQgZG9lcyBub3RcbiAgICAgICAgICBsb2FkZWQ6IChzdGF0ZS5lbnRpdGllc1tjb3VudHJ5LmlkXSAmJiBzdGF0ZS5lbnRpdGllc1tjb3VudHJ5LmlkXS5sb2FkZWQpIHx8IGZhbHNlLFxuICAgICAgICAgIC8vIGlmIHRoZSBjb3VudHJ5IGNvbWluZyBpbiBoYXMgbm8gc3ViZGl2aXNpb25zIGFuZCB0aGUgc2FtZSBjb3VudHJ5IGluIHN0YXRlIGRvZXMsIHVzZSB0aGUgc3ViZGl2aXNpb25zIGluIHN0YXRlXG4gICAgICAgICAgc3ViZGl2aXNpb25zOiBjb3VudHJ5LnN1YmRpdmlzaW9ucy5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW50aXRpZXNbY291bnRyeS5pZF0gJiYgc3RhdGUuZW50aXRpZXNbY291bnRyeS5pZF0uc3ViZGl2aXNpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gc3RhdGUuZW50aXRpZXNbY291bnRyeS5pZF0uc3ViZGl2aXNpb25zXG4gICAgICAgICAgICA6IGNvdW50cnkuc3ViZGl2aXNpb25zXG4gICAgICAgIH0pKSxcbiAgICAgICAgc3RhdGVcbiAgICAgICk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=