/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento auths into an object usable by daffodil.
 */
export class DaffMagentoAuthTransformerService {
    /**
     * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
     * @param {?} auth the auth from a magento auth query.
     * @return {?}
     */
    transform(auth) {
        return {
            token: auth.token
        };
    }
}
DaffMagentoAuthTransformerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoAuthTransformerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoAuthTransformerService_Factory() { return new DaffMagentoAuthTransformerService(); }, token: DaffMagentoAuthTransformerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC10cmFuc2Zvcm1lci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvIiwic291cmNlcyI6WyJkcml2ZXJzL21hZ2VudG8vdHJhbnNmb3Jtcy9hdXRoLXRyYW5zZm9ybWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVzNDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7OztJQU01QyxTQUFTLENBQUMsSUFBaUI7UUFDekIsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFBO0lBQ0gsQ0FBQzs7O1lBYkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aFRva2VuIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2F1dGgtdG9rZW4nXG5pbXBvcnQgeyBNYWdlbnRvQXV0aCB9IGZyb20gJy4uL21vZGVscy9yZXNwb25zZS9hdXRoJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIG1hZ2VudG8gYXV0aHMgaW50byBhbiBvYmplY3QgdXNhYmxlIGJ5IGRhZmZvZGlsLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmTWFnZW50b0F1dGhUcmFuc2Zvcm1lclNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm1zIHRoZSBtYWdlbnRvIEF1dGhOb2RlIGZyb20gdGhlIG1hZ2VudG8gYXV0aCBxdWVyeSBpbnRvIGEgRGFmZkF1dGhUb2tlbi5cbiAgICogQHBhcmFtIGF1dGggdGhlIGF1dGggZnJvbSBhIG1hZ2VudG8gYXV0aCBxdWVyeS5cbiAgICovXG4gIHRyYW5zZm9ybShhdXRoOiBNYWdlbnRvQXV0aCk6IERhZmZBdXRoVG9rZW4ge1xuICAgIHJldHVybiB7XG4gICAgICB0b2tlbjogYXV0aC50b2tlblxuICAgIH1cbiAgfVxufVxuIl19