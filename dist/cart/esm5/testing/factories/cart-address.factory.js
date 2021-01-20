/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
var MockCartAddress = /** @class */ (function () {
    function MockCartAddress() {
        this.address_id = faker.random.number({ min: 1, max: 1000 });
        this.address_type = 'apartment';
        this.email = 'email@email.com';
        this.prefix = 'prefix';
        this.firstname = 'first';
        this.middlename = 'middle';
        this.lastname = 'last';
        this.suffix = 'suffix';
        this.company = 'company';
        this.street = 'street';
        this.city = 'city';
        this.state = 'state';
        this.region = 'region';
        this.postcode = 'postcode';
        this.country_id = 'ISO';
        this.telephone = '+1 (123)-123-1234';
    }
    return MockCartAddress;
}());
export { MockCartAddress };
if (false) {
    /** @type {?} */
    MockCartAddress.prototype.address_id;
    /** @type {?} */
    MockCartAddress.prototype.address_type;
    /** @type {?} */
    MockCartAddress.prototype.email;
    /** @type {?} */
    MockCartAddress.prototype.prefix;
    /** @type {?} */
    MockCartAddress.prototype.firstname;
    /** @type {?} */
    MockCartAddress.prototype.middlename;
    /** @type {?} */
    MockCartAddress.prototype.lastname;
    /** @type {?} */
    MockCartAddress.prototype.suffix;
    /** @type {?} */
    MockCartAddress.prototype.company;
    /** @type {?} */
    MockCartAddress.prototype.street;
    /** @type {?} */
    MockCartAddress.prototype.city;
    /** @type {?} */
    MockCartAddress.prototype.state;
    /** @type {?} */
    MockCartAddress.prototype.region;
    /** @type {?} */
    MockCartAddress.prototype.postcode;
    /** @type {?} */
    MockCartAddress.prototype.country_id;
    /** @type {?} */
    MockCartAddress.prototype.telephone;
}
var DaffCartAddressFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DaffCartAddressFactory, _super);
    function DaffCartAddressFactory() {
        return _super.call(this, MockCartAddress) || this;
    }
    DaffCartAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffCartAddressFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffCartAddressFactory_Factory() { return new DaffCartAddressFactory(); }, token: DaffCartAddressFactory, providedIn: "root" });
    return DaffCartAddressFactory;
}(DaffModelFactory));
export { DaffCartAddressFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL2NhcnQtYWRkcmVzcy5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRDtJQUFBO1FBQ0UsZUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUN0RCxpQkFBWSxHQUFHLFdBQVcsQ0FBQztRQUMzQixVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixjQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFDcEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixTQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ2QsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixXQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxVQUFVLENBQUM7UUFDdEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7OztJQWhCQyxxQ0FBc0Q7O0lBQ3RELHVDQUEyQjs7SUFDM0IsZ0NBQTBCOztJQUMxQixpQ0FBa0I7O0lBQ2xCLG9DQUFvQjs7SUFDcEIscUNBQXNCOztJQUN0QixtQ0FBa0I7O0lBQ2xCLGlDQUFrQjs7SUFDbEIsa0NBQW9COztJQUNwQixpQ0FBa0I7O0lBQ2xCLCtCQUFjOztJQUNkLGdDQUFnQjs7SUFDaEIsaUNBQWtCOztJQUNsQixtQ0FBc0I7O0lBQ3RCLHFDQUFtQjs7SUFDbkIsb0NBQWdDOztBQUdsQztJQUc0QyxrREFBaUM7SUFFM0U7ZUFDRSxrQkFBTSxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Z0JBUEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7aUNBM0JEO0NBaUNDLEFBUkQsQ0FHNEMsZ0JBQWdCLEdBSzNEO1NBTFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja0NhcnRBZGRyZXNzIGltcGxlbWVudHMgRGFmZkNhcnRBZGRyZXNzIHtcbiAgYWRkcmVzc19pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gIGFkZHJlc3NfdHlwZSA9ICdhcGFydG1lbnQnO1xuICBlbWFpbCA9ICdlbWFpbEBlbWFpbC5jb20nO1xuICBwcmVmaXggPSAncHJlZml4JztcbiAgZmlyc3RuYW1lID0gJ2ZpcnN0JztcbiAgbWlkZGxlbmFtZSA9ICdtaWRkbGUnO1xuICBsYXN0bmFtZSA9ICdsYXN0JztcbiAgc3VmZml4ID0gJ3N1ZmZpeCc7XG4gIGNvbXBhbnkgPSAnY29tcGFueSc7XG4gIHN0cmVldCA9ICdzdHJlZXQnO1xuICBjaXR5ID0gJ2NpdHknO1xuICBzdGF0ZSA9ICdzdGF0ZSc7XG4gIHJlZ2lvbiA9ICdyZWdpb24nO1xuICBwb3N0Y29kZSA9ICdwb3N0Y29kZSc7XG4gIGNvdW50cnlfaWQgPSAnSVNPJztcbiAgdGVsZXBob25lID0gJysxICgxMjMpLTEyMy0xMjM0Jztcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRBZGRyZXNzRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkNhcnRBZGRyZXNzPiB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihNb2NrQ2FydEFkZHJlc3MpO1xuICB9XG59XG4iXX0=