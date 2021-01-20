(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@daffodil/core/testing'), require('faker/locale/en_US')) :
    typeof define === 'function' && define.amd ? define('@daffodil/geography/testing', ['exports', '@angular/core', '@daffodil/core/testing', 'faker/locale/en_US'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.geography = global.daffodil.geography || {}, global.daffodil.geography.testing = {}), global.ng.core, global.testing, global.en_US));
}(this, function (exports, core, testing, en_US) { 'use strict';

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
            this.street = en_US.address.streetName();
            this.street2 = en_US.address.secondaryAddress();
            this.city = en_US.address.city();
            this.region = en_US.address.stateAbbr();
            this.postcode = en_US.address.zipCode();
            this.country = en_US.address.zipCode();
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffAddressFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffAddressFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffAddressFactory_Factory() { return new DaffAddressFactory(); }, token: DaffAddressFactory, providedIn: "root" });
        return DaffAddressFactory;
    }(testing.DaffModelFactory));

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
            _this.prefix = en_US.name.prefix();
            _this.suffix = en_US.name.suffix();
            _this.firstname = en_US.name.firstName();
            _this.middlename = en_US.name.firstName();
            _this.lastname = en_US.name.lastName();
            _this.email = en_US.internet.email();
            _this.telephone = en_US.phone.phoneNumber();
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffPersonalAddressFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffPersonalAddressFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffPersonalAddressFactory_Factory() { return new DaffPersonalAddressFactory(); }, token: DaffPersonalAddressFactory, providedIn: "root" });
        return DaffPersonalAddressFactory;
    }(testing.DaffModelFactory));

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
            this.id = String(en_US.random.number({ min: 1, max: 1000 }));
            this.name = en_US.random.word();
            this.name_en = en_US.random.word();
            this.alpha2 = en_US.random.alphaNumeric(2);
            this.alpha3 = en_US.random.alphaNumeric(3);
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffCountryFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffCountryFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCountryFactory_Factory() { return new DaffCountryFactory(); }, token: DaffCountryFactory, providedIn: "root" });
        return DaffCountryFactory;
    }(testing.DaffModelFactory));

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
            this.id = String(en_US.random.number({ min: 1, max: 1000 }));
            this.name = en_US.random.word();
            this.iso_3166_2 = en_US.random.alphaNumeric(2);
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffSubdivisionFactory.ctorParameters = function () { return []; };
        /** @nocollapse */ DaffSubdivisionFactory.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffSubdivisionFactory_Factory() { return new DaffSubdivisionFactory(); }, token: DaffSubdivisionFactory, providedIn: "root" });
        return DaffSubdivisionFactory;
    }(testing.DaffModelFactory));

    exports.DaffAddressFactory = DaffAddressFactory;
    exports.DaffCountryFactory = DaffCountryFactory;
    exports.DaffPersonalAddressFactory = DaffPersonalAddressFactory;
    exports.DaffSubdivisionFactory = DaffSubdivisionFactory;
    exports.MockCountry = MockCountry;
    exports.MockDaffAddress = MockDaffAddress;
    exports.MockDaffPersonalAddress = MockDaffPersonalAddress;
    exports.MockSubdivision = MockSubdivision;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-geography-testing.umd.js.map
