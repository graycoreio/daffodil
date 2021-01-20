/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DaffProductGridLoadSuccess } from '@daffodil/product';
import { DaffCategoryActionTypes, DaffCategoryPageLoadSuccess, DaffCategoryPageLoadFailure } from '../actions/category.actions';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { getDaffCategorySelectors } from '../selectors/category.selector';
import { daffCategoryValidateFilters } from '../helpers/public_api';
/**
 * @template T, V, U, W
 */
var DaffCategoryPageEffects = /** @class */ (function () {
    function DaffCategoryPageEffects(actions$, driver, store) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        this.store = store;
        this.categorySelectors = getDaffCategorySelectors();
        this.loadCategoryPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            daffCategoryValidateFilters(action.request.filter_requests);
            return _this.processCategoryGetRequest(action.request);
        })));
        this.changeCategoryPageSize$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), action = _b[0], categoryRequest = _b[1];
            return _this.processCategoryGetRequest(tslib_1.__assign({}, categoryRequest, { page_size: action.pageSize }));
        })));
        this.changeCategoryCurrentPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), action = _b[0], categoryRequest = _b[1];
            return _this.processCategoryGetRequest(tslib_1.__assign({}, categoryRequest, { current_page: action.currentPage }));
        })));
        this.changeCategoryFilters$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), action = _b[0], categoryRequest = _b[1];
            daffCategoryValidateFilters(action.filters);
            return _this.processCategoryGetRequest(tslib_1.__assign({}, categoryRequest, { filter_requests: action.filters }));
        })));
        this.toggleCategoryFilter$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), action = _b[0], categoryPageConfigurationState = _b[1];
            daffCategoryValidateFilters(categoryPageConfigurationState.filter_requests);
            return _this.processCategoryGetRequest(tslib_1.__assign({}, categoryPageConfigurationState));
        })));
        this.changeCategorySort$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), action = _b[0], categoryRequest = _b[1];
            return _this.processCategoryGetRequest(tslib_1.__assign({}, categoryRequest, { applied_sort_option: action.sort.option, applied_sort_direction: action.sort.direction }));
        })));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    DaffCategoryPageEffects.prototype.processCategoryGetRequest = /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.driver.get(payload).pipe(switchMap((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return [
            new DaffProductGridLoadSuccess(resp.products),
            new DaffCategoryPageLoadSuccess(resp)
        ]; })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCategoryPageLoadFailure('Failed to load the category')); })));
    };
    DaffCategoryPageEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCategoryPageEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCategoryDriver,] }] },
        { type: Store }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "loadCategoryPage$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategoryPageSize$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategoryCurrentPage$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategoryFilters$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "toggleCategoryFilter$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], DaffCategoryPageEffects.prototype, "changeCategorySort$", void 0);
    return DaffCategoryPageEffects;
}());
export { DaffCategoryPageEffects };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.categorySelectors;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.loadCategoryPage$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategoryPageSize$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategoryCurrentPage$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategoryFilters$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.toggleCategoryFilter$;
    /** @type {?} */
    DaffCategoryPageEffects.prototype.changeCategorySort$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageEffects.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiZWZmZWN0cy9jYXRlZ29yeS1wYWdlLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLDBCQUEwQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFFNUUsT0FBTyxFQUNMLHVCQUF1QixFQU12QiwyQkFBMkIsRUFFM0IsMkJBQTJCLEVBQzVCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFFcEU7SUFRRSxpQ0FDVSxRQUFpQixFQUNXLE1BQWdELEVBQzVFLEtBQWlCO1FBSDNCLGlCQUlFO1FBSFEsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNXLFdBQU0sR0FBTixNQUFNLENBQTBDO1FBQzVFLFVBQUssR0FBTCxLQUFLLENBQVk7UUFHcEIsc0JBQWlCLEdBQUcsd0JBQXdCLEVBQWMsQ0FBQztRQUdsRSxzQkFBaUIsR0FBcUIsSUFBSSxDQUFDLFFBQVEsQ0FB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LEVBQUU7MENBQ2UsVUFBVTswRUFjakM7SUFHRDtRQURDLE1BQU0sRUFBRTswQ0FDYSxVQUFVO3dFQWFoQztJQVdGLDhCQUFDO0NBQUEsQUFuSEQsSUFtSEM7U0FsSFksdUJBQXVCOzs7Ozs7SUFhbkMsb0RBQW1FOztJQUVsRSxvREFPQTs7SUFFQSwwREFhQzs7SUFFRCw2REFhQzs7SUFFRCx5REFnQkM7O0lBRUQsd0RBZUM7O0lBRUQsc0RBY0E7Ozs7O0lBL0ZFLDJDQUF5Qjs7Ozs7SUFDekIseUNBQW9GOzs7OztJQUNwRix3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IsIHdpdGhMYXRlc3RGcm9tLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RHcmlkTG9hZFN1Y2Nlc3MsIERhZmZQcm9kdWN0IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5pbXBvcnQge1xuICBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcyxcbiAgRGFmZkNoYW5nZUNhdGVnb3J5UGFnZVNpemUsXG4gIERhZmZDaGFuZ2VDYXRlZ29yeUN1cnJlbnRQYWdlLFxuXHREYWZmQ2hhbmdlQ2F0ZWdvcnlGaWx0ZXJzLFxuXHREYWZmQ2hhbmdlQ2F0ZWdvcnlTb3J0aW5nT3B0aW9uLFxuXHREYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIsXG4gIERhZmZDYXRlZ29yeVBhZ2VMb2FkU3VjY2VzcyxcbiAgRGFmZkNhdGVnb3J5UGFnZUxvYWQsXG4gIERhZmZDYXRlZ29yeVBhZ2VMb2FkRmFpbHVyZVxufSBmcm9tICcuLi9hY3Rpb25zL2NhdGVnb3J5LmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RHJpdmVyIH0gZnJvbSAnLi4vZHJpdmVycy9pbmplY3Rpb24tdG9rZW5zL2NhdGVnb3J5LWRyaXZlci50b2tlbic7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vZHJpdmVycy9pbnRlcmZhY2VzL2NhdGVnb3J5LXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWxzL2dldC1jYXRlZ29yeS1yZXNwb25zZSc7XG5pbXBvcnQgeyBnZXREYWZmQ2F0ZWdvcnlTZWxlY3RvcnMgfSBmcm9tICcuLi9zZWxlY3RvcnMvY2F0ZWdvcnkuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UmVxdWVzdCB9IGZyb20gJy4uL21vZGVscy9yZXF1ZXN0cy9jYXRlZ29yeS1yZXF1ZXN0JztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvY2F0ZWdvcnktcGFnZS1jb25maWd1cmF0aW9uLXN0YXRlJztcbmltcG9ydCB7IERhZmZHZW5lcmljQ2F0ZWdvcnkgfSBmcm9tICcuLi9tb2RlbHMvZ2VuZXJpYy1jYXRlZ29yeSc7XG5pbXBvcnQgeyBkYWZmQ2F0ZWdvcnlWYWxpZGF0ZUZpbHRlcnMgfSBmcm9tICcuLi9oZWxwZXJzL3B1YmxpY19hcGknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5UGFnZUVmZmVjdHM8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LFxuXHRWIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxWPixcblx0VSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4sXG5cdFcgZXh0ZW5kcyBEYWZmUHJvZHVjdFxuPiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZDYXRlZ29yeURyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXRlZ29yeVNlcnZpY2VJbnRlcmZhY2U8VCwgViwgVSwgVz4sXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8YW55PlxuXHQpe31cblxuXHRwcml2YXRlIGNhdGVnb3J5U2VsZWN0b3JzID0gZ2V0RGFmZkNhdGVnb3J5U2VsZWN0b3JzPFQsIFYsIFUsIFc+KCk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDYXRlZ29yeVBhZ2UkIDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DYXRlZ29yeVBhZ2VMb2FkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhdGVnb3J5UGFnZUxvYWQ8VD4pID0+IHtcblx0XHRcdGRhZmZDYXRlZ29yeVZhbGlkYXRlRmlsdGVycyhhY3Rpb24ucmVxdWVzdC5maWx0ZXJfcmVxdWVzdHMpO1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvY2Vzc0NhdGVnb3J5R2V0UmVxdWVzdChhY3Rpb24ucmVxdWVzdClcblx0XHR9KVxuXHQpXG5cbiAgQEVmZmVjdCgpXG4gIGNoYW5nZUNhdGVnb3J5UGFnZVNpemUkIDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuXHRcdG9mVHlwZShEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DaGFuZ2VDYXRlZ29yeVBhZ2VTaXplQWN0aW9uKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcblx0XHRcdHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUpKVxuXHRcdCksXG4gICAgc3dpdGNoTWFwKChcblx0XHRcdFthY3Rpb24sIGNhdGVnb3J5UmVxdWVzdF06XG5cdFx0XHRbRGFmZkNoYW5nZUNhdGVnb3J5UGFnZVNpemUsIFRdXG5cdFx0KSA9PiB0aGlzLnByb2Nlc3NDYXRlZ29yeUdldFJlcXVlc3Qoe1xuXHRcdFx0Li4uY2F0ZWdvcnlSZXF1ZXN0LFxuXHRcdFx0cGFnZV9zaXplOiBhY3Rpb24ucGFnZVNpemVcblx0XHR9KSlcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBjaGFuZ2VDYXRlZ29yeUN1cnJlbnRQYWdlJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2hhbmdlQ2F0ZWdvcnlDdXJyZW50UGFnZUFjdGlvbiksXG4gICAgd2l0aExhdGVzdEZyb20oXG5cdFx0XHR0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlKSlcbiAgICApLFxuICAgIHN3aXRjaE1hcCgoXG5cdFx0XHRbYWN0aW9uLCBjYXRlZ29yeVJlcXVlc3RdOlxuXHRcdFx0W0RhZmZDaGFuZ2VDYXRlZ29yeUN1cnJlbnRQYWdlLCBUXVxuXHRcdCkgPT4gdGhpcy5wcm9jZXNzQ2F0ZWdvcnlHZXRSZXF1ZXN0KHtcblx0XHRcdC4uLmNhdGVnb3J5UmVxdWVzdCxcblx0XHRcdGN1cnJlbnRfcGFnZTogYWN0aW9uLmN1cnJlbnRQYWdlXG5cdFx0fSkpXG4gIClcblxuICBARWZmZWN0KClcbiAgY2hhbmdlQ2F0ZWdvcnlGaWx0ZXJzJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2hhbmdlQ2F0ZWdvcnlGaWx0ZXJzQWN0aW9uKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcblx0XHRcdHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUpKVxuICAgICksXG4gICAgc3dpdGNoTWFwKChcblx0XHRcdFthY3Rpb24sIGNhdGVnb3J5UmVxdWVzdF06XG5cdFx0XHRbRGFmZkNoYW5nZUNhdGVnb3J5RmlsdGVycywgVF1cblx0XHQpID0+IHtcblx0XHRcdGRhZmZDYXRlZ29yeVZhbGlkYXRlRmlsdGVycyhhY3Rpb24uZmlsdGVycyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9jZXNzQ2F0ZWdvcnlHZXRSZXF1ZXN0KHtcblx0XHRcdFx0Li4uY2F0ZWdvcnlSZXF1ZXN0LFxuXHRcdFx0XHRmaWx0ZXJfcmVxdWVzdHM6IGFjdGlvbi5maWx0ZXJzXG5cdFx0XHR9KVxuXHRcdH0pXG4gIClcblxuICBARWZmZWN0KClcbiAgdG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIkIDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5Ub2dnbGVDYXRlZ29yeUZpbHRlckFjdGlvbiksXG4gICAgd2l0aExhdGVzdEZyb20oXG5cdFx0XHR0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlKSlcbiAgICApLFxuICAgIHN3aXRjaE1hcCgoXG5cdFx0XHRbYWN0aW9uLCBjYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGVdOlxuXHRcdFx0W0RhZmZUb2dnbGVDYXRlZ29yeUZpbHRlciwgVV1cblx0XHQpID0+IHtcblx0XHRcdGRhZmZDYXRlZ29yeVZhbGlkYXRlRmlsdGVycyhjYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUuZmlsdGVyX3JlcXVlc3RzKTtcblx0XHRcdHJldHVybiB0aGlzLnByb2Nlc3NDYXRlZ29yeUdldFJlcXVlc3Qoe1xuXHRcdFx0XHQuLi5jYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGVcblx0XHRcdH0pXG5cdFx0fSlcbiAgKVxuXG4gIEBFZmZlY3QoKVxuICBjaGFuZ2VDYXRlZ29yeVNvcnQkIDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DaGFuZ2VDYXRlZ29yeVNvcnRpbmdPcHRpb25BY3Rpb24pLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuXHRcdFx0dGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSkpXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAoKFxuXHRcdFx0W2FjdGlvbiwgY2F0ZWdvcnlSZXF1ZXN0XTpcblx0XHRcdFtEYWZmQ2hhbmdlQ2F0ZWdvcnlTb3J0aW5nT3B0aW9uLCBUXVxuXHRcdCkgPT4gdGhpcy5wcm9jZXNzQ2F0ZWdvcnlHZXRSZXF1ZXN0KHtcblx0XHRcdC4uLmNhdGVnb3J5UmVxdWVzdCxcblx0XHRcdGFwcGxpZWRfc29ydF9vcHRpb246IGFjdGlvbi5zb3J0Lm9wdGlvbixcblx0XHRcdGFwcGxpZWRfc29ydF9kaXJlY3Rpb246IGFjdGlvbi5zb3J0LmRpcmVjdGlvblxuXHRcdH0pKVxuXHQpXG5cbiAgcHJpdmF0ZSBwcm9jZXNzQ2F0ZWdvcnlHZXRSZXF1ZXN0KHBheWxvYWQ6IFQpIHtcbiAgICByZXR1cm4gdGhpcy5kcml2ZXIuZ2V0KHBheWxvYWQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHJlc3A6IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlPFQsIFYsIFUsIFc+KSA9PiBbXG4gICAgICAgIG5ldyBEYWZmUHJvZHVjdEdyaWRMb2FkU3VjY2VzcyhyZXNwLnByb2R1Y3RzKSxcbiAgICAgICAgbmV3IERhZmZDYXRlZ29yeVBhZ2VMb2FkU3VjY2VzcyhyZXNwKVxuICAgICAgXSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2F0ZWdvcnlQYWdlTG9hZEZhaWx1cmUoJ0ZhaWxlZCB0byBsb2FkIHRoZSBjYXRlZ29yeScpKSlcbiAgICApXG5cdH1cbn1cbiJdfQ==