import { Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ DaffTestingContactService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffTestingContactService_Factory() { return new DaffTestingContactService(); }, token: DaffTestingContactService, providedIn: "root" });
    return DaffTestingContactService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffContactTestingDriverModule = /** @class */ (function () {
    function DaffContactTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffContactTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffContactTestingDriverModule,
            providers: [
                {
                    provide: DaffContactDriver,
                    useClass: DaffTestingContactService,
                },
            ],
        };
    };
    DaffContactTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffContactTestingDriverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffContactTestingDriverModule, DaffTestingContactService as ɵa };
//# sourceMappingURL=daffodil-contact-driver-testing.js.map
