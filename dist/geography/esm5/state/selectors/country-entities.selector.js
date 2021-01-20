/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getCountryAdapter } from '../reducers/public_api';
import { getDaffGeographyFeatureStateSelector } from './geography-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffCountryEntitySelectors() { }
if (false) {
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryEntitiesState;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryIds;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryEntities;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectAllCountries;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountryTotal;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountry;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectCountrySubdivisions;
    /** @type {?} */
    DaffCountryEntitySelectors.prototype.selectIsCountryFullyLoaded;
}
/** @type {?} */
var createCountryEntitySelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectGeographyFeatureState = getDaffGeographyFeatureStateSelector().selectGeographyFeatureState;
    /** @type {?} */
    var selectCountryEntitiesState = createSelector(selectGeographyFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.countries; }));
    var _a = getCountryAdapter().getSelectors(selectCountryEntitiesState), selectIds = _a.selectIds, selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
    /** @type {?} */
    var selectCountry = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    function (countries, props) { return countries[props.id]; }));
    /** @type {?} */
    var selectCountrySubdivisions = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    function (countries, props) {
        /** @type {?} */
        var country = selectCountry.projector(countries, { id: props.id });
        return country ? country.subdivisions : [];
    }));
    /** @type {?} */
    var selectIsCountryFullyLoaded = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    function (countries, props) {
        /** @type {?} */
        var country = selectCountry.projector(countries, { id: props.id });
        return country && country.loaded;
    }));
    return {
        selectCountryEntitiesState: selectCountryEntitiesState,
        /**
         * Selector for country IDs.
         */
        selectCountryIds: selectIds,
        /**
         * Selector for country entities.
         */
        selectCountryEntities: selectEntities,
        /**
         * Selector for all countries.
         */
        selectAllCountries: selectAll,
        /**
         * Selector for total number of countries.
         */
        selectCountryTotal: selectTotal,
        /**
         * Selector for a specific country.
         */
        selectCountry: selectCountry,
        /**
         * Selector for a specific country's subdivisions.
         */
        selectCountrySubdivisions: selectCountrySubdivisions,
        /**
         * Selector for checking if a country has been fully loaded.
         * If true, then a country's subdivisions will be populated if any exist.
         */
        selectIsCountryFullyLoaded: selectIsCountryFullyLoaded
    };
});
var ɵ0 = createCountryEntitySelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || createCountryEntitySelectors();
    });
};
/** @type {?} */
export var getDaffCountryEntitySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1lbnRpdGllcy5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvc3RhdGUvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY291bnRyeS1lbnRpdGllcy5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBK0MsTUFBTSxhQUFhLENBQUM7QUFPMUYsT0FBTyxFQUNMLGlCQUFpQixFQUVsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUVwRixnREFTQzs7O0lBUkMsZ0VBQWdGOztJQUNoRixzREFBZ0U7O0lBQ2hFLDJEQUErRDs7SUFDL0Qsd0RBQWtEOztJQUNsRCx3REFBcUQ7O0lBQ3JELG1EQUEyRTs7SUFDM0UsK0RBQXVHOztJQUN2RyxnRUFBOEQ7OztJQUcxRCw0QkFBNEI7Ozs7QUFBRztJQUMzQixJQUFBLGdHQUEyQjs7UUFDN0IsMEJBQTBCLEdBQUcsY0FBYyxDQUMvQywyQkFBMkI7Ozs7SUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWUsRUFDekI7SUFDSyxJQUFBLGlFQUF1SCxFQUFySCx3QkFBUyxFQUFFLGtDQUFjLEVBQUUsd0JBQVMsRUFBRSw0QkFBK0U7O1FBRXZILGFBQWEsR0FBRyxjQUFjLENBQ2xDLGNBQWM7Ozs7O0lBQ2QsVUFBQyxTQUF3QixFQUFFLEtBQUssSUFBSyxPQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQW5CLENBQW1CLEVBQ3pEOztRQUVLLHlCQUF5QixHQUFHLGNBQWMsQ0FDOUMsY0FBYzs7Ozs7SUFDZCxVQUFDLFNBQXdCLEVBQUUsS0FBSzs7WUFDeEIsT0FBTyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNwRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0lBQzVDLENBQUMsRUFDRjs7UUFFSywwQkFBMEIsR0FBRyxjQUFjLENBQy9DLGNBQWM7Ozs7O0lBQ2QsVUFBQyxTQUF3QixFQUFFLEtBQW9COztZQUN2QyxPQUFPLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3BFLE9BQU8sT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUE7SUFDbEMsQ0FBQyxFQUNGO0lBRUQsT0FBTztRQUNMLDBCQUEwQiw0QkFBQTs7OztRQUkxQixnQkFBZ0IsRUFBRSxTQUFTOzs7O1FBSTNCLHFCQUFxQixFQUFFLGNBQWM7Ozs7UUFJckMsa0JBQWtCLEVBQUUsU0FBUzs7OztRQUk3QixrQkFBa0IsRUFBRSxXQUFXO1FBQy9COztXQUVHO1FBQ0gsYUFBYSxlQUFBO1FBQ2I7O1dBRUc7UUFDSCx5QkFBeUIsMkJBQUE7UUFDekI7OztXQUdHO1FBQ0gsMEJBQTBCLDRCQUFBO0tBQzNCLENBQUE7QUFDSCxDQUFDLENBQUE7Ozs7O0FBRTZDOztRQUN4QyxLQUFLO0lBQ1Q7Ozs7SUFBTztRQUNMLE9BQUEsS0FBSyxHQUFHLEtBQUssSUFBSSw0QkFBNEIsRUFBSztJQUFsRCxDQUFrRCxFQUFBO0FBQ3RELENBQUM7O0FBSkQsTUFBTSxLQUFPLDZCQUE2QixHQUFHLE1BSTNDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wcyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQge1xuICBEYWZmQ291bnRyeSxcbn0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeSc7XG5cbmltcG9ydCB7XG4gIGdldENvdW50cnlBZGFwdGVyLFxuICBEYWZmQ291bnRyeUVudGl0eVN0YXRlXG59IGZyb20gJy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgZ2V0RGFmZkdlb2dyYXBoeUZlYXR1cmVTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi9nZW9ncmFwaHktZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvdW50cnlFbnRpdHlTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZDb3VudHJ5PiB7XG4gIHNlbGVjdENvdW50cnlFbnRpdGllc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkNvdW50cnlFbnRpdHlTdGF0ZTxUPj47XG4gIHNlbGVjdENvdW50cnlJZHM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXSB8IG51bWJlcltdPjtcbiAgc2VsZWN0Q291bnRyeUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGljdGlvbmFyeTxUPj47XG4gIHNlbGVjdEFsbENvdW50cmllczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIFRbXT47XG4gIHNlbGVjdENvdW50cnlUb3RhbDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIG51bWJlcj47XG4gIHNlbGVjdENvdW50cnk6IE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHM8b2JqZWN0LCB7aWQ6IHN0cmluZyB8IG51bWJlcn0sIFQ+O1xuICBzZWxlY3RDb3VudHJ5U3ViZGl2aXNpb25zOiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwge2lkOiBzdHJpbmcgfCBudW1iZXJ9LCBUWydzdWJkaXZpc2lvbnMnXT47XG4gIHNlbGVjdElzQ291bnRyeUZ1bGx5TG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG59XG5cbmNvbnN0IGNyZWF0ZUNvdW50cnlFbnRpdHlTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZDb3VudHJ5ID0gRGFmZkNvdW50cnk+KCkgPT4ge1xuICBjb25zdCB7IHNlbGVjdEdlb2dyYXBoeUZlYXR1cmVTdGF0ZSB9ID0gZ2V0RGFmZkdlb2dyYXBoeUZlYXR1cmVTdGF0ZVNlbGVjdG9yPFQ+KCk7XG4gIGNvbnN0IHNlbGVjdENvdW50cnlFbnRpdGllc1N0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0R2VvZ3JhcGh5RmVhdHVyZVN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmNvdW50cmllc1xuICApXG4gIGNvbnN0IHsgc2VsZWN0SWRzLCBzZWxlY3RFbnRpdGllcywgc2VsZWN0QWxsLCBzZWxlY3RUb3RhbCB9ID0gZ2V0Q291bnRyeUFkYXB0ZXI8VD4oKS5nZXRTZWxlY3RvcnMoc2VsZWN0Q291bnRyeUVudGl0aWVzU3RhdGUpO1xuXG4gIGNvbnN0IHNlbGVjdENvdW50cnkgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAoY291bnRyaWVzOiBEaWN0aW9uYXJ5PFQ+LCBwcm9wcykgPT4gY291bnRyaWVzW3Byb3BzLmlkXVxuICApXG5cbiAgY29uc3Qgc2VsZWN0Q291bnRyeVN1YmRpdmlzaW9ucyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChjb3VudHJpZXM6IERpY3Rpb25hcnk8VD4sIHByb3BzKSA9PiB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gc2VsZWN0Q291bnRyeS5wcm9qZWN0b3IoY291bnRyaWVzLCB7IGlkOiBwcm9wcy5pZCB9KTtcbiAgICAgIHJldHVybiBjb3VudHJ5ID8gY291bnRyeS5zdWJkaXZpc2lvbnMgOiBbXVxuICAgIH1cbiAgKVxuXG4gIGNvbnN0IHNlbGVjdElzQ291bnRyeUZ1bGx5TG9hZGVkID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKGNvdW50cmllczogRGljdGlvbmFyeTxUPiwgcHJvcHM6IHtpZDogVFsnaWQnXX0pID0+IHtcbiAgICAgIGNvbnN0IGNvdW50cnkgPSBzZWxlY3RDb3VudHJ5LnByb2plY3Rvcihjb3VudHJpZXMsIHsgaWQ6IHByb3BzLmlkIH0pO1xuICAgICAgcmV0dXJuIGNvdW50cnkgJiYgY291bnRyeS5sb2FkZWRcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RDb3VudHJ5RW50aXRpZXNTdGF0ZSxcbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciBmb3IgY291bnRyeSBJRHMuXG4gICAgICovXG4gICAgc2VsZWN0Q291bnRyeUlkczogc2VsZWN0SWRzLFxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIGZvciBjb3VudHJ5IGVudGl0aWVzLlxuICAgICAqL1xuICAgIHNlbGVjdENvdW50cnlFbnRpdGllczogc2VsZWN0RW50aXRpZXMsXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgZm9yIGFsbCBjb3VudHJpZXMuXG4gICAgICovXG4gICAgc2VsZWN0QWxsQ291bnRyaWVzOiBzZWxlY3RBbGwsXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgZm9yIHRvdGFsIG51bWJlciBvZiBjb3VudHJpZXMuXG4gICAgICovXG4gICAgc2VsZWN0Q291bnRyeVRvdGFsOiBzZWxlY3RUb3RhbCxcbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciBmb3IgYSBzcGVjaWZpYyBjb3VudHJ5LlxuICAgICAqL1xuICAgIHNlbGVjdENvdW50cnksXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgZm9yIGEgc3BlY2lmaWMgY291bnRyeSdzIHN1YmRpdmlzaW9ucy5cbiAgICAgKi9cbiAgICBzZWxlY3RDb3VudHJ5U3ViZGl2aXNpb25zLFxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIGZvciBjaGVja2luZyBpZiBhIGNvdW50cnkgaGFzIGJlZW4gZnVsbHkgbG9hZGVkLlxuICAgICAqIElmIHRydWUsIHRoZW4gYSBjb3VudHJ5J3Mgc3ViZGl2aXNpb25zIHdpbGwgYmUgcG9wdWxhdGVkIGlmIGFueSBleGlzdC5cbiAgICAgKi9cbiAgICBzZWxlY3RJc0NvdW50cnlGdWxseUxvYWRlZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmQ291bnRyeUVudGl0eVNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZkNvdW50cnk+KCk6IERhZmZDb3VudHJ5RW50aXR5U2VsZWN0b3JzPFQ+ID0+XG4gICAgY2FjaGUgPSBjYWNoZSB8fCBjcmVhdGVDb3VudHJ5RW50aXR5U2VsZWN0b3JzPFQ+KClcbn0pKCk7XG5cbiJdfQ==