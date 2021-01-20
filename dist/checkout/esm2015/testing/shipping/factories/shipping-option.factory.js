/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
export class MockShippingOption {
    constructor() {
        this.id = faker.random.number().toString();
        this.text = faker.company.companyName() + ' ' + faker.commerce.productAdjective() + ' Shipping';
    }
}
if (false) {
    /** @type {?} */
    MockShippingOption.prototype.id;
    /** @type {?} */
    MockShippingOption.prototype.text;
}
export class DaffShippingOptionFactory extends DaffModelFactory {
    constructor() {
        super(MockShippingOption);
    }
}
DaffShippingOptionFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShippingOptionFactory.ctorParameters = () => [];
/** @nocollapse */ DaffShippingOptionFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingOptionFactory_Factory() { return new DaffShippingOptionFactory(); }, token: DaffShippingOptionFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctb3B0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvdGVzdGluZy8iLCJzb3VyY2VzIjpbInNoaXBwaW5nL2ZhY3Rvcmllcy9zaGlwcGluZy1vcHRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDOztBQUU1QyxNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBQ0UsT0FBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsU0FBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxXQUFXLENBQUE7SUFDNUYsQ0FBQztDQUFBOzs7SUFGQyxnQ0FBc0M7O0lBQ3RDLGtDQUEwRjs7QUFNNUYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQztJQUM3RTtRQUNFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2hpcHBpbmdPcHRpb24gfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5leHBvcnQgY2xhc3MgTW9ja1NoaXBwaW5nT3B0aW9uIGltcGxlbWVudHMgU2hpcHBpbmdPcHRpb24ge1xuICBpZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoKS50b1N0cmluZygpO1xuICB0ZXh0ID0gZmFrZXIuY29tcGFueS5jb21wYW55TmFtZSgpICsgJyAnICsgZmFrZXIuY29tbWVyY2UucHJvZHVjdEFkamVjdGl2ZSgpICsgJyBTaGlwcGluZydcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlNoaXBwaW5nT3B0aW9uRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8U2hpcHBpbmdPcHRpb24+e1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKE1vY2tTaGlwcGluZ09wdGlvbik7XG4gIH1cbn0iXX0=