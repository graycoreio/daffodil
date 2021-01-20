import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNavigationTransformer, DaffNavigationDriver } from '@daffodil/navigation/driver';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
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
const MAGENTO_NAVIGATION_TREE_QUERY_DEPTH = new InjectionToken('MAGENTO_NAVIGATION_TREE_QUERY_DEPTH', { factory: (/**
     * @return {?}
     */
    () => 3) });
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
const categoryNodeFragment = `
	id
	level
	name
	include_in_menu
	breadcrumbs {
		category_id
		category_name
		category_level
		category_url_key
	}
	product_count
`
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
function getCategoryNodeFragment(depth = 3) {
    /** @type {?} */
    const fragmentBody = new Array(depth).fill(null).reduce((/**
     * @param {?} acc
     * @return {?}
     */
    acc => `
    ${categoryNodeFragment}
    children_count
    children {
      ${acc}
    }
  `), categoryNodeFragment);
    return gql `
    fragment recursiveCategoryNode on CategoryTree {
      ${fragmentBody}
    }
  `;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 * @param {?=} depth The maximum depth to which category children should be added to the fragment.
 * @return {?}
 */
function daffMagentoGetCategoryTree(depth = 3) {
    return gql `
    query GetCategoryTree($filters: CategoryFilterInput!){
      categoryList(filters: $filters) {
        ...recursiveCategoryNode
      }
    }
    ${getCategoryNodeFragment(depth)}
  `;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoNavigationService {
    /**
     * @param {?} apollo
     * @param {?} transformer
     * @param {?} categoryTreeQueryDepth
     */
    constructor(apollo, transformer, categoryTreeQueryDepth) {
        this.apollo = apollo;
        this.transformer = transformer;
        this.categoryTreeQueryDepth = categoryTreeQueryDepth;
    }
    /**
     * @param {?} categoryId
     * @return {?}
     */
    get(categoryId) {
        return this.apollo.query({
            query: daffMagentoGetCategoryTree(this.categoryTreeQueryDepth),
            variables: {
                filters: { ids: { eq: categoryId } }
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.transformer.transform(result.data.categoryList[0]))));
    }
}
DaffMagentoNavigationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoNavigationService.ctorParameters = () => [
    { type: Apollo },
    { type: undefined, decorators: [{ type: Inject, args: [DaffNavigationTransformer,] }] },
    { type: Number, decorators: [{ type: Inject, args: [MAGENTO_NAVIGATION_TREE_QUERY_DEPTH,] }] }
];
/** @nocollapse */ DaffMagentoNavigationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoNavigationService_Factory() { return new DaffMagentoNavigationService(ɵɵinject(Apollo), ɵɵinject(DaffNavigationTransformer), ɵɵinject(MAGENTO_NAVIGATION_TREE_QUERY_DEPTH)); }, token: DaffMagentoNavigationService, providedIn: "root" });
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
class DaffMagentoNavigationTransformerService {
    /**
     * @param {?} node
     * @return {?}
     */
    transform(node) {
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
                breadcrumb => this.transformBreadcrumb(breadcrumb)))
                    .sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a.categoryLevel - b.categoryLevel)) :
                [],
            // TODO: optional chaining
            children: node.children && node.children.filter((/**
             * @param {?} child
             * @return {?}
             */
            child => child.include_in_menu)).map((/**
             * @param {?} child
             * @return {?}
             */
            child => this.transform(child)))
        };
    }
    /**
     * @private
     * @param {?} breadcrumb
     * @return {?}
     */
    transformBreadcrumb(breadcrumb) {
        return {
            categoryId: breadcrumb.category_id,
            categoryName: breadcrumb.category_name,
            categoryLevel: breadcrumb.category_level,
            categoryUrlKey: breadcrumb.category_url_key
        };
    }
}
DaffMagentoNavigationTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoNavigationTransformerService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoNavigationTransformerService_Factory() { return new DaffMagentoNavigationTransformerService(); }, token: DaffMagentoNavigationTransformerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION = {
    navigationTreeQueryDepth: 3
};
class DaffNavigationMagentoDriverModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION) {
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
    }
}
DaffNavigationMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffMagentoNavigationService, DaffMagentoNavigationTransformerService, DaffNavigationMagentoDriverModule, MAGENTO_NAVIGATION_DEFAULT_CONFIGURATION, MAGENTO_NAVIGATION_TREE_QUERY_DEPTH, daffMagentoGetCategoryTree };
//# sourceMappingURL=daffodil-navigation-driver-magento.js.map
