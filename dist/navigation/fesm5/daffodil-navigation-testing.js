import { __spread, __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { commerce, random } from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MockNavigationTree = /** @class */ (function () {
    function MockNavigationTree() {
        var _this = this;
        this.id = '1';
        this.name = '';
        this.path = commerce.department().toString().toLowerCase();
        this.total_products = random.number({ min: 1, max: 10 });
        this.children = __spread(Array(random.number({ min: 1, max: 3 }))).map((/**
         * @return {?}
         */
        function () { return _this.fakeTree(3); }));
        this.children_count = 0;
        this.breadcrumbs = [];
    }
    /**
     * @private
     * @param {?=} depth
     * @return {?}
     */
    MockNavigationTree.prototype.fakeTree = /**
     * @private
     * @param {?=} depth
     * @return {?}
     */
    function (depth) {
        var _this = this;
        if (depth === void 0) { depth = 0; }
        /** @type {?} */
        var children = depth !== 0
            ? __spread(Array(random.number({ min: 1, max: 3 }))).map((/**
             * @return {?}
             */
            function () { return _this.fakeTree(depth - 1); }))
            : [];
        return depth <= 0
            ? {
                id: random.number({ min: 1, max: 10000 }).toString(),
                name: commerce.department(),
                path: commerce.department().toString().toLowerCase(),
                total_products: random.number({ min: 1, max: 20 }),
                children: [],
                children_count: 0,
                breadcrumbs: [{
                        categoryId: 1,
                        categoryName: '',
                        categoryLevel: 1,
                        categoryUrlKey: commerce.productMaterial()
                    }]
            }
            : {
                id: random.number({ min: 1, max: 10000 }).toString(),
                name: commerce.department(),
                path: commerce.department().toString().toLowerCase(),
                total_products: random.number({ min: 1, max: 20 }),
                children: children,
                children_count: children.length,
                breadcrumbs: [{
                        categoryId: 1,
                        categoryName: '',
                        categoryLevel: 1,
                        categoryUrlKey: commerce.productMaterial()
                    }]
            };
    };
    return MockNavigationTree;
}());
if (false) {
    /** @type {?} */
    MockNavigationTree.prototype.id;
    /** @type {?} */
    MockNavigationTree.prototype.name;
    /** @type {?} */
    MockNavigationTree.prototype.path;
    /** @type {?} */
    MockNavigationTree.prototype.total_products;
    /** @type {?} */
    MockNavigationTree.prototype.children;
    /** @type {?} */
    MockNavigationTree.prototype.children_count;
    /** @type {?} */
    MockNavigationTree.prototype.breadcrumbs;
}
var DaffNavigationTreeFactory = /** @class */ (function (_super) {
    __extends(DaffNavigationTreeFactory, _super);
    function DaffNavigationTreeFactory() {
        return _super.call(this, MockNavigationTree) || this;
    }
    DaffNavigationTreeFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffNavigationTreeFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffNavigationTreeFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffNavigationTreeFactory_Factory() { return new DaffNavigationTreeFactory(); }, token: DaffNavigationTreeFactory, providedIn: "root" });
    return DaffNavigationTreeFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A helper function to verify that a model is a Navigation.
 * @param {?} navigation
 * @return {?}
 */
function isNavigation(navigation) {
    return navigation.id != null && navigation.name != null && navigation.path != null;
}

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

export { DaffNavigationTreeFactory, isNavigation };
//# sourceMappingURL=daffodil-navigation-testing.js.map
