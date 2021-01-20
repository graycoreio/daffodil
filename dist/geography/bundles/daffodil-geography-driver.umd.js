(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@daffodil/core'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@daffodil/geography/driver', ['exports', '@daffodil/core', '@angular/core'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.geography = global.daffodil.geography || {}, global.daffodil.geography.driver = {}), global.core, global.ng.core));
}(this, function (exports, core, core$1) { 'use strict';

    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var DaffCountryNotFoundError = /** @class */ (function (_super) {
        __extends(DaffCountryNotFoundError, _super);
        function DaffCountryNotFoundError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_GEOGRAPHY_COUNTRY_NOT_FOUND';
            return _this;
        }
        return DaffCountryNotFoundError;
    }(core.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffCountryNotFoundError.prototype.code;
        /** @type {?} */
        DaffCountryNotFoundError.prototype.message;
    }

    var __extends$1 = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var DaffGeographyInvalidAPIResponseError = /** @class */ (function (_super) {
        __extends$1(DaffGeographyInvalidAPIResponseError, _super);
        function DaffGeographyInvalidAPIResponseError(message) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.code = 'DAFF_GEOGRAPHY_INVALID_API_RESPONSE';
            return _this;
        }
        return DaffGeographyInvalidAPIResponseError;
    }(core.DaffInheritableError));
    if (false) {
        /** @type {?} */
        DaffGeographyInvalidAPIResponseError.prototype.code;
        /** @type {?} */
        DaffGeographyInvalidAPIResponseError.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffGeographyDriver = new core$1.InjectionToken('DaffGeographyDriver');
    /**
     * @record
     * @template T
     */
    function DaffGeographyServiceInterface() { }
    if (false) {
        /**
         * Retrieves the list of countries available to the given store.
         * @return {?}
         */
        DaffGeographyServiceInterface.prototype.list = function () { };
        /**
         * Retrieve precise information about a specific country.
         * @param {?} id
         * @return {?}
         */
        DaffGeographyServiceInterface.prototype.get = function (id) { };
    }

    exports.DaffCountryNotFoundError = DaffCountryNotFoundError;
    exports.DaffGeographyDriver = DaffGeographyDriver;
    exports.DaffGeographyInvalidAPIResponseError = DaffGeographyInvalidAPIResponseError;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-geography-driver.umd.js.map
