/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { getAuthSelectors } from './auth/auth.selector';
import { getDaffAuthLoginSelectors } from './login/login.selector';
import { getDaffAuthRegisterSelectors } from './register/register.selector';
import { getDaffAuthFeatureStateSelector } from './auth-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffAuthSelectors() { }
if (false) {
    /** @type {?} */
    DaffAuthSelectors.prototype.selectAuthFeatureState;
}
var ɵ0 = /**
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
        return cache = cache || tslib_1.__assign({}, getAuthSelectors(), getDaffAuthLoginSelectors(), getDaffAuthRegisterSelectors(), { selectAuthFeatureState: getDaffAuthFeatureStateSelector() });
    });
};
/** @type {?} */
export var getDaffAuthSelectors = ((ɵ0))();
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1hbGwuc2VsZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbInNlbGVjdG9ycy9hdXRoLWFsbC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBaUIsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQTBCLE1BQU0sd0JBQXdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLDRCQUE0QixFQUE2QixNQUFNLDhCQUE4QixDQUFDO0FBR3ZHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUUxRSx1Q0FLQzs7O0lBREMsbURBQTBFOzs7OztBQUd2Qzs7UUFDL0IsS0FBSztJQUNUOzs7O0lBQU87UUFDTCxPQUFBLEtBQUssR0FBRyxLQUFLLHlCQUNSLGdCQUFnQixFQUFLLEVBQ3JCLHlCQUF5QixFQUFLLEVBQzlCLDRCQUE0QixFQUFLLElBQ3BDLHNCQUFzQixFQUFFLCtCQUErQixFQUFLLEdBQzdEO0lBTEQsQ0FLQyxFQUFBO0FBQ0wsQ0FBQzs7QUFURCxNQUFNLEtBQU8sb0JBQW9CLEdBQUcsTUFTbEMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IGdldEF1dGhTZWxlY3RvcnMsIEF1dGhTZWxlY3RvcnMgfSBmcm9tICcuL2F1dGgvYXV0aC5zZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXREYWZmQXV0aExvZ2luU2VsZWN0b3JzLCBEYWZmQXV0aExvZ2luU2VsZWN0b3JzIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5zZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXREYWZmQXV0aFJlZ2lzdGVyU2VsZWN0b3JzLCBEYWZmQXV0aFJlZ2lzdGVyU2VsZWN0b3JzIH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmQXV0aFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtdG9rZW4nO1xuaW1wb3J0IHsgRGFmZkF1dGhGZWF0dXJlU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IGdldERhZmZBdXRoRmVhdHVyZVN0YXRlU2VsZWN0b3IgfSBmcm9tICcuL2F1dGgtZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFmZkF1dGhTZWxlY3RvcnM8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+IGV4dGVuZHNcbiAgRGFmZkF1dGhSZWdpc3RlclNlbGVjdG9ycyxcbiAgRGFmZkF1dGhMb2dpblNlbGVjdG9yczxUPixcbiAgQXV0aFNlbGVjdG9ycyB7XG4gIHNlbGVjdEF1dGhGZWF0dXJlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQXV0aEZlYXR1cmVTdGF0ZTxUPj47XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYWZmQXV0aFNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZkF1dGhUb2tlbj4oKTogRGFmZkF1dGhTZWxlY3RvcnM8VD4gPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IHtcbiAgICAgIC4uLmdldEF1dGhTZWxlY3RvcnM8VD4oKSxcbiAgICAgIC4uLmdldERhZmZBdXRoTG9naW5TZWxlY3RvcnM8VD4oKSxcbiAgICAgIC4uLmdldERhZmZBdXRoUmVnaXN0ZXJTZWxlY3RvcnM8VD4oKSxcbiAgICAgIHNlbGVjdEF1dGhGZWF0dXJlU3RhdGU6IGdldERhZmZBdXRoRmVhdHVyZVN0YXRlU2VsZWN0b3I8VD4oKVxuICAgIH1cbn0pKCk7XG4iXX0=