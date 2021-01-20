/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffCartItemInputType } from '@daffodil/cart';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffMockCartItem } from './cart-item.factory';
import * as i0 from "@angular/core";
var DaffMockCompositeCartItem = /** @class */ (function (_super) {
    tslib_1.__extends(DaffMockCompositeCartItem, _super);
    function DaffMockCompositeCartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffCartItemInputType.Composite;
        _this.options = [
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
        return _this;
    }
    return DaffMockCompositeCartItem;
}(DaffMockCartItem));
export { DaffMockCompositeCartItem };
if (false) {
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.type;
    /** @type {?} */
    DaffMockCompositeCartItem.prototype.options;
}
var DaffCompositeCartItemFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCompositeCartItemFactory, _super);
    function DaffCompositeCartItemFactory() {
        return _super.call(this, DaffMockCompositeCartItem) || this;
    }
    DaffCompositeCartItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCompositeCartItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCompositeCartItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCompositeCartItemFactory_Factory() { return new DaffCompositeCartItemFactory(); }, token: DaffCompositeCartItemFactory, providedIn: "root" });
    return DaffCompositeCartItemFactory;
}(DaffModelFactory));
export { DaffCompositeCartItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLWNhcnQtaXRlbS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9jYXJ0LWl0ZW0vY29tcG9zaXRlLWNhcnQtaXRlbS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE9BQU8sRUFBeUIscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFdkQ7SUFBK0MscURBQWdCO0lBQS9EO1FBQUEscUVBY0M7UUFiQSxVQUFJLEdBQUcscUJBQXFCLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLGFBQU8sR0FBRztZQUNUO2dCQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQy9DLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDakMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2FBQ2hDO1lBQ0Q7Z0JBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNqQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDaEM7U0FDRCxDQUFDOztJQUNILENBQUM7SUFBRCxnQ0FBQztBQUFELENBQUMsQUFkRCxDQUErQyxnQkFBZ0IsR0FjOUQ7Ozs7SUFiQSx5Q0FBdUM7O0lBQ3ZDLDRDQVdFOztBQUdIO0lBR2tELHdEQUF1QztJQUV2RjtlQUNFLGtCQUFNLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7O2dCQVBGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3VDQTFCRDtDQWdDQyxBQVJELENBR2tELGdCQUFnQixHQUtqRTtTQUxZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZDb21wb3NpdGVDYXJ0SXRlbSwgRGFmZkNhcnRJdGVtSW5wdXRUeXBlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmTW9ja0NhcnRJdGVtIH0gZnJvbSAnLi9jYXJ0LWl0ZW0uZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBEYWZmTW9ja0NvbXBvc2l0ZUNhcnRJdGVtIGV4dGVuZHMgRGFmZk1vY2tDYXJ0SXRlbSBpbXBsZW1lbnRzIERhZmZDb21wb3NpdGVDYXJ0SXRlbSB7XG5cdHR5cGUgPSBEYWZmQ2FydEl0ZW1JbnB1dFR5cGUuQ29tcG9zaXRlO1xuXHRvcHRpb25zID0gW1xuXHRcdHtcblx0XHRcdG9wdGlvbl9pZDogZmFrZXIucmFuZG9tLm51bWJlcigxMDAwKS50b1N0cmluZygpLFxuXHRcdFx0b3B0aW9uX2xhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0dmFsdWVfbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKClcblx0XHR9LFxuXHRcdHtcblx0XHRcdG9wdGlvbl9pZDogZmFrZXIucmFuZG9tLm51bWJlcigxMDAwKS50b1N0cmluZygpLFxuXHRcdFx0b3B0aW9uX2xhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0dmFsdWVfbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKClcblx0XHR9XG5cdF07XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb21wb3NpdGVDYXJ0SXRlbUZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZDb21wb3NpdGVDYXJ0SXRlbT4ge1xuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoRGFmZk1vY2tDb21wb3NpdGVDYXJ0SXRlbSk7XG4gIH1cbn1cbiJdfQ==