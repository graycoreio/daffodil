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
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCountry = /** @class */ (function () {
    function MockCountry() {
        this.id = String(faker.random.number({ min: 1, max: 1000 }));
        this.name = faker.random.word();
        this.name_en = faker.random.word();
        this.alpha2 = faker.random.alphaNumeric(2);
        this.alpha3 = faker.random.alphaNumeric(3);
        this.subdivisions = [];
    }
    return MockCountry;
}());
export { MockCountry };
if (false) {
    /** @type {?} */
    MockCountry.prototype.id;
    /** @type {?} */
    MockCountry.prototype.name;
    /** @type {?} */
    MockCountry.prototype.name_en;
    /** @type {?} */
    MockCountry.prototype.alpha2;
    /** @type {?} */
    MockCountry.prototype.alpha3;
    /** @type {?} */
    MockCountry.prototype.subdivisions;
}
var DaffCountryFactory = /** @class */ (function (_super) {
    __extends(DaffCountryFactory, _super);
    function DaffCountryFactory() {
        return _super.call(this, MockCountry) || this;
    }
    DaffCountryFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCountryFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCountryFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCountryFactory_Factory() { return new DaffCountryFactory(); }, token: DaffCountryFactory, providedIn: "root" });
    return DaffCountryFactory;
}(DaffModelFactory));
export { DaffCountryFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NvdW50cnkuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUk1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQ7SUFBQTtRQUNFLE9BQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsU0FBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsV0FBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLFdBQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLHlCQUFzRDs7SUFDdEQsMkJBQTJCOztJQUM1Qiw4QkFBOEI7O0lBQzlCLDZCQUFzQzs7SUFDdEMsNkJBQXNDOztJQUN0QyxtQ0FBa0I7O0FBR25CO0lBR3dDLHNDQUE2QjtJQUNuRTtlQUNFLGtCQUFNLFdBQVcsQ0FBQztJQUNwQixDQUFDOztnQkFORixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs2QkFsQkQ7Q0F1QkMsQUFQRCxDQUd3QyxnQkFBZ0IsR0FJdkQ7U0FKWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQ291bnRyeSBpbXBsZW1lbnRzIERhZmZDb3VudHJ5IHtcbiAgaWQgPSBTdHJpbmcoZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KSk7XG4gIG5hbWUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuXHRuYW1lX2VuID0gZmFrZXIucmFuZG9tLndvcmQoKTtcblx0YWxwaGEyID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygyKTtcblx0YWxwaGEzID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygzKTtcblx0c3ViZGl2aXNpb25zID0gW107XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDb3VudHJ5RmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNvdW50cnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja0NvdW50cnkpO1xuICB9XG59XG4iXX0=