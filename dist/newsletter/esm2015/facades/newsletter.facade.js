/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDaffNewsletterSuccess, selectDaffNewsletterError, selectDaffNewsletterLoading } from '../selectors/newsletter.selector';
import { DaffNewsletterModule } from '../newsletter.module';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../newsletter.module";
export class DaffNewsletterFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.success$ = this.store.select(selectDaffNewsletterSuccess);
        this.error$ = this.store.select(selectDaffNewsletterError);
        this.loading$ = this.store.select(selectDaffNewsletterLoading);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffNewsletterFacade.decorators = [
    { type: Injectable, args: [{ providedIn: DaffNewsletterModule },] }
];
/** @nocollapse */
DaffNewsletterFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffNewsletterFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffNewsletterFacade_Factory() { return new DaffNewsletterFacade(i0.ɵɵinject(i1.Store)); }, token: DaffNewsletterFacade, providedIn: i2.DaffNewsletterModule });
if (false) {
    /** @type {?} */
    DaffNewsletterFacade.prototype.success$;
    /** @type {?} */
    DaffNewsletterFacade.prototype.error$;
    /** @type {?} */
    DaffNewsletterFacade.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    DaffNewsletterFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmV3c2xldHRlci8iLCJzb3VyY2VzIjpbImZhY2FkZXMvbmV3c2xldHRlci5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQVMsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUk1RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBSy9CLFlBQW9CLEtBQW1CO1FBQW5CLFVBQUssR0FBTCxLQUFLLENBQWM7UUFKdkMsYUFBUSxHQUF5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ2hGLFdBQU0sR0FBdUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMxRSxhQUFRLEdBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFJL0UsQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFYRixVQUFVLFNBQUUsRUFBQyxVQUFVLEVBQUUsb0JBQW9CLEVBQUM7Ozs7WUFOdEMsS0FBSzs7Ozs7SUFRWix3Q0FBZ0Y7O0lBQ2hGLHNDQUEwRTs7SUFDMUUsd0NBQStFOzs7OztJQUVuRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBTdGF0ZSwgc2VsZWN0RGFmZk5ld3NsZXR0ZXJTdWNjZXNzLCBzZWxlY3REYWZmTmV3c2xldHRlckVycm9yLCBzZWxlY3REYWZmTmV3c2xldHRlckxvYWRpbmcgfSBmcm9tICcuLi9zZWxlY3RvcnMvbmV3c2xldHRlci5zZWxlY3Rvcic7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlck1vZHVsZSB9IGZyb20gJy4uL25ld3NsZXR0ZXIubW9kdWxlJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyRmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9uZXdzbGV0dGVyLWZhY2FkZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgge3Byb3ZpZGVkSW46IERhZmZOZXdzbGV0dGVyTW9kdWxlfSApXG5leHBvcnQgY2xhc3MgRGFmZk5ld3NsZXR0ZXJGYWNhZGUgaW1wbGVtZW50cyBEYWZmTmV3c2xldHRlckZhY2FkZUludGVyZmFjZSB7XG4gIHN1Y2Nlc3MkIDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdERhZmZOZXdzbGV0dGVyU3VjY2Vzcyk7XG4gIGVycm9yJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0RGFmZk5ld3NsZXR0ZXJFcnJvcik7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0RGFmZk5ld3NsZXR0ZXJMb2FkaW5nKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZT4pe1xuXG4gIH1cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn0iXX0=