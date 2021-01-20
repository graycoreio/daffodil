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
const createCountryEntitySelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectGeographyFeatureState } = getDaffGeographyFeatureStateSelector();
    /** @type {?} */
    const selectCountryEntitiesState = createSelector(selectGeographyFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.countries));
    const { selectIds, selectEntities, selectAll, selectTotal } = getCountryAdapter().getSelectors(selectCountryEntitiesState);
    /** @type {?} */
    const selectCountry = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    (countries, props) => countries[props.id]));
    /** @type {?} */
    const selectCountrySubdivisions = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    (countries, props) => {
        /** @type {?} */
        const country = selectCountry.projector(countries, { id: props.id });
        return country ? country.subdivisions : [];
    }));
    /** @type {?} */
    const selectIsCountryFullyLoaded = createSelector(selectEntities, (/**
     * @param {?} countries
     * @param {?} props
     * @return {?}
     */
    (countries, props) => {
        /** @type {?} */
        const country = selectCountry.projector(countries, { id: props.id });
        return country && country.loaded;
    }));
    return {
        selectCountryEntitiesState,
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
        selectCountry,
        /**
         * Selector for a specific country's subdivisions.
         */
        selectCountrySubdivisions,
        /**
         * Selector for checking if a country has been fully loaded.
         * If true, then a country's subdivisions will be populated if any exist.
         */
        selectIsCountryFullyLoaded
    };
});
const ɵ0 = createCountryEntitySelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createCountryEntitySelectors());
};
/** @type {?} */
export const getDaffCountryEntitySelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1lbnRpdGllcy5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvc3RhdGUvIiwic291cmNlcyI6WyJzZWxlY3RvcnMvY291bnRyeS1lbnRpdGllcy5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBK0MsTUFBTSxhQUFhLENBQUM7QUFPMUYsT0FBTyxFQUNMLGlCQUFpQixFQUVsQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUVwRixnREFTQzs7O0lBUkMsZ0VBQWdGOztJQUNoRixzREFBZ0U7O0lBQ2hFLDJEQUErRDs7SUFDL0Qsd0RBQWtEOztJQUNsRCx3REFBcUQ7O0lBQ3JELG1EQUEyRTs7SUFDM0UsK0RBQXVHOztJQUN2RyxnRUFBOEQ7OztNQUcxRCw0QkFBNEI7Ozs7QUFBRyxHQUF3QyxFQUFFO1VBQ3ZFLEVBQUUsMkJBQTJCLEVBQUUsR0FBRyxvQ0FBb0MsRUFBSzs7VUFDM0UsMEJBQTBCLEdBQUcsY0FBYyxDQUMvQywyQkFBMkI7Ozs7SUFDM0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUN6QjtVQUNLLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsaUJBQWlCLEVBQUssQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUM7O1VBRXZILGFBQWEsR0FBRyxjQUFjLENBQ2xDLGNBQWM7Ozs7O0lBQ2QsQ0FBQyxTQUF3QixFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFDekQ7O1VBRUsseUJBQXlCLEdBQUcsY0FBYyxDQUM5QyxjQUFjOzs7OztJQUNkLENBQUMsU0FBd0IsRUFBRSxLQUFLLEVBQUUsRUFBRTs7Y0FDNUIsT0FBTyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNwRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO0lBQzVDLENBQUMsRUFDRjs7VUFFSywwQkFBMEIsR0FBRyxjQUFjLENBQy9DLGNBQWM7Ozs7O0lBQ2QsQ0FBQyxTQUF3QixFQUFFLEtBQW9CLEVBQUUsRUFBRTs7Y0FDM0MsT0FBTyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNwRSxPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFBO0lBQ2xDLENBQUMsRUFDRjtJQUVELE9BQU87UUFDTCwwQkFBMEI7Ozs7UUFJMUIsZ0JBQWdCLEVBQUUsU0FBUzs7OztRQUkzQixxQkFBcUIsRUFBRSxjQUFjOzs7O1FBSXJDLGtCQUFrQixFQUFFLFNBQVM7Ozs7UUFJN0Isa0JBQWtCLEVBQUUsV0FBVztRQUMvQjs7V0FFRztRQUNILGFBQWE7UUFDYjs7V0FFRztRQUNILHlCQUF5QjtRQUN6Qjs7O1dBR0c7UUFDSCwwQkFBMEI7S0FDM0IsQ0FBQTtBQUNILENBQUMsQ0FBQTs7Ozs7QUFFNkMsR0FBRyxFQUFFOztRQUM3QyxLQUFLO0lBQ1Q7Ozs7SUFBTyxHQUF5RCxFQUFFLENBQ2hFLEtBQUssR0FBRyxLQUFLLElBQUksNEJBQTRCLEVBQUssRUFBQTtBQUN0RCxDQUFDOztBQUpELE1BQU0sT0FBTyw2QkFBNkIsR0FBRyxNQUkzQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3JXaXRoUHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHtcbiAgRGFmZkNvdW50cnksXG59IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQge1xuICBnZXRDb3VudHJ5QWRhcHRlcixcbiAgRGFmZkNvdW50cnlFbnRpdHlTdGF0ZVxufSBmcm9tICcuLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IGdldERhZmZHZW9ncmFwaHlGZWF0dXJlU3RhdGVTZWxlY3RvciB9IGZyb20gJy4vZ2VvZ3JhcGh5LWZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZDb3VudHJ5RW50aXR5U2VsZWN0b3JzPFQgZXh0ZW5kcyBEYWZmQ291bnRyeT4ge1xuICBzZWxlY3RDb3VudHJ5RW50aXRpZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZDb3VudHJ5RW50aXR5U3RhdGU8VD4+O1xuICBzZWxlY3RDb3VudHJ5SWRzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nW10gfCBudW1iZXJbXT47XG4gIHNlbGVjdENvdW50cnlFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERpY3Rpb25hcnk8VD4+O1xuICBzZWxlY3RBbGxDb3VudHJpZXM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUW10+O1xuICBzZWxlY3RDb3VudHJ5VG90YWw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBudW1iZXI+O1xuICBzZWxlY3RDb3VudHJ5OiBNZW1vaXplZFNlbGVjdG9yV2l0aFByb3BzPG9iamVjdCwge2lkOiBzdHJpbmcgfCBudW1iZXJ9LCBUPjtcbiAgc2VsZWN0Q291bnRyeVN1YmRpdmlzaW9uczogTWVtb2l6ZWRTZWxlY3RvcldpdGhQcm9wczxvYmplY3QsIHtpZDogc3RyaW5nIHwgbnVtYmVyfSwgVFsnc3ViZGl2aXNpb25zJ10+O1xuICBzZWxlY3RJc0NvdW50cnlGdWxseUxvYWRlZDogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xufVxuXG5jb25zdCBjcmVhdGVDb3VudHJ5RW50aXR5U2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmQ291bnRyeSA9IERhZmZDb3VudHJ5PigpID0+IHtcbiAgY29uc3QgeyBzZWxlY3RHZW9ncmFwaHlGZWF0dXJlU3RhdGUgfSA9IGdldERhZmZHZW9ncmFwaHlGZWF0dXJlU3RhdGVTZWxlY3RvcjxUPigpO1xuICBjb25zdCBzZWxlY3RDb3VudHJ5RW50aXRpZXNTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEdlb2dyYXBoeUZlYXR1cmVTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5jb3VudHJpZXNcbiAgKVxuICBjb25zdCB7IHNlbGVjdElkcywgc2VsZWN0RW50aXRpZXMsIHNlbGVjdEFsbCwgc2VsZWN0VG90YWwgfSA9IGdldENvdW50cnlBZGFwdGVyPFQ+KCkuZ2V0U2VsZWN0b3JzKHNlbGVjdENvdW50cnlFbnRpdGllc1N0YXRlKTtcblxuICBjb25zdCBzZWxlY3RDb3VudHJ5ID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0RW50aXRpZXMsXG4gICAgKGNvdW50cmllczogRGljdGlvbmFyeTxUPiwgcHJvcHMpID0+IGNvdW50cmllc1twcm9wcy5pZF1cbiAgKVxuXG4gIGNvbnN0IHNlbGVjdENvdW50cnlTdWJkaXZpc2lvbnMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RFbnRpdGllcyxcbiAgICAoY291bnRyaWVzOiBEaWN0aW9uYXJ5PFQ+LCBwcm9wcykgPT4ge1xuICAgICAgY29uc3QgY291bnRyeSA9IHNlbGVjdENvdW50cnkucHJvamVjdG9yKGNvdW50cmllcywgeyBpZDogcHJvcHMuaWQgfSk7XG4gICAgICByZXR1cm4gY291bnRyeSA/IGNvdW50cnkuc3ViZGl2aXNpb25zIDogW11cbiAgICB9XG4gIClcblxuICBjb25zdCBzZWxlY3RJc0NvdW50cnlGdWxseUxvYWRlZCA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEVudGl0aWVzLFxuICAgIChjb3VudHJpZXM6IERpY3Rpb25hcnk8VD4sIHByb3BzOiB7aWQ6IFRbJ2lkJ119KSA9PiB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gc2VsZWN0Q291bnRyeS5wcm9qZWN0b3IoY291bnRyaWVzLCB7IGlkOiBwcm9wcy5pZCB9KTtcbiAgICAgIHJldHVybiBjb3VudHJ5ICYmIGNvdW50cnkubG9hZGVkXG4gICAgfVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0Q291bnRyeUVudGl0aWVzU3RhdGUsXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgZm9yIGNvdW50cnkgSURzLlxuICAgICAqL1xuICAgIHNlbGVjdENvdW50cnlJZHM6IHNlbGVjdElkcyxcbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciBmb3IgY291bnRyeSBlbnRpdGllcy5cbiAgICAgKi9cbiAgICBzZWxlY3RDb3VudHJ5RW50aXRpZXM6IHNlbGVjdEVudGl0aWVzLFxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIGZvciBhbGwgY291bnRyaWVzLlxuICAgICAqL1xuICAgIHNlbGVjdEFsbENvdW50cmllczogc2VsZWN0QWxsLFxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIGZvciB0b3RhbCBudW1iZXIgb2YgY291bnRyaWVzLlxuICAgICAqL1xuICAgIHNlbGVjdENvdW50cnlUb3RhbDogc2VsZWN0VG90YWwsXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgZm9yIGEgc3BlY2lmaWMgY291bnRyeS5cbiAgICAgKi9cbiAgICBzZWxlY3RDb3VudHJ5LFxuICAgIC8qKlxuICAgICAqIFNlbGVjdG9yIGZvciBhIHNwZWNpZmljIGNvdW50cnkncyBzdWJkaXZpc2lvbnMuXG4gICAgICovXG4gICAgc2VsZWN0Q291bnRyeVN1YmRpdmlzaW9ucyxcbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciBmb3IgY2hlY2tpbmcgaWYgYSBjb3VudHJ5IGhhcyBiZWVuIGZ1bGx5IGxvYWRlZC5cbiAgICAgKiBJZiB0cnVlLCB0aGVuIGEgY291bnRyeSdzIHN1YmRpdmlzaW9ucyB3aWxsIGJlIHBvcHVsYXRlZCBpZiBhbnkgZXhpc3QuXG4gICAgICovXG4gICAgc2VsZWN0SXNDb3VudHJ5RnVsbHlMb2FkZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkNvdW50cnlFbnRpdHlTZWxlY3RvcnMgPSAoKCkgPT4ge1xuICBsZXQgY2FjaGU7XG4gIHJldHVybiA8VCBleHRlbmRzIERhZmZDb3VudHJ5PigpOiBEYWZmQ291bnRyeUVudGl0eVNlbGVjdG9yczxUPiA9PlxuICAgIGNhY2hlID0gY2FjaGUgfHwgY3JlYXRlQ291bnRyeUVudGl0eVNlbGVjdG9yczxUPigpXG59KSgpO1xuXG4iXX0=