/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';
/**
 * @record
 */
export function DaffAuthRegisterSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthRegisterSelectors.prototype.selectAuthRegisterState;
    /** @type {?} */
    DaffAuthRegisterSelectors.prototype.selectAuthRegisterLoading;
    /** @type {?} */
    DaffAuthRegisterSelectors.prototype.selectAuthRegisterErrors;
}
/** @type {?} */
const createRegisterSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectAuthRegisterState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    state => state.register));
    /** @type {?} */
    const selectAuthRegisterLoading = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectAuthRegisterErrors = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectAuthRegisterState,
        selectAuthRegisterLoading,
        selectAuthRegisterErrors,
    };
});
const ɵ0 = createRegisterSelectors;
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
    () => cache = cache || createRegisterSelectors());
};
/** @type {?} */
export const getDaffAuthRegisterSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9yZWdpc3Rlci9yZWdpc3Rlci5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNM0UsK0NBSUM7OztJQUhDLDREQUFnRjs7SUFDaEYsOERBQTZEOztJQUM3RCw2REFBNkQ7OztNQUd6RCx1QkFBdUI7Ozs7QUFBRyxHQUE0QixFQUFFOztVQUN0RCx1QkFBdUIsR0FBRyxjQUFjLENBQzVDLCtCQUErQixFQUFLOzs7O0lBQ3BDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDeEI7O1VBRUsseUJBQXlCLEdBQUcsY0FBYyxDQUM5Qyx1QkFBdUI7Ozs7SUFDdkIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUN2Qjs7VUFFSyx3QkFBd0IsR0FBRyxjQUFjLENBQzdDLHVCQUF1Qjs7OztJQUN2QixLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3RCO0lBRUQsT0FBTztRQUNMLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsd0JBQXdCO0tBQ3pCLENBQUE7QUFDSCxDQUFDLENBQUE7Ozs7O0FBRTRDLEdBQUcsRUFBRTs7UUFDNUMsS0FBSztJQUNUOzs7O0lBQU8sR0FBdUQsRUFBRSxDQUM5RCxLQUFLLEdBQUcsS0FBSyxJQUFJLHVCQUF1QixFQUFLLEVBQUE7QUFDakQsQ0FBQzs7QUFKRCxNQUFNLE9BQU8sNEJBQTRCLEdBQUcsTUFJMUMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBnZXREYWZmQXV0aEZlYXR1cmVTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYXV0aC1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aC10b2tlbic7XG5pbXBvcnQge1xuICBEYWZmQXV0aFJlZ2lzdGVyUmVkdWNlclN0YXRlLFxufSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGludGVyZmFjZSBEYWZmQXV0aFJlZ2lzdGVyU2VsZWN0b3JzIHtcbiAgc2VsZWN0QXV0aFJlZ2lzdGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQXV0aFJlZ2lzdGVyUmVkdWNlclN0YXRlPjtcbiAgc2VsZWN0QXV0aFJlZ2lzdGVyTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICBzZWxlY3RBdXRoUmVnaXN0ZXJFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXT47XG59XG5cbmNvbnN0IGNyZWF0ZVJlZ2lzdGVyU2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmQXV0aFRva2VuPigpID0+IHtcbiAgY29uc3Qgc2VsZWN0QXV0aFJlZ2lzdGVyU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXREYWZmQXV0aEZlYXR1cmVTdGF0ZVNlbGVjdG9yPFQ+KCksXG4gICAgc3RhdGUgPT4gc3RhdGUucmVnaXN0ZXJcbiAgKVxuXG4gIGNvbnN0IHNlbGVjdEF1dGhSZWdpc3RlckxvYWRpbmcgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RBdXRoUmVnaXN0ZXJTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5sb2FkaW5nXG4gICk7XG5cbiAgY29uc3Qgc2VsZWN0QXV0aFJlZ2lzdGVyRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0QXV0aFJlZ2lzdGVyU3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUuZXJyb3JzXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RBdXRoUmVnaXN0ZXJTdGF0ZSxcbiAgICBzZWxlY3RBdXRoUmVnaXN0ZXJMb2FkaW5nLFxuICAgIHNlbGVjdEF1dGhSZWdpc3RlckVycm9ycyxcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldERhZmZBdXRoUmVnaXN0ZXJTZWxlY3RvcnMgPSAoKCkgPT4ge1xuICBsZXQgY2FjaGU7XG4gIHJldHVybiA8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+KCk6IERhZmZBdXRoUmVnaXN0ZXJTZWxlY3RvcnMgPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IGNyZWF0ZVJlZ2lzdGVyU2VsZWN0b3JzPFQ+KClcbn0pKCk7XG4iXX0=