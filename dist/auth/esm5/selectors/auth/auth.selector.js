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
var createAuthSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectAuthState = createSelector(getDaffAuthFeatureStateSelector(), (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.auth; }));
    /** @type {?} */
    var selectAuthLoading = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectAuthErrors = createSelector(selectAuthState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectAuthState: selectAuthState,
        selectAuthLoading: selectAuthLoading,
        selectAuthErrors: selectAuthErrors,
    };
});
var ɵ0 = createAuthSelectors;
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
        return cache = cache || createAuthSelectors();
    });
};
/** @type {?} */
export var getAuthSelectors = ((ɵ1))();
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL2F1dGgvYXV0aC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFPM0UsbUNBSUM7OztJQUhDLHdDQUFnRTs7SUFDaEUsMENBQXFEOztJQUNyRCx5Q0FBcUQ7OztJQUdqRCxtQkFBbUI7Ozs7QUFBRzs7UUFDcEIsZUFBZSxHQUFHLGNBQWMsQ0FDcEMsK0JBQStCLEVBQUs7Ozs7SUFDcEMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsRUFDcEI7O1FBRUssaUJBQWlCLEdBQUcsY0FBYyxDQUN0QyxlQUFlOzs7O0lBQ2YsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxFQUFiLENBQWEsRUFDdkI7O1FBRUssZ0JBQWdCLEdBQUcsY0FBYyxDQUNyQyxlQUFlOzs7O0lBQ2YsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVksRUFDdEI7SUFFRCxPQUFPO1FBQ0wsZUFBZSxpQkFBQTtRQUNmLGlCQUFpQixtQkFBQTtRQUNqQixnQkFBZ0Isa0JBQUE7S0FDakIsQ0FBQTtBQUNILENBQUMsQ0FBQTs7Ozs7QUFFZ0M7O1FBQzNCLEtBQUs7SUFDVDs7OztJQUFPO1FBQ0wsT0FBQSxLQUFLLEdBQUcsS0FBSyxJQUFJLG1CQUFtQixFQUFLO0lBQXpDLENBQXlDLEVBQUE7QUFDN0MsQ0FBQzs7QUFKRCxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcsTUFJOUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBnZXREYWZmQXV0aEZlYXR1cmVTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYXV0aC1mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZBdXRoVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aC10b2tlbic7XG5pbXBvcnQge1xuICBEYWZmQXV0aFJlZHVjZXJTdGF0ZVxufSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wdWJsaWNfYXBpJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhTZWxlY3RvcnMge1xuICBzZWxlY3RBdXRoU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBEYWZmQXV0aFJlZHVjZXJTdGF0ZT47XG4gIHNlbGVjdEF1dGhMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgYm9vbGVhbj47XG4gIHNlbGVjdEF1dGhFcnJvcnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBzdHJpbmdbXT47XG59XG5cbmNvbnN0IGNyZWF0ZUF1dGhTZWxlY3RvcnMgPSA8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+KCkgPT4ge1xuICBjb25zdCBzZWxlY3RBdXRoU3RhdGUgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXREYWZmQXV0aEZlYXR1cmVTdGF0ZVNlbGVjdG9yPFQ+KCksXG4gICAgc3RhdGUgPT4gc3RhdGUuYXV0aFxuICApXG5cbiAgY29uc3Qgc2VsZWN0QXV0aExvYWRpbmcgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RBdXRoU3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUubG9hZGluZ1xuICApO1xuXG4gIGNvbnN0IHNlbGVjdEF1dGhFcnJvcnMgPSBjcmVhdGVTZWxlY3RvcihcbiAgICBzZWxlY3RBdXRoU3RhdGUsXG4gICAgc3RhdGUgPT4gc3RhdGUuZXJyb3JzXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZWxlY3RBdXRoU3RhdGUsXG4gICAgc2VsZWN0QXV0aExvYWRpbmcsXG4gICAgc2VsZWN0QXV0aEVycm9ycyxcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEF1dGhTZWxlY3RvcnMgPSAoKCkgPT4ge1xuICBsZXQgY2FjaGU7XG4gIHJldHVybiA8VCBleHRlbmRzIERhZmZBdXRoVG9rZW4+KCk6IEF1dGhTZWxlY3RvcnMgPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IGNyZWF0ZUF1dGhTZWxlY3RvcnM8VD4oKVxufSkoKTtcbiJdfQ==