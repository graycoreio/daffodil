/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffOrderItemType } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockOrderItem } from './order-item.factory';
import * as i0 from "@angular/core";
export class MockCompositeOrderItem extends MockOrderItem {
    constructor() {
        super(...arguments);
        this.type = DaffOrderItemType.Composite;
        this.options = [
            {
                option_label: faker.random.word(),
                value_label: faker.random.word()
            },
            {
                option_label: faker.random.word(),
                value_label: faker.random.word()
            }
        ];
    }
}
if (false) {
    /** @type {?} */
    MockCompositeOrderItem.prototype.type;
    /** @type {?} */
    MockCompositeOrderItem.prototype.options;
}
export class DaffCompositeOrderItemFactory extends DaffModelFactory {
    constructor() {
        super(MockCompositeOrderItem);
    }
}
DaffCompositeOrderItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCompositeOrderItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCompositeOrderItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCompositeOrderItemFactory_Factory() { return new DaffCompositeOrderItemFactory(); }, token: DaffCompositeOrderItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLW9yZGVyLWl0ZW0uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NvbXBvc2l0ZS1vcmRlci1pdGVtLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQTBCLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVyRCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsYUFBYTtJQUF6RDs7UUFDQyxTQUFJLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1FBQ25DLFlBQU8sR0FBRztZQUNUO2dCQUNDLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDakMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2FBQ2hDO1lBQ0Q7Z0JBQ0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNqQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDaEM7U0FDRCxDQUFDO0lBQ0gsQ0FBQztDQUFBOzs7SUFYQSxzQ0FBbUM7O0lBQ25DLHlDQVNFOztBQU1ILE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxnQkFBd0M7SUFDekY7UUFDRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUFORixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ29tcG9zaXRlT3JkZXJJdGVtLCBEYWZmT3JkZXJJdGVtVHlwZSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlcic7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IE1vY2tPcmRlckl0ZW0gfSBmcm9tICcuL29yZGVyLWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ29tcG9zaXRlT3JkZXJJdGVtIGV4dGVuZHMgTW9ja09yZGVySXRlbSBpbXBsZW1lbnRzIERhZmZDb21wb3NpdGVPcmRlckl0ZW0ge1xuXHR0eXBlID0gRGFmZk9yZGVySXRlbVR5cGUuQ29tcG9zaXRlO1xuXHRvcHRpb25zID0gW1xuXHRcdHtcblx0XHRcdG9wdGlvbl9sYWJlbDogZmFrZXIucmFuZG9tLndvcmQoKSxcblx0XHRcdHZhbHVlX2xhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRvcHRpb25fbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKCksXG5cdFx0XHR2YWx1ZV9sYWJlbDogZmFrZXIucmFuZG9tLndvcmQoKVxuXHRcdH1cblx0XTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNvbXBvc2l0ZU9yZGVySXRlbUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDb21wb3NpdGVPcmRlckl0ZW0+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja0NvbXBvc2l0ZU9yZGVySXRlbSk7XG4gIH1cbn1cbiJdfQ==