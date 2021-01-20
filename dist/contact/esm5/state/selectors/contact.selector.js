/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createFeatureSelector, createSelector } from '@ngrx/store';
/**
 * @record
 */
export function DaffContactFeatureState() { }
if (false) {
    /** @type {?} */
    DaffContactFeatureState.prototype.contact;
}
/** @type {?} */
export var selectContactFeatureState = createFeatureSelector('contact');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.loading; };
/** @type {?} */
export var selectDaffContactLoading = createSelector(selectContactFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.success; };
/** @type {?} */
export var selectDaffContactSuccess = createSelector(selectContactFeatureState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.errors; };
/** @type {?} */
export var selectDaffContactError = createSelector(selectContactFeatureState, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb250YWN0L3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2NvbnRhY3Quc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBb0IscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBR3RGLDZDQUVDOzs7SUFEQywwQ0FBeUI7OztBQUczQixNQUFNLEtBQU8seUJBQXlCLEdBQzBCLHFCQUFxQixDQUFtQixTQUFTLENBQUM7Ozs7O0FBR3JGLFVBQUMsS0FBdUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYTs7QUFEdkUsTUFBTSxLQUFPLHdCQUF3QixHQUFHLGNBQWMsQ0FDcEQseUJBQXlCLE9BQzFCOzs7OztBQUc0QixVQUFDLEtBQXVCLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWE7O0FBRHZFLE1BQU0sS0FBTyx3QkFBd0IsR0FBRyxjQUFjLENBQ3BELHlCQUF5QixPQUMxQjs7Ozs7QUFHNEIsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZOztBQUR0RSxNQUFNLEtBQU8sc0JBQXNCLEdBQUcsY0FBYyxDQUNsRCx5QkFBeUIsT0FDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW1vaXplZFNlbGVjdG9yLCBjcmVhdGVGZWF0dXJlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGFmZkNvbnRhY3RTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL2NvbnRhY3QucmVkdWNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkNvbnRhY3RGZWF0dXJlU3RhdGUge1xuICBjb250YWN0OiBEYWZmQ29udGFjdFN0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDb250YWN0RmVhdHVyZVN0YXRlOlxuICBNZW1vaXplZFNlbGVjdG9yPERhZmZDb250YWN0RmVhdHVyZVN0YXRlLCBEYWZmQ29udGFjdFN0YXRlPiA9IGNyZWF0ZUZlYXR1cmVTZWxlY3RvcjxEYWZmQ29udGFjdFN0YXRlPignY29udGFjdCcpO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RGFmZkNvbnRhY3RMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdENvbnRhY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogRGFmZkNvbnRhY3RTdGF0ZSkgPT4gc3RhdGUubG9hZGluZ1xuKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdERhZmZDb250YWN0U3VjY2VzcyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBzZWxlY3RDb250YWN0RmVhdHVyZVN0YXRlLCAoc3RhdGU6IERhZmZDb250YWN0U3RhdGUpID0+IHN0YXRlLnN1Y2Nlc3Ncbik7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3REYWZmQ29udGFjdEVycm9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHNlbGVjdENvbnRhY3RGZWF0dXJlU3RhdGUsIChzdGF0ZTogRGFmZkNvbnRhY3RTdGF0ZSkgPT4gc3RhdGUuZXJyb3JzXG4pOyJdfQ==