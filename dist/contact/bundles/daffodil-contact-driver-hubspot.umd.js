(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/router'), require('@daffodil/driver/hubspot'), require('@daffodil/contact/driver')) :
    typeof define === 'function' && define.amd ? define('@daffodil/contact/driver/hubspot', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/platform-browser', '@angular/router', '@daffodil/driver/hubspot', '@daffodil/contact/driver'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.contact = global.daffodil.contact || {}, global.daffodil.contact.driver = global.daffodil.contact.driver || {}, global.daffodil.contact.driver.hubspot = {}), global.ng.core, global.ng.common, global.ng.common.http, global.ng.platformBrowser, global.ng.router, global.hubspot, global.daffodil.contact.driver));
}(this, function (exports, core, common, http, platformBrowser, router, hubspot, driver) { 'use strict';

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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        DaffContactHubspotService.ctorParameters = function () { return [
            { type: hubspot.DaffHubspotFormsService }
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
    var DaffContactConfigToken = new core.InjectionToken('DaffContactConfig');

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
                    { provide: driver.DaffContactDriver, useClass: DaffContactHubspotService },
                    { provide: DaffContactConfigToken, useValue: config },
                    {
                        provide: hubspot.DaffHubspotFormsService,
                        useFactory: hubspot.daffHubspotFormsServiceFactory,
                        deps: [http.HttpClient, common.DOCUMENT, router.Router, platformBrowser.Title, DaffContactConfigToken],
                    },
                ],
            };
        };
        DaffContactHubSpotDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                    },] }
        ];
        return DaffContactHubSpotDriverModule;
    }());

    exports.DaffContactHubSpotDriverModule = DaffContactHubSpotDriverModule;
    exports.ɵa = DaffContactHubspotService;
    exports.ɵb = DaffContactConfigToken;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-contact-driver-hubspot.umd.js.map
