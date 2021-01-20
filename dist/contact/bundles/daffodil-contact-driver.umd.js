(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@daffodil/contact/driver', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.contact = global.daffodil.contact || {}, global.daffodil.contact.driver = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DaffContactDriver = new core.InjectionToken('DaffContactDriver');
    /**
     * @record
     * @template T, V
     */
    function DaffContactServiceInterface() { }
    if (false) {
        /**
         * @param {?} payload
         * @return {?}
         */
        DaffContactServiceInterface.prototype.send = function (payload) { };
    }

    exports.DaffContactDriver = DaffContactDriver;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-contact-driver.umd.js.map
