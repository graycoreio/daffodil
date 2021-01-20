import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DaffHubspotFormsService, daffHubspotFormsServiceFactory } from '@daffodil/driver/hubspot';
import { DaffContactDriver } from '@daffodil/contact/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffContactHubspotService = /** @class */ (function () {
    function DaffContactHubspotService(hubspotService) {
        this.hubspotService = hubspotService;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    DaffContactHubspotService.prototype.send = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        return this.hubspotService.submit(payload);
    };
    DaffContactHubspotService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffContactHubspotService.ctorParameters = function () { return [
        { type: DaffHubspotFormsService }
    ]; };
    return DaffContactHubspotService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffContactHubspotService.prototype.hubspotService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffContactConfigToken = new InjectionToken('DaffContactConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffContactHubSpotDriverModule = /** @class */ (function () {
    function DaffContactHubSpotDriverModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    DaffContactHubSpotDriverModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: DaffContactHubSpotDriverModule,
            providers: [
                { provide: DaffContactDriver, useClass: DaffContactHubspotService },
                { provide: DaffContactConfigToken, useValue: config },
                {
                    provide: DaffHubspotFormsService,
                    useFactory: daffHubspotFormsServiceFactory,
                    deps: [HttpClient, DOCUMENT, Router, Title, DaffContactConfigToken],
                },
            ],
        };
    };
    DaffContactHubSpotDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                },] }
    ];
    return DaffContactHubSpotDriverModule;
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

export { DaffContactHubSpotDriverModule, DaffContactHubspotService as ɵa, DaffContactConfigToken as ɵb };
//# sourceMappingURL=daffodil-contact-driver-hubspot.js.map
