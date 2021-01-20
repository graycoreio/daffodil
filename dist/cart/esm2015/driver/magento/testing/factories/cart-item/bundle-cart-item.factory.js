/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory, } from '@daffodil/core/testing';
import { MagentoCartItemTypeEnum } from '@daffodil/cart/driver/magento';
import { MockMagentoCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
export class MockMagentoBundleCartItem extends MockMagentoCartItem {
    constructor() {
        super(...arguments);
        this.__typename = MagentoCartItemTypeEnum.Bundle;
        this.bundle_options = [
            {
                id: faker.random.number({ min: 1, max: 1000 }),
                type: 'radio',
                label: faker.random.word(),
                price: faker.random.number({ min: 1, max: 99 }),
                quantity: 1,
                values: [{
                        id: faker.random.number({ min: 1, max: 1000 }),
                        label: faker.random.word(),
                        price: faker.random.number({ min: 1, max: 99 }),
                        quantity: 1
                    }]
            }
        ];
    }
}
if (false) {
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.__typename;
    /** @type {?} */
    MockMagentoBundleCartItem.prototype.bundle_options;
}
export class MagentoBundleCartItemFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoBundleCartItem);
    }
}
MagentoBundleCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoBundleCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoBundleCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoBundleCartItemFactory_Factory() { return new MagentoBundleCartItemFactory(); }, token: MagentoBundleCartItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vYnVuZGxlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUNMLGdCQUFnQixHQUNqQixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBeUIsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG1CQUFtQjtJQUFsRTs7UUFDRSxlQUFVLEdBQUcsdUJBQXVCLENBQUMsTUFBTSxDQUFDO1FBQzVDLG1CQUFjLEdBQUc7WUFDakI7Z0JBQ0MsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUM7Z0JBQzVDLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDMUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBQzdDLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE1BQU0sRUFBRSxDQUFDO3dCQUNSLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDO3dCQUMzQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQzFCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO3dCQUM3QyxRQUFRLEVBQUUsQ0FBQztxQkFDWCxDQUFDO2FBQ0Y7U0FDRCxDQUFDO0lBQ0gsQ0FBQztDQUFBOzs7SUFoQkMsK0NBQTRDOztJQUM1QyxtREFjQzs7QUFNSCxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsZ0JBQXVDO0lBRXZGO1FBQ0UsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDbkMsQ0FBQzs7O1lBUEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHtcbiAgRGFmZk1vZGVsRmFjdG9yeSxcbn0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5pbXBvcnQgeyBNYWdlbnRvQ2FydEl0ZW1UeXBlRW51bSwgTWFnZW50b0J1bmRsZUNhcnRJdGVtIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuXG5pbXBvcnQgeyBNb2NrTWFnZW50b0NhcnRJdGVtIH0gZnJvbSAnLi9jYXJ0LWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrTWFnZW50b0J1bmRsZUNhcnRJdGVtIGV4dGVuZHMgTW9ja01hZ2VudG9DYXJ0SXRlbSBpbXBsZW1lbnRzIE1hZ2VudG9CdW5kbGVDYXJ0SXRlbSB7XG4gIF9fdHlwZW5hbWUgPSBNYWdlbnRvQ2FydEl0ZW1UeXBlRW51bS5CdW5kbGU7XG4gIGJ1bmRsZV9vcHRpb25zID0gW1xuXHRcdHtcblx0XHRcdGlkOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pLFxuXHRcdFx0dHlwZTogJ3JhZGlvJyxcblx0XHRcdGxhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0cHJpY2U6IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiA5OX0pLFxuXHRcdFx0cXVhbnRpdHk6IDEsXG5cdFx0XHR2YWx1ZXM6IFt7XG5cdFx0XHRcdGlkOiBmYWtlci5yYW5kb20ubnVtYmVyKHttaW46MSwgbWF4OiAxMDAwfSksXG5cdFx0XHRcdGxhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0XHRwcmljZTogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDk5fSksXG5cdFx0XHRcdHF1YW50aXR5OiAxXG5cdFx0XHR9XVxuXHRcdH1cblx0XTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFnZW50b0J1bmRsZUNhcnRJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b0J1bmRsZUNhcnRJdGVtPiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrTWFnZW50b0J1bmRsZUNhcnRJdGVtKTtcbiAgfVxufVxuIl19