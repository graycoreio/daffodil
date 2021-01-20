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
import { DaffProductActionTypes, DaffProductLoad } from '../../actions/product.actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
/**
 * Resolves product data for product pages, and will only resolve the url after a product request succeeds or fails. This resolver expects a url
 * of the form `some/url/{id}` where `{id}` is the product id.
 */
var DaffProductPageResolver = /** @class */ (function () {
    function DaffProductPageResolver(platformId, store, dispatcher) {
        this.platformId = platformId;
        this.store = store;
        this.dispatcher = dispatcher;
    }
    /**
     * @param {?} route
     * @return {?}
     */
    DaffProductPageResolver.prototype.resolve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) {
        this.store.dispatch(new DaffProductLoad(route.paramMap.get('id')));
        return isPlatformBrowser(this.platformId) ? of(true) : this.dispatcher.pipe(ofType(DaffProductActionTypes.ProductLoadSuccessAction, DaffProductActionTypes.ProductLoadFailureAction), mapTo(true), take(1));
    };
    DaffProductPageResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffProductPageResolver.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Store },
        { type: ActionsSubject }
    ]; };
    /** @nocollapse */ DaffProductPageResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffProductPageResolver_Factory() { return new DaffProductPageResolver(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i1.ActionsSubject)); }, token: DaffProductPageResolver, providedIn: "root" });
    return DaffProductPageResolver;
}());
export { DaffProductPageResolver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffProductPageResolver.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    DaffProductPageResolver.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DaffProductPageResolver.prototype.dispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJyZXNvbHZlcnMvcHJvZHVjdC1wYWdlL3Byb2R1Y3QtcGFnZS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRS9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUNyQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQU94RjtJQUlFLGlDQUM2QixVQUFrQixFQUN2QyxLQUFzQyxFQUNwQyxVQUEwQjtRQUZQLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsVUFBSyxHQUFMLEtBQUssQ0FBaUM7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7SUFDbEMsQ0FBQzs7Ozs7SUFFSix5Q0FBTzs7OztJQUFQLFVBQVEsS0FBNkI7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5FLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUMxRSxNQUFNLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsc0JBQXNCLENBQUMsd0JBQXdCLENBQUMsRUFDeEcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBbEJELFVBQVUsU0FBQztvQkFDWCxVQUFVLEVBQUUsTUFBTTtpQkFDbEI7Ozs7NkNBR0UsTUFBTSxTQUFDLFdBQVc7Z0JBaEJJLEtBQUs7Z0JBQXJCLGNBQWM7OztrQ0FKdkI7Q0FrQ0MsQUFuQkQsSUFtQkM7U0FoQlksdUJBQXVCOzs7Ozs7SUFFbEMsNkNBQStDOzs7OztJQUMvQyx3Q0FBOEM7Ozs7O0lBQzVDLDZDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUmVzb2x2ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgbWFwVG8sIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0QWN0aW9uVHlwZXMsIERhZmZQcm9kdWN0TG9hZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvcHJvZHVjdC5hY3Rpb25zJztcbmltcG9ydCB7IERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG4vKipcbiAqIFJlc29sdmVzIHByb2R1Y3QgZGF0YSBmb3IgcHJvZHVjdCBwYWdlcywgYW5kIHdpbGwgb25seSByZXNvbHZlIHRoZSB1cmwgYWZ0ZXIgYSBwcm9kdWN0IHJlcXVlc3Qgc3VjY2VlZHMgb3IgZmFpbHMuIFRoaXMgcmVzb2x2ZXIgZXhwZWN0cyBhIHVybFxuICogb2YgdGhlIGZvcm0gYHNvbWUvdXJsL3tpZH1gIHdoZXJlIGB7aWR9YCBpcyB0aGUgcHJvZHVjdCBpZC5cbiAqL1xuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RQYWdlUmVzb2x2ZXIgaW1wbGVtZW50cyBSZXNvbHZlPE9ic2VydmFibGU8Ym9vbGVhbj4+IHtcbiAgY29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlPixcbiAgICBwcml2YXRlIGRpc3BhdGNoZXI6IEFjdGlvbnNTdWJqZWN0LFxuXHQpIHt9XG5cdFxuXHRyZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0dGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgRGFmZlByb2R1Y3RMb2FkKHJvdXRlLnBhcmFtTWFwLmdldCgnaWQnKSkpO1xuXG5cdFx0cmV0dXJuIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkgPyBvZih0cnVlKSA6IHRoaXMuZGlzcGF0Y2hlci5waXBlKFxuXHRcdFx0b2ZUeXBlKERhZmZQcm9kdWN0QWN0aW9uVHlwZXMuUHJvZHVjdExvYWRTdWNjZXNzQWN0aW9uLCBEYWZmUHJvZHVjdEFjdGlvblR5cGVzLlByb2R1Y3RMb2FkRmFpbHVyZUFjdGlvbiksXG5cdFx0XHRtYXBUbyh0cnVlKSxcblx0XHRcdHRha2UoMSlcblx0XHQpO1xuXHR9XG59XG4iXX0=