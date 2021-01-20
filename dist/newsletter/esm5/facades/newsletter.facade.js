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
var DaffNewsletterFacade = /** @class */ (function () {
    function DaffNewsletterFacade(store) {
        this.store = store;
        this.success$ = this.store.select(selectDaffNewsletterSuccess);
        this.error$ = this.store.select(selectDaffNewsletterError);
        this.loading$ = this.store.select(selectDaffNewsletterLoading);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    DaffNewsletterFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffNewsletterFacade.decorators = [
        { type: Injectable, args: [{ providedIn: DaffNewsletterModule },] }
    ];
    /** @nocollapse */
    DaffNewsletterFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffNewsletterFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffNewsletterFacade_Factory() { return new DaffNewsletterFacade(i0.ɵɵinject(i1.Store)); }, token: DaffNewsletterFacade, providedIn: i2.DaffNewsletterModule });
    return DaffNewsletterFacade;
}());
export { DaffNewsletterFacade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmV3c2xldHRlci8iLCJzb3VyY2VzIjpbImZhY2FkZXMvbmV3c2xldHRlci5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQVMsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUc1RDtJQU1FLDhCQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBSnZDLGFBQVEsR0FBeUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNoRixXQUFNLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDMUUsYUFBUSxHQUF3QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBSS9FLENBQUM7Ozs7O0lBQ0QsdUNBQVE7Ozs7SUFBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBWEYsVUFBVSxTQUFFLEVBQUMsVUFBVSxFQUFFLG9CQUFvQixFQUFDOzs7O2dCQU50QyxLQUFLOzs7K0JBRmQ7Q0FvQkMsQUFaRCxJQVlDO1NBWFksb0JBQW9COzs7SUFDL0Isd0NBQWdGOztJQUNoRixzQ0FBMEU7O0lBQzFFLHdDQUErRTs7Ozs7SUFFbkUscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgU3RhdGUsIHNlbGVjdERhZmZOZXdzbGV0dGVyU3VjY2Vzcywgc2VsZWN0RGFmZk5ld3NsZXR0ZXJFcnJvciwgc2VsZWN0RGFmZk5ld3NsZXR0ZXJMb2FkaW5nIH0gZnJvbSAnLi4vc2VsZWN0b3JzL25ld3NsZXR0ZXIuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJNb2R1bGUgfSBmcm9tICcuLi9uZXdzbGV0dGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlckZhY2FkZUludGVyZmFjZSB9IGZyb20gJy4vbmV3c2xldHRlci1mYWNhZGUuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoIHtwcm92aWRlZEluOiBEYWZmTmV3c2xldHRlck1vZHVsZX0gKVxuZXhwb3J0IGNsYXNzIERhZmZOZXdzbGV0dGVyRmFjYWRlIGltcGxlbWVudHMgRGFmZk5ld3NsZXR0ZXJGYWNhZGVJbnRlcmZhY2Uge1xuICBzdWNjZXNzJCA6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnN0b3JlLnNlbGVjdChzZWxlY3REYWZmTmV3c2xldHRlclN1Y2Nlc3MpO1xuICBlcnJvciQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdERhZmZOZXdzbGV0dGVyRXJyb3IpO1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdERhZmZOZXdzbGV0dGVyTG9hZGluZyk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8U3RhdGU+KXtcblxuICB9XG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59Il19