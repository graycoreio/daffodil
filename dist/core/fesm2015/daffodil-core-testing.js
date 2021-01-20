import { Injectable, ɵɵdefineInjectable, Pipe, NgModule } from '@angular/core';
import { name, address, internet, phone } from 'faker/locale/en_US';
import { range } from '@daffodil/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function ArglessConstructable() { }
/**
 * @abstract
 * @template T
 */
class DaffModelFactory {
    /**
     * @param {?} type
     */
    constructor(type) {
        this.type = type;
    }
    /**
     * @param {?=} partial
     * @return {?}
     */
    create(partial = {}) {
        return Object.assign({}, (/** @type {?} */ (new this.type())), partial);
    }
    /**
     * @param {?=} qty
     * @param {?=} partial
     * @return {?}
     */
    createMany(qty = 1, partial = {}) {
        return range(0, qty - 1).map((/**
         * @return {?}
         */
        () => this.create(partial)));
    }
}
if (false) {
    /** @type {?} */
    DaffModelFactory.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
class MockDaffAddress {
    constructor() {
        this.firstname = name.firstName();
        this.lastname = name.lastName();
        this.street = address.streetName();
        this.city = address.city();
        this.state = address.stateAbbr();
        this.email = internet.email();
        this.postcode = address.zipCode();
        this.telephone = phone.phoneNumber();
    }
}
if (false) {
    /** @type {?} */
    MockDaffAddress.prototype.firstname;
    /** @type {?} */
    MockDaffAddress.prototype.lastname;
    /** @type {?} */
    MockDaffAddress.prototype.street;
    /** @type {?} */
    MockDaffAddress.prototype.city;
    /** @type {?} */
    MockDaffAddress.prototype.state;
    /** @type {?} */
    MockDaffAddress.prototype.email;
    /** @type {?} */
    MockDaffAddress.prototype.postcode;
    /** @type {?} */
    MockDaffAddress.prototype.telephone;
}
/**
 * @deprecated
 * Prefer the `DaffAddressFactory` of `daffodil/geography/testing`
 */
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
/**
 * \@docs
 * A mock CurrencyPipe that does nothing to a given input.
 * This pipe is useful for asserting that a CurrencyPipe is in use via a spy,
 * but ignoring the actual underlying implementation
 */
class DaffMockCurrencyPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) { }
    ;
}
DaffMockCurrencyPipe.decorators = [
    { type: Pipe, args: [{ name: 'currency' },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffCoreTestingModule {
}
DaffCoreTestingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DaffMockCurrencyPipe
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffAddressFactory, DaffCoreTestingModule, DaffMockCurrencyPipe, DaffModelFactory };
//# sourceMappingURL=daffodil-core-testing.js.map
