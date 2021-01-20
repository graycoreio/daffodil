import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNavigationTransformer, DaffNavigationDriver } from '@daffodil/navigation/driver';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { __makeTemplateObject } from 'tslib';
import gql from 'graphql-tag';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The maximum depth of category children that the navigation driver will query.
 * Defaults to 3.
 * @type {?}
 */
var MAGENTO_NAVIGATION_TREE_QUERY_DEPTH = new InjectionToken('MAGENTO_NAVIGATION_TREE_QUERY_DEPTH', { factory: (/**
     * @return {?}
     */
    function () { return 3; }) });
/**
 * @record
 */
function MagentoNavigationDriverConfiguration() { }
if (false) {
    /** @type {?} */
    MagentoNavigationDriverConfiguration.prototype.navigationTreeQueryDepth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A category tree fragment with no nested children.
 * @type {?}
 */
var categoryNodeFragment = "\n\tid\n\tlevel\n\tname\n\tinclude_in_menu\n\tbreadcrumbs {\n\t\tcategory_id\n\t\tcategory_name\n\t\tcategory_level\n\t\tcategory_url_key\n\t}\n\tproduct_count\n"
/**
 * Generates a category tree fragment with the specified number of nested child category trees.
 * @param depth The maximum depth to which category children should be added to the fragment.
 */
//todo: use nested fragments when this bug is fixed: https://github.com/magento/magento2/issues/31086
;
/**
 * Generates a category tree fragment with the specified number of nested child category trees.
 * @param {?=} depth The maximum depth to which category children should be added to the fragment.
 * @return {?}
 */
//todo: use nested fragments when this bug is fixed: https://github.com/magento/magento2/issues/31086
function getCategoryNodeFragment(depth) {
    if (depth === void 0) { depth = 3; }
    /** @type {?} */
    var fragmentBody = new Array(depth).fill(null).reduce((/**
     * @param {?} acc
     * @return {?}
     */
    function (acc) { return "\n    " + categoryNodeFragment + "\n    children_count\n    children {\n      " + acc + "\n    }\n  "; }), categoryNodeFragment);
    return gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    fragment recursiveCategoryNode on CategoryTree {\n      ", "\n    }\n  "], ["\n    fragment recursiveCategoryNode on CategoryTree {\n      ", "\n    }\n  "])), fragmentBody);
}
var templateObject_1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 * @param {?=} depth The maximum depth to which category children should be added to the fragment.
 * @return {?}
 */
function daffMagentoGetCategoryTree(depth) {
    if (depth === void 0) { depth = 3; }
    return gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    query GetCategoryTree($filters: CategoryFilterInput!){\n      categoryList(filters: $filters) {\n        ...recursiveCategoryNode\n      }\n    }\n    ", "\n  "], ["\n    query GetCategoryTree($filters: CategoryFilterInput!){\n      categoryList(filters: $filters) {\n        ...recursiveCategoryNode\n      }\n    }\n    ", "\n  "])), getCategoryNodeFragment(depth));
}
var templateObject_1$1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoNavigationService = /** @class */ (function () {
    function DaffMagentoNavigationService(apollo, transformer, categoryTreeQueryDepth) {
        this.apollo = apollo;
        this.transformer = transformer;
        this.categoryTreeQueryDepth = categoryTreeQueryDepth;
    }
    /**
     * @param {?} categoryId
     * @return {?}
     */
    DaffMagentoNavigationService.prototype.get = /**
     * @param {?} categoryId
     * @return {?}
     */
    function (categoryId) {
        var _this = this;
        return this.apollo.query({
            query: daffMagentoGetCategoryTree(this.categoryTreeQueryDepth),
            variables: {
                filters: { ids: { eq: categoryId } }
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.transformer.transform(result.data.categoryList[0]); })));
    };
    DaffMagentoNavigationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoNavigationService.ctorParameters = function () { return [
        { type: Apollo },
        { type: undefined, decorators: [{ type: Inject, args: [DaffNavigationTransformer,] }] },
        { type: Number, decorators: [{ type: Inject, args: [MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,] }] }
    ]; };
    /** @nocollapse */ DaffMagentoNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoNavigationService_Factory() { return new DaffMagentoNavigationService(ɵɵinject(Apollo), ɵɵinject(DaffNavigationTransformer), ɵɵinject(MAGENTO_NAVIGATION_TREE_QUERY_DEPTH)); }, token: DaffMagentoNavigationService, providedIn: "root" });
    return DaffMagentoNavigationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoNavigationService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoNavigationService.prototype.transformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoNavigationService.prototype.categoryTreeQueryDepth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoNavigationTransformerService = /** @class */ (function () {
    function DaffMagentoNavigationTransformerService() {
    }
    /**
     * @param {?} node
     * @return {?}
     */
    DaffMagentoNavigationTransformerService.prototype.transform = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        return {
            id: node.id,
            path: node.id,
            name: node.name,
            total_products: node.product_count,
            children_count: node.children_count,
            //todo: use optional chaining when possible
            breadcrumbs: node.breadcrumbs ?
                node.breadcrumbs
                    .map((/**
                 * @param {?} breadcrumb
                 * @return {?}
                 */
                function (breadcrumb) { return _this.transformBreadcrumb(breadcrumb); }))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) { return a.categoryLevel - b.categoryLevel; })) :
                [],
            // TODO: optional chaining
            children: node.children && node.children.filter((/**
             * @param {?} child
             * @return {?}
             */
            function (child) { return child.include_in_menu; })).map((/**
             * @param {?} child
             * @return {?}
             */
            function (child) { return _this.transform(child); }))
        };
    };
    /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    DaffMagentoNavigationTransformerService.prototype.transformBreadcrumb = /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    function (breadcrumb) {
        return {
            categoryId: breadcrumb.category_id,
            categoryName: breadcrumb.category_name,
            categoryLevel: breadcrumb.category_level,
            categoryUrlKey: breadcrumb.category_url_key
        };
    };
    DaffMagentoNavigationTransformerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoNavigationTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoNavigationTransformerService_Factory() { return new DaffMagentoNavigationTransformerService(); }, token: DaffMagentoNavigationTransformerService, providedIn: "root" });
    return DaffMagentoNavigationTransformerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION = {
    navigationTreeQueryDepth: 3
};
var DaffNavigationMagentoDriverModule = /** @class */ (function () {
    function DaffNavigationMagentoDriverModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DaffNavigationMagentoDriverModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION; }
        return {
            ngModule: DaffNavigationMagentoDriverModule,
            providers: [
                {
                    provide: DaffNavigationDriver,
                    useExisting: DaffMagentoNavigationService
                },
                {
                    provide: DaffNavigationTransformer,
                    useExisting: DaffMagentoNavigationTransformerService
                },
                {
                    provide: MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,
                    useValue: config.navigationTreeQueryDepth
                }
            ]
        };
    };
    DaffNavigationMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNavigationMagentoDriverModule;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffMagentoNavigationService, DaffMagentoNavigationTransformerService, DaffNavigationMagentoDriverModule, MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION, MAGENTO_NAVIGATION_TREE_QUERY_DEPTH, daffMagentoGetCategoryTree };
//# sourceMappingURL=daffodil-navigation-driver-magento.js.map
