/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const GetAllProductsQuery = gql `
  query GetAllProducts($length: Int) {
    shop {
      products(first: $length)  {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;
/**
 * GraphQL query object for getting a product by ID.
 * @type {?}
 */
export const GetAProduct = gql `
  query GetAProduct($id: ID!){
    node(id: $id) {
      id
      ... on Product {
        title
      }
    }
  }
`;
/**
 * Transforms a ProductNode into a different object.
 *
 * \@param node - ProductNode object
 * \@return A Product object
 * @type {?}
 */
export const DaffShopifyProductTransformer = (/**
 * @param {?} node
 * @return {?}
 */
(node) => {
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
export class DaffShopifyProductService {
    /**
     * @param {?} apollo
     */
    constructor(apollo) {
        this.apollo = apollo;
        this.defaultLength = 20;
    }
    /**
     * A query for retrieving all Products as an Observable<DaffProduct[]>.
     *
     * @return {?} Observable<Product[]>
     */
    getAll() {
        return this.apollo.query({
            query: GetAllProductsQuery,
            variables: {
                length: this.defaultLength
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            return result.data.shop.products.edges.map((/**
             * @param {?} edge
             * @return {?}
             */
            edge => DaffShopifyProductTransformer(edge.node)));
        })));
    }
    //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
    /**
     * @return {?}
     */
    getBestSellers() {
        return this.apollo.query({
            query: GetAllProductsQuery,
            variables: {
                length: this.defaultLength
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            return result.data.shop.products.edges.map((/**
             * @param {?} edge
             * @return {?}
             */
            edge => DaffShopifyProductTransformer(edge.node)));
        })));
    }
    /**
     * A query for retrieving a particular product as an Observable<DaffProduct>.
     *
     * @param {?} productId - A product ID
     * @return {?} Observable<Product>
     */
    get(productId) {
        return this.apollo.query({
            query: GetAProduct,
            variables: {
                id: productId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => DaffShopifyProductTransformer(result.data.node))));
    }
}
DaffShopifyProductService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShopifyProductService.ctorParameters = () => [
    { type: Apollo }
];
/** @nocollapse */ DaffShopifyProductService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShopifyProductService_Factory() { return new DaffShopifyProductService(i0.ɵɵinject(i1.Apollo)); }, token: DaffShopifyProductService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffShopifyProductService.prototype.defaultLength;
    /**
     * @type {?}
     * @private
     */
    DaffShopifyProductService.prototype.apollo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJkcml2ZXJzL3Nob3BpZnkvcHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDOzs7Ozs7QUFLOUIscUNBRUM7OztJQURDLHNDQUFnQjs7Ozs7QUFHbEIsa0NBRUM7OztJQURDLG1DQUFpQjs7Ozs7QUFHbkIsd0JBRUM7OztJQURDLDZCQUF1Qjs7Ozs7QUFHekIsMkJBRUM7OztJQURDLDZCQUFvQjs7Ozs7QUFHdEIsMEJBRUM7OztJQURDLDJCQUFpQjs7Ozs7QUFHbkIsMEJBSUM7OztJQUhDLHlCQUFXOztJQUNYLDRCQUFlOztJQUNmLDRCQUFlOzs7OztBQUdqQix3QkFFQzs7O0lBREMsMEJBQWE7O0FBQ2QsQ0FBQzs7Ozs7QUFNRixNQUFNLE9BQU8sbUJBQW1CLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Ozs7O0NBYXJDOzs7OztBQUtELE1BQU0sT0FBTyxXQUFXLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7Q0FTN0I7Ozs7Ozs7O0FBUUQsTUFBTSxPQUFPLDZCQUE2Qjs7OztBQUFHLENBQUMsSUFBaUIsRUFBZ0IsRUFBRTtJQUMvRSxPQUFPO1FBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sRUFBRSxFQUFFO0tBQ1QsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7Ozs7Ozs7QUFJSCxNQUFNLE9BQU8seUJBQXlCOzs7O0lBSXBDLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxDLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBRWtCLENBQUM7Ozs7OztJQU90QyxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBeUI7WUFDL0MsS0FBSyxFQUFFLG1CQUFtQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO2FBQzNCO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUE7UUFDOUYsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7O0lBR0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQXlCO1lBQy9DLEtBQUssRUFBRSxtQkFBbUI7WUFDMUIsU0FBUyxFQUFFO2dCQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTthQUMzQjtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ1gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFBO1FBQzlGLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBUUQsR0FBRyxDQUFDLFNBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQXNCO1lBQzVDLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLEVBQUUsU0FBUzthQUNkO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQy9ELENBQUM7SUFDSixDQUFDOzs7WUF4REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBMUZRLE1BQU07Ozs7O0lBNkZiLGtEQUFtQjs7Ozs7SUFFUCwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wcm9kdWN0LXNlcnZpY2UuaW50ZXJmYWNlJztcblxuaW50ZXJmYWNlIEdldEFsbFByb2R1Y3RzUmVzcG9uc2Uge1xuICBzaG9wPzogU2hvcEdyYXBoXG59XG5cbmludGVyZmFjZSBHZXRBUHJvZHVjdFJlc3BvbnNlIHtcbiAgbm9kZTogUHJvZHVjdE5vZGVcbn1cblxuaW50ZXJmYWNlIFNob3BHcmFwaCB7XG4gIHByb2R1Y3RzPzogUHJvZHVjdEdyYXBoXG59XG5cbmludGVyZmFjZSBQcm9kdWN0R3JhcGgge1xuICBlZGdlczogUHJvZHVjdEVkZ2VbXVxufVxuXG5pbnRlcmZhY2UgUHJvZHVjdEVkZ2Uge1xuICBub2RlOiBQcm9kdWN0Tm9kZVxufVxuXG5pbnRlcmZhY2UgUHJvZHVjdE5vZGUge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgcHJpY2U/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBWYXJpYWJsZXMge1xuICBmaXJzdDogbnVtYmVyXG59O1xuXG5cbi8qKlxuICogR3JhcGhRTCBxdWVyeSBvYmplY3QgZm9yIGdldHRpbmcgYWxsIHByb2R1Y3RzLlxuICovXG5leHBvcnQgY29uc3QgR2V0QWxsUHJvZHVjdHNRdWVyeSA9IGdxbGBcbiAgcXVlcnkgR2V0QWxsUHJvZHVjdHMoJGxlbmd0aDogSW50KSB7XG4gICAgc2hvcCB7XG4gICAgICBwcm9kdWN0cyhmaXJzdDogJGxlbmd0aCkgIHtcbiAgICAgICAgZWRnZXMge1xuICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG4vKipcbiAqIEdyYXBoUUwgcXVlcnkgb2JqZWN0IGZvciBnZXR0aW5nIGEgcHJvZHVjdCBieSBJRC5cbiAqL1xuZXhwb3J0IGNvbnN0IEdldEFQcm9kdWN0ID0gZ3FsYFxuICBxdWVyeSBHZXRBUHJvZHVjdCgkaWQ6IElEISl7XG4gICAgbm9kZShpZDogJGlkKSB7XG4gICAgICBpZFxuICAgICAgLi4uIG9uIFByb2R1Y3Qge1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgUHJvZHVjdE5vZGUgaW50byBhIGRpZmZlcmVudCBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSBub2RlIC0gUHJvZHVjdE5vZGUgb2JqZWN0XG4gKiBAcmV0dXJucyBBIFByb2R1Y3Qgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBEYWZmU2hvcGlmeVByb2R1Y3RUcmFuc2Zvcm1lciA9IChub2RlOiBQcm9kdWN0Tm9kZSkgOiBEYWZmUHJvZHVjdCA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IG5vZGUuaWQsXG5cdFx0bmFtZTogbm9kZS50aXRsZSxcblx0XHRpbWFnZXM6IFtdXG4gIH1cbn1cblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIGdldHRpbmcgRGFmZlByb2R1Y3RzIGZyb20gYXBvbGxvIHNob3BpZnkgcHJvZHVjdCByZXF1ZXN0cy5cbiAqIFxuICogQFBhcmFtIGFwb2xsb1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmU2hvcGlmeVByb2R1Y3RTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlByb2R1Y3RTZXJ2aWNlSW50ZXJmYWNlIHtcblxuICBkZWZhdWx0TGVuZ3RoID0gMjA7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwb2xsbzogQXBvbGxvKSB7fVxuXG4gIC8qKlxuICAgKiBBIHF1ZXJ5IGZvciByZXRyaWV2aW5nIGFsbCBQcm9kdWN0cyBhcyBhbiBPYnNlcnZhYmxlPERhZmZQcm9kdWN0W10+LlxuICAgKiBcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxQcm9kdWN0W10+XG4gICAqL1xuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PEdldEFsbFByb2R1Y3RzUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBHZXRBbGxQcm9kdWN0c1F1ZXJ5LFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGxlbmd0aDogdGhpcy5kZWZhdWx0TGVuZ3RoXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuc2hvcC5wcm9kdWN0cy5lZGdlcy5tYXAoZWRnZSA9PiBEYWZmU2hvcGlmeVByb2R1Y3RUcmFuc2Zvcm1lcihlZGdlLm5vZGUpKVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy90b2RvOiBhZGQgYWN0dWFsIGdldEJlc3RTZWxsZXJzIGFwb2xsbyBjYWxsLiBSaWdodCBub3csIGl0IGp1c3QgbWFrZXMgdGhlIGdldEFsbCgpIGNhbGxcbiAgZ2V0QmVzdFNlbGxlcnMoKTogT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PEdldEFsbFByb2R1Y3RzUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBHZXRBbGxQcm9kdWN0c1F1ZXJ5LFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGxlbmd0aDogdGhpcy5kZWZhdWx0TGVuZ3RoXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuc2hvcC5wcm9kdWN0cy5lZGdlcy5tYXAoZWRnZSA9PiBEYWZmU2hvcGlmeVByb2R1Y3RUcmFuc2Zvcm1lcihlZGdlLm5vZGUpKVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgcXVlcnkgZm9yIHJldHJpZXZpbmcgYSBwYXJ0aWN1bGFyIHByb2R1Y3QgYXMgYW4gT2JzZXJ2YWJsZTxEYWZmUHJvZHVjdD4uXG4gICAqIFxuICAgKiBAcGFyYW0gcHJvZHVjdElkIC0gQSBwcm9kdWN0IElEXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8UHJvZHVjdD5cbiAgICovXG4gIGdldChwcm9kdWN0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZlByb2R1Y3Q+IHtcbiAgICByZXR1cm4gdGhpcy5hcG9sbG8ucXVlcnk8R2V0QVByb2R1Y3RSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IEdldEFQcm9kdWN0LFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGlkOiBwcm9kdWN0SWRcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiBEYWZmU2hvcGlmeVByb2R1Y3RUcmFuc2Zvcm1lcihyZXN1bHQuZGF0YS5ub2RlKSlcbiAgICApO1xuICB9XG59XG4iXX0=