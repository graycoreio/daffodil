/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDaffContactLoading, selectDaffContactError, selectDaffContactSuccess, } from '../selectors/contact.selector';
import { DaffContactStateModule } from '../contact.module';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../contact.module";
var DaffContactFacade = /** @class */ (function () {
    function DaffContactFacade(store) {
        this.store = store;
        this.success$ = this.store.select(selectDaffContactSuccess);
        this.error$ = this.store.select(selectDaffContactError);
        this.loading$ = this.store.select(selectDaffContactLoading);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    DaffContactFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffContactFacade.decorators = [
        { type: Injectable, args: [{ providedIn: DaffContactStateModule },] }
    ];
    /** @nocollapse */
    DaffContactFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffContactFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffContactFacade_Factory() { return new DaffContactFacade(i0.ɵɵinject(i1.Store)); }, token: DaffContactFacade, providedIn: i2.DaffContactStateModule });
    return DaffContactFacade;
}());
export { DaffContactFacade };
if (false) {
    /** @type {?} */
    DaffContactFacade.prototype.success$;
    /** @type {?} */
    DaffContactFacade.prototype.error$;
    /** @type {?} */
    DaffContactFacade.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    DaffContactFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29udGFjdC9zdGF0ZS8iLCJzb3VyY2VzIjpbImZhY2FkZXMvY29udGFjdC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBRU4sd0JBQXdCLEVBQ3hCLHNCQUFzQixFQUN0Qix3QkFBd0IsR0FDeEIsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUczRDtJQU1DLDJCQUFvQixLQUFxQztRQUFyQyxVQUFLLEdBQUwsS0FBSyxDQUFnQztRQUp6RCxhQUFRLEdBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUUsV0FBTSxHQUF5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pFLGFBQVEsR0FBd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUVmLENBQUM7Ozs7O0lBQzlELG9DQUFROzs7O0lBQVIsVUFBUyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2dCQVRELFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IsRUFBRTs7OztnQkFaakMsS0FBSzs7OzRCQUR0QjtDQXVCQyxBQVZELElBVUM7U0FUWSxpQkFBaUI7OztJQUM3QixxQ0FBNEU7O0lBQzVFLG1DQUF5RTs7SUFDekUscUNBQTRFOzs7OztJQUVoRSxrQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuXHREYWZmQ29udGFjdEZlYXR1cmVTdGF0ZSxcblx0c2VsZWN0RGFmZkNvbnRhY3RMb2FkaW5nLFxuXHRzZWxlY3REYWZmQ29udGFjdEVycm9yLFxuXHRzZWxlY3REYWZmQ29udGFjdFN1Y2Nlc3MsXG59IGZyb20gJy4uL3NlbGVjdG9ycy9jb250YWN0LnNlbGVjdG9yJztcbmltcG9ydCB7IERhZmZDb250YWN0U3RhdGVNb2R1bGUgfSBmcm9tICcuLi9jb250YWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBEYWZmQ29udGFjdEZhY2FkZUludGVyZmFjZSB9IGZyb20gJy4vY29udGFjdC1mYWNhZGUuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiBEYWZmQ29udGFjdFN0YXRlTW9kdWxlIH0pXG5leHBvcnQgY2xhc3MgRGFmZkNvbnRhY3RGYWNhZGUgaW1wbGVtZW50cyBEYWZmQ29udGFjdEZhY2FkZUludGVyZmFjZSB7XG5cdHN1Y2Nlc3MkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0RGFmZkNvbnRhY3RTdWNjZXNzKTtcblx0ZXJyb3IkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdERhZmZDb250YWN0RXJyb3IpO1xuXHRsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc3RvcmUuc2VsZWN0KHNlbGVjdERhZmZDb250YWN0TG9hZGluZyk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZkNvbnRhY3RGZWF0dXJlU3RhdGU+KSB7IH1cblx0ZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcblx0XHR0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG5cdH1cbn1cbiJdfQ==