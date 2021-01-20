/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import * as i0 from "@angular/core";
var DaffTestingContactService = /** @class */ (function () {
    function DaffTestingContactService() {
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffTestingContactService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return of('Success').pipe(delay(10));
    };
    DaffTestingContactService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffTestingContactService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingContactService_Factory() { return new DaffTestingContactService(); }, token: DaffTestingContactService, providedIn: "root" });
    return DaffTestingContactService;
}());
export { DaffTestingContactService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJjb250YWN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBS3ZDO0lBQUE7S0FPQzs7Ozs7SUFIQyx3Q0FBSTs7OztJQUFKLFVBQUssT0FBeUI7UUFDNUIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OztvQ0FURDtDQWNDLEFBUEQsSUFPQztTQUpZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZkNvbnRhY3RVbmlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0JztcbmltcG9ydCB7IERhZmZDb250YWN0U2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0L2RyaXZlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nQ29udGFjdFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ29udGFjdFNlcnZpY2VJbnRlcmZhY2U8RGFmZkNvbnRhY3RVbmlvbiwgYW55PntcbiAgc2VuZChwYXlsb2FkOiBEYWZmQ29udGFjdFVuaW9uKTogT2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiBvZignU3VjY2VzcycpLnBpcGUoZGVsYXkoMTApKTtcbiAgfVxufSJdfQ==