/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
export class DaffMockCompositeCartItem extends DaffMockCartItem {
    constructor() {
        super(...arguments);
        this.type = DaffCartItemInputType.Composite;
        this.options = [
            {
                option_id: faker.random.number(1000).toString(),
                option_label: faker.random.word(),
                value_label: faker.random.word()
            },
            {
                option_id: faker.random.number(1000).toString(),
                option_label: faker.random.word(),
                value_label: faker.random.word()
            }
        ];
    }
}
if (false) {
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.type;
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.options;
}
export class DaffCompositeCartItemFactory extends DaffModelFactory {
    constructor() {
        super(DaffMockCompositeCartItem);
    }
}
DaffCompositeCartItemFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCompositeCartItemFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCompositeCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCompositeCartItemFactory_Factory() { return new DaffCompositeCartItemFactory(); }, token: DaffCompositeCartItemFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vY29tcG9zaXRlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUF5QixxQkFBcUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUV2RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsZ0JBQWdCO0lBQS9EOztRQUNDLFNBQUksR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7UUFDdkMsWUFBTyxHQUFHO1lBQ1Q7Z0JBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNqQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDaEM7WUFDRDtnQkFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUMvQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTthQUNoQztTQUNELENBQUM7SUFDSCxDQUFDO0NBQUE7OztJQWJBLHlDQUF1Qzs7SUFDdkMsNENBV0U7O0FBTUgsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGdCQUF1QztJQUV2RjtRQUNFLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQVBGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZDb21wb3NpdGVDYXJ0SXRlbSwgRGFmZkNhcnRJdGVtSW5wdXRUeXBlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmTW9ja0NhcnRJdGVtIH0gZnJvbSAnLi9jYXJ0LWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBEYWZmTW9ja0NvbXBvc2l0ZUNhcnRJdGVtIGV4dGVuZHMgRGFmZk1vY2tDYXJ0SXRlbSBpbXBsZW1lbnRzIERhZmZDb21wb3NpdGVDYXJ0SXRlbSB7XG5cdHR5cGUgPSBEYWZmQ2FydEl0ZW1JbnB1dFR5cGUuQ29tcG9zaXRlO1xuXHRvcHRpb25zID0gW1xuXHRcdHtcblx0XHRcdG9wdGlvbl9pZDogZmFrZXIucmFuZG9tLm51bWJlcigxMDAwKS50b1N0cmluZygpLFxuXHRcdFx0b3B0aW9uX2xhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0dmFsdWVfbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKClcblx0XHR9LFxuXHRcdHtcblx0XHRcdG9wdGlvbl9pZDogZmFrZXIucmFuZG9tLm51bWJlcigxMDAwKS50b1N0cmluZygpLFxuXHRcdFx0b3B0aW9uX2xhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0dmFsdWVfbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKClcblx0XHR9XG5cdF07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb21wb3NpdGVDYXJ0SXRlbUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDb21wb3NpdGVDYXJ0SXRlbT4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoRGFmZk1vY2tDb21wb3NpdGVDYXJ0SXRlbSk7XG4gIH1cbn1cbiJdfQ==