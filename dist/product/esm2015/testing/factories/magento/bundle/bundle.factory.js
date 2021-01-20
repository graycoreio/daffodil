/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoProductTypeEnum } from '@daffodil/product';
import { MockMagentoCoreProduct } from '../core/product.factory';
import * as i0 from "@angular/core";
export class MockMagentoBundledProduct extends MockMagentoCoreProduct {
    constructor() {
        super(...arguments);
        this.__typename = MagentoProductTypeEnum.BundledProduct;
        this.items = [];
    }
}
if (false) {
    /** @type {?} */
    MockMagentoBundledProduct.prototype.__typename;
    /** @type {?} */
    MockMagentoBundledProduct.prototype.items;
}
export class MagentoBundledProductFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoBundledProduct);
    }
}
MagentoBundledProductFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoBundledProductFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoBundledProductFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoBundledProductFactory_Factory() { return new MagentoBundledProductFactory(); }, token: MagentoBundledProductFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL21hZ2VudG8vYnVuZGxlL2J1bmRsZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsc0JBQXNCLEVBQXlCLE1BQU0sbUJBQW1CLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRWpFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxzQkFBc0I7SUFBckU7O1FBQ0UsZUFBVSxHQUFHLHNCQUFzQixDQUFDLGNBQWMsQ0FBQztRQUNuRCxVQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUFBOzs7SUFGQywrQ0FBbUQ7O0lBQ25ELDBDQUFXOztBQU1iLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxnQkFBdUM7SUFFdkY7UUFDRSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFQRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIERhZmZNb2RlbEZhY3RvcnksXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b1Byb2R1Y3RUeXBlRW51bSwgTWFnZW50b0J1bmRsZWRQcm9kdWN0IH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuaW1wb3J0IHsgTW9ja01hZ2VudG9Db3JlUHJvZHVjdCB9IGZyb20gJy4uL2NvcmUvcHJvZHVjdC5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tNYWdlbnRvQnVuZGxlZFByb2R1Y3QgZXh0ZW5kcyBNb2NrTWFnZW50b0NvcmVQcm9kdWN0IGltcGxlbWVudHMgTWFnZW50b0J1bmRsZWRQcm9kdWN0IHtcbiAgX190eXBlbmFtZSA9IE1hZ2VudG9Qcm9kdWN0VHlwZUVudW0uQnVuZGxlZFByb2R1Y3Q7XG4gIGl0ZW1zID0gW107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9CdW5kbGVkUHJvZHVjdEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PE1hZ2VudG9CdW5kbGVkUHJvZHVjdD4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9CdW5kbGVkUHJvZHVjdCk7XG4gIH1cbn1cbiJdfQ==