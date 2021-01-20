/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';
/**
 * @record
 */
export function AuthSelectors() { }
if (false) {
    /** @type {?} */
    AuthSelectors.prototype.selectAuthState;
    /** @type {?} */
    AuthSelectors.prototype.selectAuthLoading;
    /** @type {?} */
    AuthSelectors.prototype.selectAuthErrors;
}
/** @type {?} */
const createAuthSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectAuthState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    state => state.auth));
    /** @type {?} */
    const selectAuthLoading = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectAuthErrors = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectAuthState,
        selectAuthLoading,
        selectAuthErrors,
    };
});
const ɵ0 = createAuthSelectors;
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
    () => cache = cache || createAuthSelectors());
};
/** @type {?} */
export const getAuthSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2F1dGgvYXV0aC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFPM0UsbUNBSUM7OztJQUhDLHdDQUFnRTs7SUFDaEUsMENBQXFEOztJQUNyRCx5Q0FBcUQ7OztNQUdqRCxtQkFBbUI7Ozs7QUFBRyxHQUE0QixFQUFFOztVQUNsRCxlQUFlLEdBQUcsY0FBYyxDQUNwQywrQkFBK0IsRUFBSzs7OztJQUNwQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3BCOztVQUVLLGlCQUFpQixHQUFHLGNBQWMsQ0FDdEMsZUFBZTs7OztJQUNmLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDdkI7O1VBRUssZ0JBQWdCLEdBQUcsY0FBYyxDQUNyQyxlQUFlOzs7O0lBQ2YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN0QjtJQUVELE9BQU87UUFDTCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtLQUNqQixDQUFBO0FBQ0gsQ0FBQyxDQUFBOzs7OztBQUVnQyxHQUFHLEVBQUU7O1FBQ2hDLEtBQUs7SUFDVDs7OztJQUFPLEdBQTJDLEVBQUUsQ0FDbEQsS0FBSyxHQUFHLEtBQUssSUFBSSxtQkFBbUIsRUFBSyxFQUFBO0FBQzdDLENBQUM7O0FBSkQsTUFBTSxPQUFPLGdCQUFnQixHQUFHLE1BSTlCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgZ2V0RGFmZkF1dGhGZWF0dXJlU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2F1dGgtZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQXV0aFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGgtdG9rZW4nO1xuaW1wb3J0IHtcbiAgRGFmZkF1dGhSZWR1Y2VyU3RhdGVcbn0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBBdXRoU2VsZWN0b3JzIHtcbiAgc2VsZWN0QXV0aFN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgRGFmZkF1dGhSZWR1Y2VyU3RhdGU+O1xuICBzZWxlY3RBdXRoTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICBzZWxlY3RBdXRoRXJyb3JzOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nW10+O1xufVxuXG5jb25zdCBjcmVhdGVBdXRoU2VsZWN0b3JzID0gPFQgZXh0ZW5kcyBEYWZmQXV0aFRva2VuPigpID0+IHtcbiAgY29uc3Qgc2VsZWN0QXV0aFN0YXRlID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0RGFmZkF1dGhGZWF0dXJlU3RhdGVTZWxlY3RvcjxUPigpLFxuICAgIHN0YXRlID0+IHN0YXRlLmF1dGhcbiAgKVxuXG4gIGNvbnN0IHNlbGVjdEF1dGhMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0QXV0aFN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmxvYWRpbmdcbiAgKTtcblxuICBjb25zdCBzZWxlY3RBdXRoRXJyb3JzID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0QXV0aFN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmVycm9yc1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgc2VsZWN0QXV0aFN0YXRlLFxuICAgIHNlbGVjdEF1dGhMb2FkaW5nLFxuICAgIHNlbGVjdEF1dGhFcnJvcnMsXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBdXRoU2VsZWN0b3JzID0gKCgpID0+IHtcbiAgbGV0IGNhY2hlO1xuICByZXR1cm4gPFQgZXh0ZW5kcyBEYWZmQXV0aFRva2VuPigpOiBBdXRoU2VsZWN0b3JzID0+XG4gICAgY2FjaGUgPSBjYWNoZSB8fCBjcmVhdGVBdXRoU2VsZWN0b3JzPFQ+KClcbn0pKCk7XG4iXX0=