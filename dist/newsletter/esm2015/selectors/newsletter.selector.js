/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/**
 * @record
 */
export function State() { }
if (false) {
    /** @type {?} */
    State.prototype.newsletter;
}
/**
 * Feature State Selector
 * @type {?}
 */
const selectNewsletterFeatureState = createFeatureSelector('newsletter');
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.loading;
/**
 * Child key of feature state
 * @type {?}
 */
export const selectDaffNewsletterLoading = createSelector(selectNewsletterFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.error;
/** @type {?} */
export const selectDaffNewsletterError = createSelector(selectNewsletterFeatureState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.success;
/** @type {?} */
export const selectDaffNewsletterSuccess = createSelector(selectNewsletterFeatureState, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uZXdzbGV0dGVyLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL25ld3NsZXR0ZXIuc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLHFCQUFxQixFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBR3RGLDJCQUVDOzs7SUFEQywyQkFBK0I7Ozs7OztNQU0zQiw0QkFBNEIsR0FDZSxxQkFBcUIsQ0FBc0IsWUFBWSxDQUFDOzs7OztBQVF2RyxDQUFDLEtBQTBCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7OztBQUYvQyxNQUFNLE9BQU8sMkJBQTJCLEdBQUcsY0FBYyxDQUN2RCw0QkFBNEIsT0FFN0I7Ozs7O0FBSUMsQ0FBQyxLQUEwQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSzs7QUFGN0MsTUFBTSxPQUFPLHlCQUF5QixHQUFHLGNBQWMsQ0FDckQsNEJBQTRCLE9BRTdCOzs7OztBQUlDLENBQUMsS0FBMEIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87O0FBRi9DLE1BQU0sT0FBTywyQkFBMkIsR0FBRyxjQUFjLENBQ3ZELDRCQUE0QixPQUU3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlclN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvbmV3c2xldHRlci5yZWR1Y2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIG5ld3NsZXR0ZXI6IERhZmZOZXdzbGV0dGVyU3RhdGVcbn1cblxuLyoqXG4gKiBGZWF0dXJlIFN0YXRlIFNlbGVjdG9yXG4gKi9cbmNvbnN0IHNlbGVjdE5ld3NsZXR0ZXJGZWF0dXJlU3RhdGU6IFxuICBNZW1vaXplZFNlbGVjdG9yPFN0YXRlLCBEYWZmTmV3c2xldHRlclN0YXRlPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxEYWZmTmV3c2xldHRlclN0YXRlPignbmV3c2xldHRlcicpO1xuXG5cbi8qKlxuICogQ2hpbGQga2V5IG9mIGZlYXR1cmUgc3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERhZmZOZXdzbGV0dGVyTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3ROZXdzbGV0dGVyRmVhdHVyZVN0YXRlLFxuICAoc3RhdGU6IERhZmZOZXdzbGV0dGVyU3RhdGUpID0+IHN0YXRlLmxvYWRpbmdcbik7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3REYWZmTmV3c2xldHRlckVycm9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdE5ld3NsZXR0ZXJGZWF0dXJlU3RhdGUsXG4gIChzdGF0ZTogRGFmZk5ld3NsZXR0ZXJTdGF0ZSkgPT4gc3RhdGUuZXJyb3Jcbik7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3REYWZmTmV3c2xldHRlclN1Y2Nlc3MgPSBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0TmV3c2xldHRlckZlYXR1cmVTdGF0ZSxcbiAgKHN0YXRlOiBEYWZmTmV3c2xldHRlclN0YXRlKSA9PiBzdGF0ZS5zdWNjZXNzXG4pOyJdfQ==