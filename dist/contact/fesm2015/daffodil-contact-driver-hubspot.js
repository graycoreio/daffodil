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
class DaffContactHubspotService {
    /**
     * @param {?} hubspotService
     */
    constructor(hubspotService) {
        this.hubspotService = hubspotService;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    send(payload) {
        return this.hubspotService.submit(payload);
    }
}
DaffContactHubspotService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffContactHubspotService.ctorParameters = () => [
    { type: DaffHubspotFormsService }
];
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
const DaffContactConfigToken = new InjectionToken('DaffContactConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffContactHubSpotDriverModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
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
    }
}
DaffContactHubSpotDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
            },] }
];

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
