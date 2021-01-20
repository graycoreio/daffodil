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
export class DaffCategoryPageEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     * @param {?} store
     */
    constructor(actions$, driver, store) {
        this.actions$ = actions$;
        this.driver = driver;
        this.store = store;
        this.categorySelectors = getDaffCategorySelectors();
        this.loadCategoryPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            daffCategoryValidateFilters(action.request.filter_requests);
            return this.processCategoryGetRequest(action.request);
        })));
        this.changeCategoryPageSize$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryPageSizeAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => this.processCategoryGetRequest(Object.assign({}, categoryRequest, { page_size: action.pageSize })))));
        this.changeCategoryCurrentPage$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryCurrentPageAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => this.processCategoryGetRequest(Object.assign({}, categoryRequest, { current_page: action.currentPage })))));
        this.changeCategoryFilters$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategoryFiltersAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => {
            daffCategoryValidateFilters(action.filters);
            return this.processCategoryGetRequest(Object.assign({}, categoryRequest, { filter_requests: action.filters }));
        })));
        this.toggleCategoryFilter$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ToggleCategoryFilterAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryPageConfigurationState]) => {
            daffCategoryValidateFilters(categoryPageConfigurationState.filter_requests);
            return this.processCategoryGetRequest(Object.assign({}, categoryPageConfigurationState));
        })));
        this.changeCategorySort$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.ChangeCategorySortingOptionAction), withLatestFrom(this.store.pipe(select(this.categorySelectors.selectCategoryPageConfigurationState))), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([action, categoryRequest]) => this.processCategoryGetRequest(Object.assign({}, categoryRequest, { applied_sort_option: action.sort.option, applied_sort_direction: action.sort.direction })))));
    }
    /**
     * @private
     * @param {?} payload
     * @return {?}
     */
    processCategoryGetRequest(payload) {
        return this.driver.get(payload).pipe(switchMap((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => [
            new DaffProductGridLoadSuccess(resp.products),
            new DaffCategoryPageLoadSuccess(resp)
        ])), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCategoryPageLoadFailure('Failed to load the category')))));
    }
}
DaffCategoryPageEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCategoryPageEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCategoryDriver,] }] },
    { type: Store }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiZWZmZWN0cy9jYXRlZ29yeS1wYWdlLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLDBCQUEwQixFQUFlLE1BQU0sbUJBQW1CLENBQUM7QUFFNUUsT0FBTyxFQUNMLHVCQUF1QixFQU12QiwyQkFBMkIsRUFFM0IsMkJBQTJCLEVBQzVCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHdkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFJMUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHcEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBT2xDLFlBQ1UsUUFBaUIsRUFDVyxNQUFnRCxFQUM1RSxLQUFpQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ1csV0FBTSxHQUFOLE1BQU0sQ0FBMEM7UUFDNUUsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUdwQixzQkFBaUIsR0FBRyx3QkFBd0IsRUFBYyxDQUFDO1FBR2xFLHNCQUFpQixHQUFxQixJQUFJLENB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T0E7O0lBRUEsMERBYUM7O0lBRUQsNkRBYUM7O0lBRUQseURBZ0JDOztJQUVELHdEQWVDOztJQUVELHNEQWNBOzs7OztJQS9GRSwyQ0FBeUI7Ozs7O0lBQ3pCLHlDQUFvRjs7Ozs7SUFDcEYsd0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCBjYXRjaEVycm9yLCB3aXRoTGF0ZXN0RnJvbSwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0R3JpZExvYWRTdWNjZXNzLCBEYWZmUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHtcbiAgRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMsXG4gIERhZmZDaGFuZ2VDYXRlZ29yeVBhZ2VTaXplLFxuICBEYWZmQ2hhbmdlQ2F0ZWdvcnlDdXJyZW50UGFnZSxcblx0RGFmZkNoYW5nZUNhdGVnb3J5RmlsdGVycyxcblx0RGFmZkNoYW5nZUNhdGVnb3J5U29ydGluZ09wdGlvbixcblx0RGFmZlRvZ2dsZUNhdGVnb3J5RmlsdGVyLFxuICBEYWZmQ2F0ZWdvcnlQYWdlTG9hZFN1Y2Nlc3MsXG4gIERhZmZDYXRlZ29yeVBhZ2VMb2FkLFxuICBEYWZmQ2F0ZWdvcnlQYWdlTG9hZEZhaWx1cmVcbn0gZnJvbSAnLi4vYWN0aW9ucy9jYXRlZ29yeS5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeURyaXZlciB9IGZyb20gJy4uL2RyaXZlcnMvaW5qZWN0aW9uLXRva2Vucy9jYXRlZ29yeS1kcml2ZXIudG9rZW4nO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5U2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2RyaXZlcnMvaW50ZXJmYWNlcy9jYXRlZ29yeS1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9nZXQtY2F0ZWdvcnktcmVzcG9uc2UnO1xuaW1wb3J0IHsgZ2V0RGFmZkNhdGVnb3J5U2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzL2NhdGVnb3J5LnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LXBhZ2UtY29uZmlndXJhdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmR2VuZXJpY0NhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL2dlbmVyaWMtY2F0ZWdvcnknO1xuaW1wb3J0IHsgZGFmZkNhdGVnb3J5VmFsaWRhdGVGaWx0ZXJzIH0gZnJvbSAnLi4vaGVscGVycy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeVBhZ2VFZmZlY3RzPFxuXHRUIGV4dGVuZHMgRGFmZkNhdGVnb3J5UmVxdWVzdCxcblx0ViBleHRlbmRzIERhZmZHZW5lcmljQ2F0ZWdvcnk8Vj4sXG5cdFUgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlPFQ+LFxuXHRXIGV4dGVuZHMgRGFmZlByb2R1Y3Rcbj4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgQEluamVjdChEYWZmQ2F0ZWdvcnlEcml2ZXIpIHByaXZhdGUgZHJpdmVyOiBEYWZmQ2F0ZWdvcnlTZXJ2aWNlSW50ZXJmYWNlPFQsIFYsIFUsIFc+LFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGFueT5cblx0KXt9XG5cblx0cHJpdmF0ZSBjYXRlZ29yeVNlbGVjdG9ycyA9IGdldERhZmZDYXRlZ29yeVNlbGVjdG9yczxULCBWLCBVLCBXPigpO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ2F0ZWdvcnlQYWdlJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlQYWdlTG9hZEFjdGlvbiksXG4gICAgc3dpdGNoTWFwKChhY3Rpb246IERhZmZDYXRlZ29yeVBhZ2VMb2FkPFQ+KSA9PiB7XG5cdFx0XHRkYWZmQ2F0ZWdvcnlWYWxpZGF0ZUZpbHRlcnMoYWN0aW9uLnJlcXVlc3QuZmlsdGVyX3JlcXVlc3RzKTtcblx0XHRcdHJldHVybiB0aGlzLnByb2Nlc3NDYXRlZ29yeUdldFJlcXVlc3QoYWN0aW9uLnJlcXVlc3QpXG5cdFx0fSlcblx0KVxuXG4gIEBFZmZlY3QoKVxuICBjaGFuZ2VDYXRlZ29yeVBhZ2VTaXplJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcblx0XHRvZlR5cGUoRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2hhbmdlQ2F0ZWdvcnlQYWdlU2l6ZUFjdGlvbiksXG4gICAgd2l0aExhdGVzdEZyb20oXG5cdFx0XHR0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlKSlcblx0XHQpLFxuICAgIHN3aXRjaE1hcCgoXG5cdFx0XHRbYWN0aW9uLCBjYXRlZ29yeVJlcXVlc3RdOlxuXHRcdFx0W0RhZmZDaGFuZ2VDYXRlZ29yeVBhZ2VTaXplLCBUXVxuXHRcdCkgPT4gdGhpcy5wcm9jZXNzQ2F0ZWdvcnlHZXRSZXF1ZXN0KHtcblx0XHRcdC4uLmNhdGVnb3J5UmVxdWVzdCxcblx0XHRcdHBhZ2Vfc2l6ZTogYWN0aW9uLnBhZ2VTaXplXG5cdFx0fSkpXG4gIClcblxuICBARWZmZWN0KClcbiAgY2hhbmdlQ2F0ZWdvcnlDdXJyZW50UGFnZSQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNoYW5nZUNhdGVnb3J5Q3VycmVudFBhZ2VBY3Rpb24pLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuXHRcdFx0dGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSkpXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAoKFxuXHRcdFx0W2FjdGlvbiwgY2F0ZWdvcnlSZXF1ZXN0XTpcblx0XHRcdFtEYWZmQ2hhbmdlQ2F0ZWdvcnlDdXJyZW50UGFnZSwgVF1cblx0XHQpID0+IHRoaXMucHJvY2Vzc0NhdGVnb3J5R2V0UmVxdWVzdCh7XG5cdFx0XHQuLi5jYXRlZ29yeVJlcXVlc3QsXG5cdFx0XHRjdXJyZW50X3BhZ2U6IGFjdGlvbi5jdXJyZW50UGFnZVxuXHRcdH0pKVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIGNoYW5nZUNhdGVnb3J5RmlsdGVycyQgOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNoYW5nZUNhdGVnb3J5RmlsdGVyc0FjdGlvbiksXG4gICAgd2l0aExhdGVzdEZyb20oXG5cdFx0XHR0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuY2F0ZWdvcnlTZWxlY3RvcnMuc2VsZWN0Q2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlKSlcbiAgICApLFxuICAgIHN3aXRjaE1hcCgoXG5cdFx0XHRbYWN0aW9uLCBjYXRlZ29yeVJlcXVlc3RdOlxuXHRcdFx0W0RhZmZDaGFuZ2VDYXRlZ29yeUZpbHRlcnMsIFRdXG5cdFx0KSA9PiB7XG5cdFx0XHRkYWZmQ2F0ZWdvcnlWYWxpZGF0ZUZpbHRlcnMoYWN0aW9uLmZpbHRlcnMpO1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvY2Vzc0NhdGVnb3J5R2V0UmVxdWVzdCh7XG5cdFx0XHRcdC4uLmNhdGVnb3J5UmVxdWVzdCxcblx0XHRcdFx0ZmlsdGVyX3JlcXVlc3RzOiBhY3Rpb24uZmlsdGVyc1xuXHRcdFx0fSlcblx0XHR9KVxuICApXG5cbiAgQEVmZmVjdCgpXG4gIHRvZ2dsZUNhdGVnb3J5RmlsdGVyJCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXJBY3Rpb24pLFxuICAgIHdpdGhMYXRlc3RGcm9tKFxuXHRcdFx0dGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLmNhdGVnb3J5U2VsZWN0b3JzLnNlbGVjdENhdGVnb3J5UGFnZUNvbmZpZ3VyYXRpb25TdGF0ZSkpXG4gICAgKSxcbiAgICBzd2l0Y2hNYXAoKFxuXHRcdFx0W2FjdGlvbiwgY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlXTpcblx0XHRcdFtEYWZmVG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIsIFVdXG5cdFx0KSA9PiB7XG5cdFx0XHRkYWZmQ2F0ZWdvcnlWYWxpZGF0ZUZpbHRlcnMoY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlLmZpbHRlcl9yZXF1ZXN0cyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9jZXNzQ2F0ZWdvcnlHZXRSZXF1ZXN0KHtcblx0XHRcdFx0Li4uY2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlXG5cdFx0XHR9KVxuXHRcdH0pXG4gIClcblxuICBARWZmZWN0KClcbiAgY2hhbmdlQ2F0ZWdvcnlTb3J0JCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2hhbmdlQ2F0ZWdvcnlTb3J0aW5nT3B0aW9uQWN0aW9uKSxcbiAgICB3aXRoTGF0ZXN0RnJvbShcblx0XHRcdHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5jYXRlZ29yeVNlbGVjdG9ycy5zZWxlY3RDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGUpKVxuICAgICksXG4gICAgc3dpdGNoTWFwKChcblx0XHRcdFthY3Rpb24sIGNhdGVnb3J5UmVxdWVzdF06XG5cdFx0XHRbRGFmZkNoYW5nZUNhdGVnb3J5U29ydGluZ09wdGlvbiwgVF1cblx0XHQpID0+IHRoaXMucHJvY2Vzc0NhdGVnb3J5R2V0UmVxdWVzdCh7XG5cdFx0XHQuLi5jYXRlZ29yeVJlcXVlc3QsXG5cdFx0XHRhcHBsaWVkX3NvcnRfb3B0aW9uOiBhY3Rpb24uc29ydC5vcHRpb24sXG5cdFx0XHRhcHBsaWVkX3NvcnRfZGlyZWN0aW9uOiBhY3Rpb24uc29ydC5kaXJlY3Rpb25cblx0XHR9KSlcblx0KVxuXG4gIHByaXZhdGUgcHJvY2Vzc0NhdGVnb3J5R2V0UmVxdWVzdChwYXlsb2FkOiBUKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJpdmVyLmdldChwYXlsb2FkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChyZXNwOiBEYWZmR2V0Q2F0ZWdvcnlSZXNwb25zZTxULCBWLCBVLCBXPikgPT4gW1xuICAgICAgICBuZXcgRGFmZlByb2R1Y3RHcmlkTG9hZFN1Y2Nlc3MocmVzcC5wcm9kdWN0cyksXG4gICAgICAgIG5ldyBEYWZmQ2F0ZWdvcnlQYWdlTG9hZFN1Y2Nlc3MocmVzcClcbiAgICAgIF0pLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgRGFmZkNhdGVnb3J5UGFnZUxvYWRGYWlsdXJlKCdGYWlsZWQgdG8gbG9hZCB0aGUgY2F0ZWdvcnknKSkpXG4gICAgKVxuXHR9XG59XG4iXX0=