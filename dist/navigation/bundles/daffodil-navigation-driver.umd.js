(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@daffodil/navigation/driver', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.navigation = global.daffodil.navigation || {}, global.daffodil.navigation.driver = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffNavigationServiceInterface() { }
    if (false) {
        /**
         * @param {?} categoryId
         * @return {?}
         */
        DaffNavigationServiceInterface.prototype.get = function (categoryId) { };
    }
    /** @type {?} */
    var DaffNavigationDriver = new core.InjectionToken('DaffNavigationDriver');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function DaffNavigationTransformerInterface() { }
    if (false) {
        /**
         * @param {?} navigationTree
         * @return {?}
         */
        DaffNavigationTransformerInterface.prototype.transform = function (navigationTree) { };
    }
    /** @type {?} */
    var DaffNavigationTransformer = new core.InjectionToken('DaffNavigationTransformer');

    exports.DaffNavigationDriver = DaffNavigationDriver;
    exports.DaffNavigationTransformer = DaffNavigationTransformer;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-navigation-driver.umd.js.map
