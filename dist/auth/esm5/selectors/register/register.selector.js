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
var createRegisterSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectAuthRegisterState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.register; }));
    /** @type {?} */
    var selectAuthRegisterLoading = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectAuthRegisterErrors = createSelector(selectAuthRegisterState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectAuthRegisterState: selectAuthRegisterState,
        selectAuthRegisterLoading: selectAuthRegisterLoading,
        selectAuthRegisterErrors: selectAuthRegisterErrors,
    };
});
var ɵ0 = createRegisterSelectors;
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
        return cache = cache || createRegisterSelectors();
    });
};
/** @type {?} */
export var getDaffAuthRegisterSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9yZWdpc3Rlci9yZWdpc3Rlci5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNM0UsK0NBSUM7OztJQUhDLDREQUFnRjs7SUFDaEYsOERBQTZEOztJQUM3RCw2REFBNkQ7OztJQUd6RCx1QkFBdUI7Ozs7QUFBRzs7UUFDeEIsdUJBQXVCLEdBQUcsY0FBYyxDQUM1QywrQkFBK0IsRUFBSzs7OztJQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxFQUN4Qjs7UUFFSyx5QkFBeUIsR0FBRyxjQUFjLENBQzlDLHVCQUF1Qjs7OztJQUN2QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQWIsQ0FBYSxFQUN2Qjs7UUFFSyx3QkFBd0IsR0FBRyxjQUFjLENBQzdDLHVCQUF1Qjs7OztJQUN2QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLEVBQVosQ0FBWSxFQUN0QjtJQUVELE9BQU87UUFDTCx1QkFBdUIseUJBQUE7UUFDdkIseUJBQXlCLDJCQUFBO1FBQ3pCLHdCQUF3QiwwQkFBQTtLQUN6QixDQUFBO0FBQ0gsQ0FBQyxDQUFBOzs7OztBQUU0Qzs7UUFDdkMsS0FBSztJQUNUOzs7O0lBQU87UUFDTCxPQUFBLEtBQUssR0FBRyxLQUFLLElBQUksdUJBQXVCLEVBQUs7SUFBN0MsQ0FBNkMsRUFBQTtBQUNqRCxDQUFDOztBQUpELE1BQU0sS0FBTyw0QkFBNEIsR0FBRyxNQUkxQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IGdldERhZmZBdXRoRmVhdHVyZVN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi9hdXRoLWZlYXR1cmUuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoLXRva2VuJztcbmltcG9ydCB7XG4gIERhZmZBdXRoUmVnaXN0ZXJSZWR1Y2VyU3RhdGUsXG59IGZyb20gJy4uLy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZBdXRoUmVnaXN0ZXJTZWxlY3RvcnMge1xuICBzZWxlY3RBdXRoUmVnaXN0ZXJTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIERhZmZBdXRoUmVnaXN0ZXJSZWR1Y2VyU3RhdGU+O1xuICBzZWxlY3RBdXRoUmVnaXN0ZXJMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdEF1dGhSZWdpc3RlckVycm9yczogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIHN0cmluZ1tdPjtcbn1cblxuY29uc3QgY3JlYXRlUmVnaXN0ZXJTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+KCkgPT4ge1xuICBjb25zdCBzZWxlY3RBdXRoUmVnaXN0ZXJTdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldERhZmZBdXRoRmVhdHVyZVN0YXRlU2VsZWN0b3I8VD4oKSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5yZWdpc3RlclxuICApXG5cbiAgY29uc3Qgc2VsZWN0QXV0aFJlZ2lzdGVyTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEF1dGhSZWdpc3RlclN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmxvYWRpbmdcbiAgKTtcblxuICBjb25zdCBzZWxlY3RBdXRoUmVnaXN0ZXJFcnJvcnMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RBdXRoUmVnaXN0ZXJTdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5lcnJvcnNcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHNlbGVjdEF1dGhSZWdpc3RlclN0YXRlLFxuICAgIHNlbGVjdEF1dGhSZWdpc3RlckxvYWRpbmcsXG4gICAgc2VsZWN0QXV0aFJlZ2lzdGVyRXJyb3JzLFxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGFmZkF1dGhSZWdpc3RlclNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZkF1dGhUb2tlbj4oKTogRGFmZkF1dGhSZWdpc3RlclNlbGVjdG9ycyA9PlxuICAgIGNhY2hlID0gY2FjaGUgfHwgY3JlYXRlUmVnaXN0ZXJTZWxlY3RvcnM8VD4oKVxufSkoKTtcbiJdfQ==