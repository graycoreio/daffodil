/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoProductTypeEnum } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
import * as i0 from "@angular/core";
export class MockMagentoSimpleProduct extends MockMagentoCoreProduct {
    constructor() {
        super(...arguments);
        this.__typename = MagentoProductTypeEnum.SimpleProduct;
    }
}
if (false) {
    /** @type {?} */
    MockMagentoSimpleProduct.prototype.__typename;
}
export class MagentoSimpleProductFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoSimpleProduct);
    }
}
MagentoSimpleProductFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoSimpleProductFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoSimpleProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoSimpleProductFactory_Factory() { return new MagentoSimpleProductFactory(); }, token: MagentoSimpleProductFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21hZ2VudG8vc2ltcGxlL3NpbXBsZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsc0JBQXNCLEVBQXdCLE1BQU0sbUJBQW1CLENBQUM7QUFDakYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRWpFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxzQkFBc0I7SUFBcEU7O1FBQ0MsZUFBVSxHQUFHLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztJQUNuRCxDQUFDO0NBQUE7OztJQURBLDhDQUFrRDs7QUFNbkQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGdCQUFzQztJQUVyRjtRQUNFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQVBGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgRGFmZk1vZGVsRmFjdG9yeSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBNYWdlbnRvUHJvZHVjdFR5cGVFbnVtLCBNYWdlbnRvU2ltcGxlUHJvZHVjdCB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcbmltcG9ydCB7IE1vY2tNYWdlbnRvQ29yZVByb2R1Y3QgfSBmcm9tICcuLi9jb3JlL3Byb2R1Y3QuZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b1NpbXBsZVByb2R1Y3QgZXh0ZW5kcyBNb2NrTWFnZW50b0NvcmVQcm9kdWN0IGltcGxlbWVudHMgTWFnZW50b1NpbXBsZVByb2R1Y3Qge1xuXHRfX3R5cGVuYW1lID0gTWFnZW50b1Byb2R1Y3RUeXBlRW51bS5TaW1wbGVQcm9kdWN0O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYWdlbnRvU2ltcGxlUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9TaW1wbGVQcm9kdWN0PiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrTWFnZW50b1NpbXBsZVByb2R1Y3QpO1xuICB9XG59XG4iXX0=