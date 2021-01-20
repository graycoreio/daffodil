/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/navigation/testing";
var DaffTestingNavigationService = /** @class */ (function () {
    function DaffTestingNavigationService(navigationTreeFactory) {
        this.navigationTreeFactory = navigationTreeFactory;
    }
    /**
     * @param {?} navigationTreeId
     * @return {?}
     */
    DaffTestingNavigationService.prototype.get = /**
     * @param {?} navigationTreeId
     * @return {?}
     */
    function (navigationTreeId) {
        return of(this.navigationTreeFactory.create());
    };
    DaffTestingNavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffTestingNavigationService.ctorParameters = function () { return [
        { type: DaffNavigationTreeFactory }
    ]; };
    /** @nocollapse */ DaffTestingNavigationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingNavigationService_Factory() { return new DaffTestingNavigationService(i0.ɵɵinject(i1.DaffNavigationTreeFactory)); }, token: DaffTestingNavigationService, providedIn: "root" });
    return DaffTestingNavigationService;
}());
export { DaffTestingNavigationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffTestingNavigationService.prototype.navigationTreeFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl0QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBR3pFO0lBS0Usc0NBQ1UscUJBQWdEO1FBQWhELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMkI7SUFBRyxDQUFDOzs7OztJQUU5RCwwQ0FBRzs7OztJQUFILFVBQUksZ0JBQXdCO1FBQzFCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVZGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEseUJBQXlCOzs7dUNBTGxDO0NBbUJDLEFBWEQsSUFXQztTQVJZLDRCQUE0Qjs7Ozs7O0lBR3JDLDZEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlcic7XG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvblRyZWVGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vdGVzdGluZyc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlRlc3RpbmdOYXZpZ2F0aW9uU2VydmljZSBpbXBsZW1lbnRzIERhZmZOYXZpZ2F0aW9uU2VydmljZUludGVyZmFjZTxEYWZmTmF2aWdhdGlvblRyZWU+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdmlnYXRpb25UcmVlRmFjdG9yeTogRGFmZk5hdmlnYXRpb25UcmVlRmFjdG9yeSkge31cblxuICBnZXQobmF2aWdhdGlvblRyZWVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmTmF2aWdhdGlvblRyZWU+IHtcbiAgICByZXR1cm4gb2YodGhpcy5uYXZpZ2F0aW9uVHJlZUZhY3RvcnkuY3JlYXRlKCkpO1xuICB9XG59XG4iXX0=