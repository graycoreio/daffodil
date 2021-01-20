import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { address, name, internet, phone, random } from 'faker/locale/en_US';

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
var MockDaffAddress = /** @class */ (function () {
    function MockDaffAddress() {
        this.street = address.streetName();
        this.street2 = address.secondaryAddress();
        this.city = address.city();
        this.region = address.stateAbbr();
        this.postcode = address.zipCode();
        this.country = address.zipCode();
    }
    return MockDaffAddress;
}());
if (false) {
    /** @type {?} */
    MockDaffAddress.prototype.street;
    /** @type {?} */
    MockDaffAddress.prototype.street2;
    /** @type {?} */
    MockDaffAddress.prototype.city;
    /** @type {?} */
    MockDaffAddress.prototype.region;
    /** @type {?} */
    MockDaffAddress.prototype.postcode;
    /** @type {?} */
    MockDaffAddress.prototype.country;
}
var DaffAddressFactory = /** @class */ (function (_super) {
    __extends(DaffAddressFactory, _super);
    function DaffAddressFactory() {
        return _super.call(this, MockDaffAddress) || this;
    }
    DaffAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAddressFactory_Factory() { return new DaffAddressFactory(); }, token: DaffAddressFactory, providedIn: "root" });
    return DaffAddressFactory;
}(DaffModelFactory));

var __extends$1 = (this && this.__extends) || (function () {
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
var MockDaffPersonalAddress = /** @class */ (function (_super) {
    __extends$1(MockDaffPersonalAddress, _super);
    function MockDaffPersonalAddress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prefix = name.prefix();
        _this.suffix = name.suffix();
        _this.firstname = name.firstName();
        _this.middlename = name.firstName();
        _this.lastname = name.lastName();
        _this.email = internet.email();
        _this.telephone = phone.phoneNumber();
        return _this;
    }
    return MockDaffPersonalAddress;
}(MockDaffAddress));
if (false) {
    /** @type {?} */
    MockDaffPersonalAddress.prototype.prefix;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.suffix;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.firstname;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.middlename;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.lastname;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.email;
    /** @type {?} */
    MockDaffPersonalAddress.prototype.telephone;
}
var DaffPersonalAddressFactory = /** @class */ (function (_super) {
    __extends$1(DaffPersonalAddressFactory, _super);
    function DaffPersonalAddressFactory() {
        return _super.call(this, MockDaffPersonalAddress) || this;
    }
    DaffPersonalAddressFactory.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPersonalAddressFactory.ctorParameters = function () { return []; };
    /** @nocollapse */ DaffPersonalAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPersonalAddressFactory_Factory() { return new DaffPersonalAddressFactory(); }, token: DaffPersonalAddressFactory, providedIn: "root" });
    return DaffPersonalAddressFactory;
}(DaffModelFactory));

var __extends$2 = (this && this.__extends) || (function () {
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
var MockCountry = /** @class */ (function () {
    function MockCountry() {
        this.id = String(random.number({ min: 1, max: 1000 }));
        this.name = random.word();
        this.name_en = random.word();
        this.alpha2 = random.alphaNumeric(2);
        this.alpha3 = random.alphaNumeric(3);
        this.subdivisions = [];
    }
    return MockCountry;
}());
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
    __extends$2(DaffCountryFactory, _super);
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
    /** @nocollapse */ DaffCountryFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCountryFactory_Factory() { return new DaffCountryFactory(); }, token: DaffCountryFactory, providedIn: "root" });
    return DaffCountryFactory;
}(DaffModelFactory));

var __extends$3 = (this && this.__extends) || (function () {
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
var MockSubdivision = /** @class */ (function () {
    function MockSubdivision() {
        this.id = String(random.number({ min: 1, max: 1000 }));
        this.name = random.word();
        this.iso_3166_2 = random.alphaNumeric(2);
    }
    return MockSubdivision;
}());
if (false) {
    /** @type {?} */
    MockSubdivision.prototype.id;
    /** @type {?} */
    MockSubdivision.prototype.name;
    /** @type {?} */
    MockSubdivision.prototype.iso_3166_2;
}
var DaffSubdivisionFactory = /** @class */ (function (_super) {
    __extends$3(DaffSubdivisionFactory, _super);
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
    /** @nocollapse */ DaffSubdivisionFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffSubdivisionFactory_Factory() { return new DaffSubdivisionFactory(); }, token: DaffSubdivisionFactory, providedIn: "root" });
    return DaffSubdivisionFactory;
}(DaffModelFactory));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffAddressFactory, DaffCountryFactory, DaffPersonalAddressFactory, DaffSubdivisionFactory, MockCountry, MockDaffAddress, MockDaffPersonalAddress, MockSubdivision };
//# sourceMappingURL=daffodil-geography-testing.js.map
