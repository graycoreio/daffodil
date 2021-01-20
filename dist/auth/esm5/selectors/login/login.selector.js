/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getDaffAuthFeatureStateSelector } from '../auth-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffAuthLoginSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginState;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginLoading;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginErrors;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginToken;
    /** @type {?} */
    DaffAuthLoginSelectors.prototype.selectAuthLoginTokenValue;
}
/** @type {?} */
var createLoginSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectAuthLoginState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.login; }));
    /** @type {?} */
    var selectAuthLoginLoading = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectAuthLoginErrors = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    /** @type {?} */
    var selectAuthLoginToken = createSelector(selectAuthLoginState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.auth; }));
    /** @type {?} */
    var selectAuthLoginTokenValue = createSelector(selectAuthLoginToken, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state ? state.token : null; }));
    return {
        selectAuthLoginState: selectAuthLoginState,
        selectAuthLoginLoading: selectAuthLoginLoading,
        selectAuthLoginErrors: selectAuthLoginErrors,
        selectAuthLoginToken: selectAuthLoginToken,
        selectAuthLoginTokenValue: selectAuthLoginTokenValue
    };
});
var ɵ0 = createLoginSelectors;
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
        return cache = cache || createLoginSelectors();
    });
};
/** @type {?} */
export var getDaffAuthLoginSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9sb2dpbi9sb2dpbi5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBSzNFLDRDQU1DOzs7SUFMQyxzREFBNkU7O0lBQzdFLHdEQUEwRDs7SUFDMUQsdURBQTBEOztJQUMxRCxzREFBa0Q7O0lBQ2xELDJEQUFnRTs7O0lBRzVELG9CQUFvQjs7OztBQUFHOztRQUNyQixvQkFBb0IsR0FBRyxjQUFjLENBQ3pDLCtCQUErQixFQUFLOzs7O0lBQ3BDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLEVBQ3JCOztRQUVLLHNCQUFzQixHQUFHLGNBQWMsQ0FDM0Msb0JBQW9COzs7O0lBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sRUFBYixDQUFhLEVBQ3ZCOztRQUVLLHFCQUFxQixHQUFHLGNBQWMsQ0FDMUMsb0JBQW9COzs7O0lBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE1BQU0sRUFBWixDQUFZLEVBQ3RCOztRQUVLLG9CQUFvQixHQUFHLGNBQWMsQ0FDekMsb0JBQW9COzs7O0lBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLEVBQ3BCOztRQUVLLHlCQUF5QixHQUFHLGNBQWMsQ0FDOUMsb0JBQW9COzs7O0lBQ3BCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTFCLENBQTBCLEVBQ3BDO0lBRUQsT0FBTztRQUNMLG9CQUFvQixzQkFBQTtRQUNwQixzQkFBc0Isd0JBQUE7UUFDdEIscUJBQXFCLHVCQUFBO1FBQ3JCLG9CQUFvQixzQkFBQTtRQUNwQix5QkFBeUIsMkJBQUE7S0FDMUIsQ0FBQTtBQUNILENBQUMsQ0FBQTs7Ozs7QUFFeUM7O1FBQ3BDLEtBQUs7SUFDVDs7OztJQUFPO1FBQ0wsT0FBQSxLQUFLLEdBQUcsS0FBSyxJQUFJLG9CQUFvQixFQUFLO0lBQTFDLENBQTBDLEVBQUE7QUFDOUMsQ0FBQzs7QUFKRCxNQUFNLEtBQU8seUJBQXlCLEdBQUcsTUFJdkMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBnZXREYWZmQXV0aEZlYXR1cmVTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYXV0aC1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aC10b2tlbic7XG5pbXBvcnQgeyBEYWZmQXV0aEZlYXR1cmVTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2F1dGgtZmVhdHVyZS1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkF1dGhMb2dpblJlZHVjZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZBdXRoTG9naW5TZWxlY3RvcnM8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+IHtcbiAgc2VsZWN0QXV0aExvZ2luU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQXV0aExvZ2luUmVkdWNlclN0YXRlPFQ+PjtcbiAgc2VsZWN0QXV0aExvZ2luTG9hZGluZzogTWVtb2l6ZWRTZWxlY3RvcjxvYmplY3QsIGJvb2xlYW4+O1xuICBzZWxlY3RBdXRoTG9naW5FcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXT47XG4gIHNlbGVjdEF1dGhMb2dpblRva2VuOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgVD47XG4gIHNlbGVjdEF1dGhMb2dpblRva2VuVmFsdWU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBUWyd0b2tlbiddPjtcbn1cblxuY29uc3QgY3JlYXRlTG9naW5TZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+KCkgPT4ge1xuICBjb25zdCBzZWxlY3RBdXRoTG9naW5TdGF0ZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldERhZmZBdXRoRmVhdHVyZVN0YXRlU2VsZWN0b3I8VD4oKSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5sb2dpblxuICApXG5cbiAgY29uc3Qgc2VsZWN0QXV0aExvZ2luTG9hZGluZyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEF1dGhMb2dpblN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmxvYWRpbmdcbiAgKTtcblxuICBjb25zdCBzZWxlY3RBdXRoTG9naW5FcnJvcnMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RBdXRoTG9naW5TdGF0ZSxcbiAgICBzdGF0ZSA9PiBzdGF0ZS5lcnJvcnNcbiAgKTtcblxuICBjb25zdCBzZWxlY3RBdXRoTG9naW5Ub2tlbiA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHNlbGVjdEF1dGhMb2dpblN0YXRlLFxuICAgIHN0YXRlID0+IHN0YXRlLmF1dGhcbiAgKTtcblxuICBjb25zdCBzZWxlY3RBdXRoTG9naW5Ub2tlblZhbHVlID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgc2VsZWN0QXV0aExvZ2luVG9rZW4sXG4gICAgc3RhdGUgPT4gc3RhdGUgPyBzdGF0ZS50b2tlbiA6IG51bGxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHNlbGVjdEF1dGhMb2dpblN0YXRlLFxuICAgIHNlbGVjdEF1dGhMb2dpbkxvYWRpbmcsXG4gICAgc2VsZWN0QXV0aExvZ2luRXJyb3JzLFxuICAgIHNlbGVjdEF1dGhMb2dpblRva2VuLFxuICAgIHNlbGVjdEF1dGhMb2dpblRva2VuVmFsdWVcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldERhZmZBdXRoTG9naW5TZWxlY3RvcnMgPSAoKCkgPT4ge1xuICBsZXQgY2FjaGU7XG4gIHJldHVybiA8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+KCk6IERhZmZBdXRoTG9naW5TZWxlY3RvcnM8VD4gPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IGNyZWF0ZUxvZ2luU2VsZWN0b3JzPFQ+KClcbn0pKCk7XG4iXX0=