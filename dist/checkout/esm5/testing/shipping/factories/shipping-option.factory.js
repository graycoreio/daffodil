/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
var MockShippingOption = /** @class */ (function () {
    function MockShippingOption() {
        this.id = faker.random.number().toString();
        this.text = faker.company.companyName() + ' ' + faker.commerce.productAdjective() + ' Shipping';
    }
    return MockShippingOption;
}());
export { MockShippingOption };
if (false) {
    /** @type {?} */
    MockShippingOption.prototype.id;
    /** @type {?} */
    MockShippingOption.prototype.text;
}
var DaffShippingOptionFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffShippingOptionFactory, _super);
    function DaffShippingOptionFactory() {
        return _super.call(this, MockShippingOption) || this;
    }
    DaffShippingOptionFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingOptionFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffShippingOptionFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffShippingOptionFactory_Factory() { return new DaffShippingOptionFactory(); }, token: DaffShippingOptionFactory, providedIn: "root" });
    return DaffShippingOptionFactory;
}(DaffModelFactory));
export { DaffShippingOptionFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmctb3B0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2hlY2tvdXQvdGVzdGluZy8iLCJzb3VyY2VzIjpbInNoaXBwaW5nL2ZhY3Rvcmllcy9zaGlwcGluZy1vcHRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQzs7QUFFNUM7SUFBQTtRQUNFLE9BQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLFNBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsV0FBVyxDQUFBO0lBQzVGLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsZ0NBQXNDOztJQUN0QyxrQ0FBMEY7O0FBRzVGO0lBRytDLHFEQUFnQztJQUM3RTtlQUNFLGtCQUFNLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7O2dCQU5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O29DQWREO0NBbUJDLEFBUEQsQ0FHK0MsZ0JBQWdCLEdBSTlEO1NBSlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGlwcGluZ09wdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jaGVja291dCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrU2hpcHBpbmdPcHRpb24gaW1wbGVtZW50cyBTaGlwcGluZ09wdGlvbiB7XG4gIGlkID0gZmFrZXIucmFuZG9tLm51bWJlcigpLnRvU3RyaW5nKCk7XG4gIHRleHQgPSBmYWtlci5jb21wYW55LmNvbXBhbnlOYW1lKCkgKyAnICcgKyBmYWtlci5jb21tZXJjZS5wcm9kdWN0QWRqZWN0aXZlKCkgKyAnIFNoaXBwaW5nJ1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmU2hpcHBpbmdPcHRpb25GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxTaGlwcGluZ09wdGlvbj57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja1NoaXBwaW5nT3B0aW9uKTtcbiAgfVxufSJdfQ==