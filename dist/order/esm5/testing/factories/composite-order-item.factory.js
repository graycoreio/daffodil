var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MockCompositeOrderItem = /** @class */ (function (_super) {
    __extends(MockCompositeOrderItem, _super);
    function MockCompositeOrderItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = DaffOrderItemType.Composite;
        _this.options = [
            {
                option_label: faker.random.word(),
                value_label: faker.random.word()
            },
            {
                option_label: faker.random.word(),
                value_label: faker.random.word()
            }
        ];
        return _this;
    }
    return MockCompositeOrderItem;
}(MockOrderItem));
export { MockCompositeOrderItem };
if (false) {
    /** @type {?} */
    MockCompositeOrderItem.prototype.type;
    /** @type {?} */
    MockCompositeOrderItem.prototype.options;
}
var DaffCompositeOrderItemFactory = /** @class */ (function (_super) {
    __extends(DaffCompositeOrderItemFactory, _super);
    function DaffCompositeOrderItemFactory() {
        return _super.call(this, MockCompositeOrderItem) || this;
    }
    DaffCompositeOrderItemFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCompositeOrderItemFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCompositeOrderItemFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCompositeOrderItemFactory_Factory() { return new DaffCompositeOrderItemFactory(); }, token: DaffCompositeOrderItemFactory, providedIn: "root" });
    return DaffCompositeOrderItemFactory;
}(DaffModelFactory));
export { DaffCompositeOrderItemFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLW9yZGVyLWl0ZW0uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NvbXBvc2l0ZS1vcmRlci1pdGVtLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUEwQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFckQ7SUFBNEMsMENBQWE7SUFBekQ7UUFBQSxxRUFZQztRQVhBLFVBQUksR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7UUFDbkMsYUFBTyxHQUFHO1lBQ1Q7Z0JBQ0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNqQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7YUFDaEM7WUFDRDtnQkFDQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTthQUNoQztTQUNELENBQUM7O0lBQ0gsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQyxBQVpELENBQTRDLGFBQWEsR0FZeEQ7Ozs7SUFYQSxzQ0FBbUM7O0lBQ25DLHlDQVNFOztBQUdIO0lBR21ELGlEQUF3QztJQUN6RjtlQUNFLGtCQUFNLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3dDQXhCRDtDQTZCQyxBQVBELENBR21ELGdCQUFnQixHQUlsRTtTQUpZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZDb21wb3NpdGVPcmRlckl0ZW0sIERhZmZPcmRlckl0ZW1UeXBlIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgTW9ja09yZGVySXRlbSB9IGZyb20gJy4vb3JkZXItaXRlbS5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tDb21wb3NpdGVPcmRlckl0ZW0gZXh0ZW5kcyBNb2NrT3JkZXJJdGVtIGltcGxlbWVudHMgRGFmZkNvbXBvc2l0ZU9yZGVySXRlbSB7XG5cdHR5cGUgPSBEYWZmT3JkZXJJdGVtVHlwZS5Db21wb3NpdGU7XG5cdG9wdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0b3B0aW9uX2xhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpLFxuXHRcdFx0dmFsdWVfbGFiZWw6IGZha2VyLnJhbmRvbS53b3JkKClcblx0XHR9LFxuXHRcdHtcblx0XHRcdG9wdGlvbl9sYWJlbDogZmFrZXIucmFuZG9tLndvcmQoKSxcblx0XHRcdHZhbHVlX2xhYmVsOiBmYWtlci5yYW5kb20ud29yZCgpXG5cdFx0fVxuXHRdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29tcG9zaXRlT3JkZXJJdGVtRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNvbXBvc2l0ZU9yZGVySXRlbT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrQ29tcG9zaXRlT3JkZXJJdGVtKTtcbiAgfVxufVxuIl19