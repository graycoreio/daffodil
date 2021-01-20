/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';
import { DaffCategoryActionTypes, DaffCategoryPageLoad } from '../../actions/category.actions';
import { DaffDefaultCategoryPageSize } from './default-category-page-size.token';
import * as i0 from "@angular/core";
import * as i1 from "./default-category-page-size.token";
import * as i2 from "@ngrx/store";
/**
 * Resolves category data for category pages, and will only resolve the url after a category request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the category id.
 */
var DaffCategoryPageResolver = /** @class */ (function () {
    function DaffCategoryPageResolver(platformId, defaultCategoryPageSize, store, dispatcher) {
        this.platformId = platformId;
        this.defaultCategoryPageSize = defaultCategoryPageSize;
        this.store = store;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    DaffCategoryPageResolver.prototype.resolve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        this.store.dispatch(new DaffCategoryPageLoad({
            id: route.paramMap.get('id'), page_size: this.defaultCategoryPageSize
        }));
        return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadSuccessAction, DaffCategoryActionTypes.CategoryPageLoadFailureAction), mapTo(true), take(1));
    };
    DaffCategoryPageResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCategoryPageResolver.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Number, decorators: [{ type: Inject, args: [DaffDefaultCategoryPageSize,] }] },
        { type: Store },
        { type: ActionsSubject }
    ]; };
    /** @nocollapse */ DaffCategoryPageResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryPageResolver_Factory() { return new DaffCategoryPageResolver(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DaffDefaultCategoryPageSize), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i2.ActionsSubject)); }, token: DaffCategoryPageResolver, providedIn: "root" });
    return DaffCategoryPageResolver;
}());
export { DaffCategoryPageResolver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.defaultCategoryPageSize;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryPageResolver.prototype.dispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9jYXRlZ29yeS1wYWdlL2NhdGVnb3J5LXBhZ2UucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFDckMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUvRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7QUFNakY7SUFJRSxrQ0FDNkIsVUFBa0IsRUFDRix1QkFBK0IsRUFDbEUsS0FBdUMsRUFDdkMsVUFBMEI7UUFIUCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ0YsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFRO1FBQ2xFLFVBQUssR0FBTCxLQUFLLENBQWtDO1FBQ3ZDLGVBQVUsR0FBVixVQUFVLENBQWdCO0lBQ2xDLENBQUM7Ozs7O0lBRUosMENBQU87Ozs7SUFBUCxVQUFRLEtBQTZCO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksb0JBQW9CLENBQUM7WUFDekMsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsdUJBQXVCO1NBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBRUosT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQzFFLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyw2QkFBNkIsRUFBRSx1QkFBdUIsQ0FBQyw2QkFBNkIsQ0FBQyxFQUNwSCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDSCxDQUFDOztnQkFyQkQsVUFBVSxTQUFDO29CQUNYLFVBQVUsRUFBRSxNQUFNO2lCQUNsQjs7Ozs2Q0FHRSxNQUFNLFNBQUMsV0FBVzs2Q0FDbEIsTUFBTSxTQUFDLDJCQUEyQjtnQkFsQlosS0FBSztnQkFBckIsY0FBYzs7O21DQUp2QjtDQXNDQyxBQXRCRCxJQXNCQztTQW5CWSx3QkFBd0I7Ozs7OztJQUVuQyw4Q0FBK0M7Ozs7O0lBQy9DLDJEQUE0RTs7Ozs7SUFDMUUseUNBQStDOzs7OztJQUMvQyw4Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbnNTdWJqZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IG1hcFRvLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcywgRGFmZkNhdGVnb3J5UGFnZUxvYWQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGVnb3J5LmFjdGlvbnMnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2NhdGVnb3J5LXJlZHVjZXJzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEYWZmRGVmYXVsdENhdGVnb3J5UGFnZVNpemUgfSBmcm9tICcuL2RlZmF1bHQtY2F0ZWdvcnktcGFnZS1zaXplLnRva2VuJztcblxuLyoqXG4gKiBSZXNvbHZlcyBjYXRlZ29yeSBkYXRhIGZvciBjYXRlZ29yeSBwYWdlcywgYW5kIHdpbGwgb25seSByZXNvbHZlIHRoZSB1cmwgYWZ0ZXIgYSBjYXRlZ29yeSByZXF1ZXN0IHN1Y2NlZWRzIG9yIGZhaWxzLiBUaGlzIHJlc29sdmVyIGV4cGVjdHMgYSB1cmxcbiAqIG9mIHRoZSBmb3JtIGBzb21lL3VybC97aWR9YCB3aGVyZSBge2lkfWAgaXMgdGhlIGNhdGVnb3J5IGlkLlxuICovXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ2F0ZWdvcnlQYWdlUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPE9ic2VydmFibGU8Ym9vbGVhbj4+IHtcbiAgY29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0QEluamVjdChEYWZmRGVmYXVsdENhdGVnb3J5UGFnZVNpemUpIHByaXZhdGUgZGVmYXVsdENhdGVnb3J5UGFnZVNpemU6IG51bWJlcixcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxEYWZmQ2F0ZWdvcnlSZWR1Y2Vyc1N0YXRlPixcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFjdGlvbnNTdWJqZWN0LFxuXHQpIHt9XG5cdFxuXHRyZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGFmZkNhdGVnb3J5UGFnZUxvYWQoe1xuICAgICAgaWQ6IHJvdXRlLnBhcmFtTWFwLmdldCgnaWQnKSwgcGFnZV9zaXplOiB0aGlzLmRlZmF1bHRDYXRlZ29yeVBhZ2VTaXplXG5cdFx0fSkpO1xuXG5cdFx0cmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgPyBvZih0cnVlKSA6IHRoaXMuZGlzcGF0Y2hlci5waXBlKFxuXHRcdFx0b2ZUeXBlKERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLkNhdGVnb3J5UGFnZUxvYWRTdWNjZXNzQWN0aW9uLCBEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DYXRlZ29yeVBhZ2VMb2FkRmFpbHVyZUFjdGlvbiksXG5cdFx0XHRtYXBUbyh0cnVlKSxcblx0XHRcdHRha2UoMSlcblx0XHQpO1xuXHR9XG59XG4iXX0=