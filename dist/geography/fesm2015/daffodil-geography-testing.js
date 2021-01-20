import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { address, name, internet, phone, random } from 'faker/locale/en_US';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffAddress {
    constructor() {
        this.street = address.streetName();
        this.street2 = address.secondaryAddress();
        this.city = address.city();
        this.region = address.stateAbbr();
        this.postcode = address.zipCode();
        this.country = address.zipCode();
    }
}
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
class DaffAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockDaffAddress);
    }
}
DaffAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffAddressFactory_Factory() { return new DaffAddressFactory(); }, token: DaffAddressFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockDaffPersonalAddress extends MockDaffAddress {
    constructor() {
        super(...arguments);
        this.prefix = name.prefix();
        this.suffix = name.suffix();
        this.firstname = name.firstName();
        this.middlename = name.firstName();
        this.lastname = name.lastName();
        this.email = internet.email();
        this.telephone = phone.phoneNumber();
    }
}
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
class DaffPersonalAddressFactory extends DaffModelFactory {
    constructor() {
        super(MockDaffPersonalAddress);
    }
}
DaffPersonalAddressFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPersonalAddressFactory.ctorParameters = () => [];
/** @nocollapse */ DaffPersonalAddressFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPersonalAddressFactory_Factory() { return new DaffPersonalAddressFactory(); }, token: DaffPersonalAddressFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockCountry {
    constructor() {
        this.id = String(random.number({ min: 1, max: 1000 }));
        this.name = random.word();
        this.name_en = random.word();
        this.alpha2 = random.alphaNumeric(2);
        this.alpha3 = random.alphaNumeric(3);
        this.subdivisions = [];
    }
}
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
class DaffCountryFactory extends DaffModelFactory {
    constructor() {
        super(MockCountry);
    }
}
DaffCountryFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCountryFactory.ctorParameters = () => [];
/** @nocollapse */ DaffCountryFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCountryFactory_Factory() { return new DaffCountryFactory(); }, token: DaffCountryFactory, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MockSubdivision {
    constructor() {
        this.id = String(random.number({ min: 1, max: 1000 }));
        this.name = random.word();
        this.iso_3166_2 = random.alphaNumeric(2);
    }
}
if (false) {
    /** @type {?} */
    MockSubdivision.prototype.id;
    /** @type {?} */
    MockSubdivision.prototype.name;
    /** @type {?} */
    MockSubdivision.prototype.iso_3166_2;
}
class DaffSubdivisionFactory extends DaffModelFactory {
    constructor() {
        super(MockSubdivision);
    }
}
DaffSubdivisionFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffSubdivisionFactory.ctorParameters = () => [];
/** @nocollapse */ DaffSubdivisionFactory.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffSubdivisionFactory_Factory() { return new DaffSubdivisionFactory(); }, token: DaffSubdivisionFactory, providedIn: "root" });

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
