/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { MagentoMoneyFactory } from '@daffodil/driver/magento/testing';
import { DaffModelFactory, } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockCartShippingMethod {
    constructor() {
        this.carrier_code = faker.random.word();
        this.carrier_title = faker.random.words(2);
        this.method_title = faker.random.words(2);
        this.method_code = faker.random.word();
        this.amount = this.money();
    }
    /**
     * @private
     * @return {?}
     */
    money() {
        return (new MagentoMoneyFactory()).create();
    }
}
if (false) {
    /** @type {?} */
    MockCartShippingMethod.prototype.carrier_code;
    /** @type {?} */
    MockCartShippingMethod.prototype.carrier_title;
    /** @type {?} */
    MockCartShippingMethod.prototype.method_title;
    /** @type {?} */
    MockCartShippingMethod.prototype.method_code;
    /** @type {?} */
    MockCartShippingMethod.prototype.amount;
}
export class MagentoCartShippingMethodFactory extends DaffModelFactory {
    constructor() {
        super(MockCartShippingMethod);
    }
}
MagentoCartShippingMethodFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartShippingMethodFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartShippingMethodFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartShippingMethodFactory_Factory() { return new MagentoCartShippingMethodFactory(); }, token: MagentoCartShippingMethodFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1tZXRob2QuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY2FydC1zaGlwcGluZy1tZXRob2QuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxnQkFBZ0IsR0FDakIsTUFBTSx3QkFBd0IsQ0FBQzs7QUFHaEMsTUFBTSxPQUFPLHNCQUFzQjtJQUFuQztRQUNFLGlCQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFLeEIsQ0FBQzs7Ozs7SUFIUyxLQUFLO1FBQ1gsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQzdDLENBQUM7Q0FDRjs7O0lBVEMsOENBQW1DOztJQUNuQywrQ0FBc0M7O0lBQ3RDLDhDQUFxQzs7SUFDckMsNkNBQWtDOztJQUNsQyx3Q0FBc0I7O0FBVXhCLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxnQkFBMkM7SUFDL0Y7UUFDRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBNYWdlbnRvTW9uZXkgfSBmcm9tICdAZGFmZm9kaWwvZHJpdmVyL21hZ2VudG8nO1xuaW1wb3J0IHsgTWFnZW50b01vbmV5RmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9kcml2ZXIvbWFnZW50by90ZXN0aW5nJztcbmltcG9ydCB7XG4gIERhZmZNb2RlbEZhY3RvcnksXG59IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgTWFnZW50b0NhcnRTaGlwcGluZ01ldGhvZCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvJztcblxuZXhwb3J0IGNsYXNzIE1vY2tDYXJ0U2hpcHBpbmdNZXRob2QgaW1wbGVtZW50cyBNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kIHtcbiAgY2Fycmllcl9jb2RlID0gZmFrZXIucmFuZG9tLndvcmQoKTtcbiAgY2Fycmllcl90aXRsZSA9IGZha2VyLnJhbmRvbS53b3JkcygyKTtcbiAgbWV0aG9kX3RpdGxlID0gZmFrZXIucmFuZG9tLndvcmRzKDIpO1xuICBtZXRob2RfY29kZSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIGFtb3VudCA9IHRoaXMubW9uZXkoKTtcblxuICBwcml2YXRlIG1vbmV5KCk6IE1hZ2VudG9Nb25leSB7XG4gICAgcmV0dXJuIChuZXcgTWFnZW50b01vbmV5RmFjdG9yeSgpKS5jcmVhdGUoKVxuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9DYXJ0U2hpcHBpbmdNZXRob2RGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxNYWdlbnRvQ2FydFNoaXBwaW5nTWV0aG9kPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tDYXJ0U2hpcHBpbmdNZXRob2QpO1xuICB9XG59XG4iXX0=