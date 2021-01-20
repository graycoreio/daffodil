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
export class DaffCategoryPageResolver {
    /**
     * @param {?} platformId
     * @param {?} defaultCategoryPageSize
     * @param {?} store
     * @param {?} dispatcher
     */
    constructor(platformId, defaultCategoryPageSize, store, dispatcher) {
        this.platformId = platformId;
        this.defaultCategoryPageSize = defaultCategoryPageSize;
        this.store = store;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    resolve(route) {
        this.store.dispatch(new DaffCategoryPageLoad({
            id: route.paramMap.get('id'), page_size: this.defaultCategoryPageSize
        }));
        return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(ofType(DaffCategoryActionTypes.CategoryPageLoadSuccessAction, DaffCategoryActionTypes.CategoryPageLoadFailureAction), mapTo(true), take(1));
    }
}
DaffCategoryPageResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCategoryPageResolver.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: Number, decorators: [{ type: Inject, args: [DaffDefaultCategoryPageSize,] }] },
    { type: Store },
    { type: ActionsSubject }
];
/** @nocollapse */ DaffCategoryPageResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCategoryPageResolver_Factory() { return new DaffCategoryPageResolver(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DaffDefaultCategoryPageSize), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i2.ActionsSubject)); }, token: DaffCategoryPageResolver, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktcGFnZS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbInJlc29sdmVycy9jYXRlZ29yeS1wYWdlL2NhdGVnb3J5LXBhZ2UucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUUvRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUE7QUFDckMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUvRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7QUFTakYsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQUNuQyxZQUM2QixVQUFrQixFQUNGLHVCQUErQixFQUNsRSxLQUF1QyxFQUN2QyxVQUEwQjtRQUhQLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDRiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQVE7UUFDbEUsVUFBSyxHQUFMLEtBQUssQ0FBa0M7UUFDdkMsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7SUFDbEMsQ0FBQzs7Ozs7SUFFSixPQUFPLENBQUMsS0FBNkI7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBb0IsQ0FBQztZQUN6QyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyx1QkFBdUI7U0FDeEUsQ0FBQyxDQUFDLENBQUM7UUFFSixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDMUUsTUFBTSxDQUFDLHVCQUF1QixDQUFDLDZCQUE2QixFQUFFLHVCQUF1QixDQUFDLDZCQUE2QixDQUFDLEVBQ3BILEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNILENBQUM7OztZQXJCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7eUNBR0UsTUFBTSxTQUFDLFdBQVc7eUNBQ2xCLE1BQU0sU0FBQywyQkFBMkI7WUFsQlosS0FBSztZQUFyQixjQUFjOzs7Ozs7OztJQWlCckIsOENBQStDOzs7OztJQUMvQywyREFBNEU7Ozs7O0lBQzFFLHlDQUErQzs7Ozs7SUFDL0MsOENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb25zU3ViamVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBtYXBUbywgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMsIERhZmZDYXRlZ29yeVBhZ2VMb2FkIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jYXRlZ29yeS5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlZHVjZXJzU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9jYXRlZ29yeS1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkRlZmF1bHRDYXRlZ29yeVBhZ2VTaXplIH0gZnJvbSAnLi9kZWZhdWx0LWNhdGVnb3J5LXBhZ2Utc2l6ZS50b2tlbic7XG5cbi8qKlxuICogUmVzb2x2ZXMgY2F0ZWdvcnkgZGF0YSBmb3IgY2F0ZWdvcnkgcGFnZXMsIGFuZCB3aWxsIG9ubHkgcmVzb2x2ZSB0aGUgdXJsIGFmdGVyIGEgY2F0ZWdvcnkgcmVxdWVzdCBzdWNjZWVkcyBvciBmYWlscy4gVGhpcyByZXNvbHZlciBleHBlY3RzIGEgdXJsXG4gKiBvZiB0aGUgZm9ybSBgc29tZS91cmwve2lkfWAgd2hlcmUgYHtpZH1gIGlzIHRoZSBjYXRlZ29yeSBpZC5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5UGFnZVJlc29sdmVyIGltcGxlbWVudHMgUmVzb2x2ZTxPYnNlcnZhYmxlPGJvb2xlYW4+PiB7XG4gIGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdEBJbmplY3QoRGFmZkRlZmF1bHRDYXRlZ29yeVBhZ2VTaXplKSBwcml2YXRlIGRlZmF1bHRDYXRlZ29yeVBhZ2VTaXplOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZkNhdGVnb3J5UmVkdWNlcnNTdGF0ZT4sXG4gICAgcHJpdmF0ZSBkaXNwYXRjaGVyOiBBY3Rpb25zU3ViamVjdCxcblx0KSB7fVxuXHRcblx0cmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IERhZmZDYXRlZ29yeVBhZ2VMb2FkKHtcbiAgICAgIGlkOiByb3V0ZS5wYXJhbU1hcC5nZXQoJ2lkJyksIHBhZ2Vfc2l6ZTogdGhpcy5kZWZhdWx0Q2F0ZWdvcnlQYWdlU2l6ZVxuXHRcdH0pKTtcblxuXHRcdHJldHVybiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpID8gb2YodHJ1ZSkgOiB0aGlzLmRpc3BhdGNoZXIucGlwZShcblx0XHRcdG9mVHlwZShEYWZmQ2F0ZWdvcnlBY3Rpb25UeXBlcy5DYXRlZ29yeVBhZ2VMb2FkU3VjY2Vzc0FjdGlvbiwgRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlQYWdlTG9hZEZhaWx1cmVBY3Rpb24pLFxuXHRcdFx0bWFwVG8odHJ1ZSksXG5cdFx0XHR0YWtlKDEpXG5cdFx0KTtcblx0fVxufVxuIl19