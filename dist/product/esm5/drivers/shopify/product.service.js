/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
/**
 * @record
 */
function GetAllProductsResponse() { }
if (false) {
    /** @type {?|undefined} */
    GetAllProductsResponse.prototype.shop;
}
/**
 * @record
 */
function GetAProductResponse() { }
if (false) {
    /** @type {?} */
    GetAProductResponse.prototype.node;
}
/**
 * @record
 */
function ShopGraph() { }
if (false) {
    /** @type {?|undefined} */
    ShopGraph.prototype.products;
}
/**
 * @record
 */
function ProductGraph() { }
if (false) {
    /** @type {?} */
    ProductGraph.prototype.edges;
}
/**
 * @record
 */
function ProductEdge() { }
if (false) {
    /** @type {?} */
    ProductEdge.prototype.node;
}
/**
 * @record
 */
function ProductNode() { }
if (false) {
    /** @type {?} */
    ProductNode.prototype.id;
    /** @type {?|undefined} */
    ProductNode.prototype.title;
    /** @type {?|undefined} */
    ProductNode.prototype.price;
}
/**
 * @record
 */
function Variables() { }
if (false) {
    /** @type {?} */
    Variables.prototype.first;
}
;
/**
 * GraphQL query object for getting all products.
 * @type {?}
 */
export var GetAllProductsQuery = gql(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  query GetAllProducts($length: Int) {\n    shop {\n      products(first: $length)  {\n        edges {\n          node {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query GetAllProducts($length: Int) {\n    shop {\n      products(first: $length)  {\n        edges {\n          node {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"])));
/**
 * GraphQL query object for getting a product by ID.
 * @type {?}
 */
export var GetAProduct = gql(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  query GetAProduct($id: ID!){\n    node(id: $id) {\n      id\n      ... on Product {\n        title\n      }\n    }\n  }\n"], ["\n  query GetAProduct($id: ID!){\n    node(id: $id) {\n      id\n      ... on Product {\n        title\n      }\n    }\n  }\n"])));
/**
 * Transforms a ProductNode into a different object.
 *
 * \@param node - ProductNode object
 * \@return A Product object
 * @type {?}
 */
export var DaffShopifyProductTransformer = (/**
 * @param {?} node
 * @return {?}
 */
function (node) {
    return {
        id: node.id,
        name: node.title,
        images: []
    };
})
/**
 * A service for getting DaffProducts from apollo shopify product requests.
 *
 * @Param apollo
 */
;
/**
 * A service for getting DaffProducts from apollo shopify product requests.
 *
 * \@Param apollo
 */
var DaffShopifyProductService = /** @class */ (function () {
    function DaffShopifyProductService(apollo) {
        this.apollo = apollo;
        this.defaultLength = 20;
    }
    /**
     * A query for retrieving all Products as an Observable<DaffProduct[]>.
     *
     * @returns Observable<Product[]>
     */
    /**
     * A query for retrieving all Products as an Observable<DaffProduct[]>.
     *
     * @return {?} Observable<Product[]>
     */
    DaffShopifyProductService.prototype.getAll = /**
     * A query for retrieving all Products as an Observable<DaffProduct[]>.
     *
     * @return {?} Observable<Product[]>
     */
    function () {
        return this.apollo.query({
            query: GetAllProductsQuery,
            variables: {
                length: this.defaultLength
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            return result.data.shop.products.edges.map((/**
             * @param {?} edge
             * @return {?}
             */
            function (edge) { return DaffShopifyProductTransformer(edge.node); }));
        })));
    };
    //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
    //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
    /**
     * @return {?}
     */
    DaffShopifyProductService.prototype.getBestSellers = 
    //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
    /**
     * @return {?}
     */
    function () {
        return this.apollo.query({
            query: GetAllProductsQuery,
            variables: {
                length: this.defaultLength
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            return result.data.shop.products.edges.map((/**
             * @param {?} edge
             * @return {?}
             */
            function (edge) { return DaffShopifyProductTransformer(edge.node); }));
        })));
    };
    /**
     * A query for retrieving a particular product as an Observable<DaffProduct>.
     *
     * @param productId - A product ID
     * @returns Observable<Product>
     */
    /**
     * A query for retrieving a particular product as an Observable<DaffProduct>.
     *
     * @param {?} productId - A product ID
     * @return {?} Observable<Product>
     */
    DaffShopifyProductService.prototype.get = /**
     * A query for retrieving a particular product as an Observable<DaffProduct>.
     *
     * @param {?} productId - A product ID
     * @return {?} Observable<Product>
     */
    function (productId) {
        return this.apollo.query({
            query: GetAProduct,
            variables: {
                id: productId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return DaffShopifyProductTransformer(result.data.node); })));
    };
    DaffShopifyProductService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShopifyProductService.ctorParameters = function () { return [
        { type: Apollo }
    ]; };
    /** @nocollapse */ DaffShopifyProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShopifyProductService_Factory() { return new DaffShopifyProductService(i0.ɵɵinject(i1.Apollo)); }, token: DaffShopifyProductService, providedIn: "root" });
    return DaffShopifyProductService;
}());
export { DaffShopifyProductService };
if (false) {
    /** @type {?} */
    DaffShopifyProductService.prototype.defaultLength;
    /**
     * @type {?}
     * @private
     */
    DaffShopifyProductService.prototype.apollo;
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL3Nob3BpZnkvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQzs7Ozs7O0FBSzlCLHFDQUVDOzs7SUFEQyxzQ0FBZ0I7Ozs7O0FBR2xCLGtDQUVDOzs7SUFEQyxtQ0FBaUI7Ozs7O0FBR25CLHdCQUVDOzs7SUFEQyw2QkFBdUI7Ozs7O0FBR3pCLDJCQUVDOzs7SUFEQyw2QkFBb0I7Ozs7O0FBR3RCLDBCQUVDOzs7SUFEQywyQkFBaUI7Ozs7O0FBR25CLDBCQUlDOzs7SUFIQyx5QkFBVzs7SUFDWCw0QkFBZTs7SUFDZiw0QkFBZTs7Ozs7QUFHakIsd0JBRUM7OztJQURDLDBCQUFhOztBQUNkLENBQUM7Ozs7O0FBTUYsTUFBTSxLQUFPLG1CQUFtQixHQUFHLEdBQUcseVJBQUEsOE1BYXJDLElBQUE7Ozs7O0FBS0QsTUFBTSxLQUFPLFdBQVcsR0FBRyxHQUFHLDBNQUFBLCtIQVM3QixJQUFBOzs7Ozs7OztBQVFELE1BQU0sS0FBTyw2QkFBNkI7Ozs7QUFBRyxVQUFDLElBQWlCO0lBQzdELE9BQU87UUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDaEIsTUFBTSxFQUFFLEVBQUU7S0FDVCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRzs7Ozs7OztBQUNIO0lBT0UsbUNBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBRWtCLENBQUM7SUFFdEM7Ozs7T0FJRzs7Ozs7O0lBQ0gsMENBQU07Ozs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUF5QjtZQUMvQyxLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDM0I7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUc7Ozs7UUFBQyxVQUFBLE1BQU07WUFDUixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsNkJBQTZCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQUE7UUFDOUYsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCx5RkFBeUY7Ozs7O0lBQ3pGLGtEQUFjOzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBeUI7WUFDL0MsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO2FBQzNCO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsVUFBQSxNQUFNO1lBQ1IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLDZCQUE2QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFBO1FBQzlGLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7SUFDSCx1Q0FBRzs7Ozs7O0lBQUgsVUFBSSxTQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFzQjtZQUM1QyxLQUFLLEVBQUUsV0FBVztZQUNsQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxFQUFFLFNBQVM7YUFDZDtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsNkJBQTZCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBL0MsQ0FBK0MsRUFBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBeERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBMUZRLE1BQU07OztvQ0FMZjtDQXNKQyxBQXpERCxJQXlEQztTQXREWSx5QkFBeUI7OztJQUVwQyxrREFBbUI7Ozs7O0lBRVAsMkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9kdWN0JztcbmltcG9ydCB7IERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHJvZHVjdC1zZXJ2aWNlLmludGVyZmFjZSc7XG5cbmludGVyZmFjZSBHZXRBbGxQcm9kdWN0c1Jlc3BvbnNlIHtcbiAgc2hvcD86IFNob3BHcmFwaFxufVxuXG5pbnRlcmZhY2UgR2V0QVByb2R1Y3RSZXNwb25zZSB7XG4gIG5vZGU6IFByb2R1Y3ROb2RlXG59XG5cbmludGVyZmFjZSBTaG9wR3JhcGgge1xuICBwcm9kdWN0cz86IFByb2R1Y3RHcmFwaFxufVxuXG5pbnRlcmZhY2UgUHJvZHVjdEdyYXBoIHtcbiAgZWRnZXM6IFByb2R1Y3RFZGdlW11cbn1cblxuaW50ZXJmYWNlIFByb2R1Y3RFZGdlIHtcbiAgbm9kZTogUHJvZHVjdE5vZGVcbn1cblxuaW50ZXJmYWNlIFByb2R1Y3ROb2RlIHtcbiAgaWQ6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHByaWNlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgVmFyaWFibGVzIHtcbiAgZmlyc3Q6IG51bWJlclxufTtcblxuXG4vKipcbiAqIEdyYXBoUUwgcXVlcnkgb2JqZWN0IGZvciBnZXR0aW5nIGFsbCBwcm9kdWN0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IEdldEFsbFByb2R1Y3RzUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IEdldEFsbFByb2R1Y3RzKCRsZW5ndGg6IEludCkge1xuICAgIHNob3Age1xuICAgICAgcHJvZHVjdHMoZmlyc3Q6ICRsZW5ndGgpICB7XG4gICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuLyoqXG4gKiBHcmFwaFFMIHF1ZXJ5IG9iamVjdCBmb3IgZ2V0dGluZyBhIHByb2R1Y3QgYnkgSUQuXG4gKi9cbmV4cG9ydCBjb25zdCBHZXRBUHJvZHVjdCA9IGdxbGBcbiAgcXVlcnkgR2V0QVByb2R1Y3QoJGlkOiBJRCEpe1xuICAgIG5vZGUoaWQ6ICRpZCkge1xuICAgICAgaWRcbiAgICAgIC4uLiBvbiBQcm9kdWN0IHtcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIFByb2R1Y3ROb2RlIGludG8gYSBkaWZmZXJlbnQgb2JqZWN0LlxuICogXG4gKiBAcGFyYW0gbm9kZSAtIFByb2R1Y3ROb2RlIG9iamVjdFxuICogQHJldHVybnMgQSBQcm9kdWN0IG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgRGFmZlNob3BpZnlQcm9kdWN0VHJhbnNmb3JtZXIgPSAobm9kZTogUHJvZHVjdE5vZGUpIDogRGFmZlByb2R1Y3QgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkOiBub2RlLmlkLFxuXHRcdG5hbWU6IG5vZGUudGl0bGUsXG5cdFx0aW1hZ2VzOiBbXVxuICB9XG59XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBnZXR0aW5nIERhZmZQcm9kdWN0cyBmcm9tIGFwb2xsbyBzaG9waWZ5IHByb2R1Y3QgcmVxdWVzdHMuXG4gKiBcbiAqIEBQYXJhbSBhcG9sbG9cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlNob3BpZnlQcm9kdWN0U2VydmljZSBpbXBsZW1lbnRzIERhZmZQcm9kdWN0U2VydmljZUludGVyZmFjZSB7XG5cbiAgZGVmYXVsdExlbmd0aCA9IDIwO1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcG9sbG86IEFwb2xsbykge31cblxuICAvKipcbiAgICogQSBxdWVyeSBmb3IgcmV0cmlldmluZyBhbGwgUHJvZHVjdHMgYXMgYW4gT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdFtdPi5cbiAgICogXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8UHJvZHVjdFtdPlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8RGFmZlByb2R1Y3RbXT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxHZXRBbGxQcm9kdWN0c1Jlc3BvbnNlPih7XG4gICAgICBxdWVyeTogR2V0QWxsUHJvZHVjdHNRdWVyeSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsZW5ndGg6IHRoaXMuZGVmYXVsdExlbmd0aFxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnNob3AucHJvZHVjdHMuZWRnZXMubWFwKGVkZ2UgPT4gRGFmZlNob3BpZnlQcm9kdWN0VHJhbnNmb3JtZXIoZWRnZS5ub2RlKSlcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vdG9kbzogYWRkIGFjdHVhbCBnZXRCZXN0U2VsbGVycyBhcG9sbG8gY2FsbC4gUmlnaHQgbm93LCBpdCBqdXN0IG1ha2VzIHRoZSBnZXRBbGwoKSBjYWxsXG4gIGdldEJlc3RTZWxsZXJzKCk6IE9ic2VydmFibGU8RGFmZlByb2R1Y3RbXT4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxHZXRBbGxQcm9kdWN0c1Jlc3BvbnNlPih7XG4gICAgICBxdWVyeTogR2V0QWxsUHJvZHVjdHNRdWVyeSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsZW5ndGg6IHRoaXMuZGVmYXVsdExlbmd0aFxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhLnNob3AucHJvZHVjdHMuZWRnZXMubWFwKGVkZ2UgPT4gRGFmZlNob3BpZnlQcm9kdWN0VHJhbnNmb3JtZXIoZWRnZS5ub2RlKSlcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHF1ZXJ5IGZvciByZXRyaWV2aW5nIGEgcGFydGljdWxhciBwcm9kdWN0IGFzIGFuIE9ic2VydmFibGU8RGFmZlByb2R1Y3Q+LlxuICAgKiBcbiAgICogQHBhcmFtIHByb2R1Y3RJZCAtIEEgcHJvZHVjdCBJRFxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPFByb2R1Y3Q+XG4gICAqL1xuICBnZXQocHJvZHVjdElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PEdldEFQcm9kdWN0UmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBHZXRBUHJvZHVjdCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpZDogcHJvZHVjdElkXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gRGFmZlNob3BpZnlQcm9kdWN0VHJhbnNmb3JtZXIocmVzdWx0LmRhdGEubm9kZSkpXG4gICAgKTtcbiAgfVxufVxuIl19