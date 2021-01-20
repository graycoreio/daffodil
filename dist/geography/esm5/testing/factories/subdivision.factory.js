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
var MockSubdivision = /** @class */ (function () {
    function MockSubdivision() {
        this.id = String(faker.random.number({ min: 1, max: 1000 }));
        this.name = faker.random.word();
        this.iso_3166_2 = faker.random.alphaNumeric(2);
    }
    return MockSubdivision;
}());
export { MockSubdivision };
if (false) {
    /** @type {?} */
    MockSubdivision.prototype.id;
    /** @type {?} */
    MockSubdivision.prototype.name;
    /** @type {?} */
    MockSubdivision.prototype.iso_3166_2;
}
var DaffSubdivisionFactory = /** @class */ (function (_super) {
    __extends(DaffSubdivisionFactory, _super);
    function DaffSubdivisionFactory() {
        return _super.call(this, MockSubdivision) || this;
    }
    DaffSubdivisionFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffSubdivisionFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffSubdivisionFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffSubdivisionFactory_Factory() { return new DaffSubdivisionFactory(); }, token: DaffSubdivisionFactory, providedIn: "root" });
    return DaffSubdivisionFactory;
}(DaffModelFactory));
export { DaffSubdivisionFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViZGl2aXNpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9zdWJkaXZpc2lvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBSTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsT0FBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxTQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyw2QkFBc0Q7O0lBQ3RELCtCQUEyQjs7SUFDNUIscUNBQTBDOztBQUczQztJQUc0QywwQ0FBaUM7SUFDM0U7ZUFDRSxrQkFBTSxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7aUNBZkQ7Q0FvQkMsQUFQRCxDQUc0QyxnQkFBZ0IsR0FJM0Q7U0FKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmU3ViZGl2aXNpb24gfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcblxuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja1N1YmRpdmlzaW9uIGltcGxlbWVudHMgRGFmZlN1YmRpdmlzaW9uIHtcbiAgaWQgPSBTdHJpbmcoZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KSk7XG4gIG5hbWUgPSBmYWtlci5yYW5kb20ud29yZCgpO1xuXHRpc29fMzE2Nl8yID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygyKTtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlN1YmRpdmlzaW9uRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZlN1YmRpdmlzaW9uPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tTdWJkaXZpc2lvbik7XG4gIH1cbn1cbiJdfQ==