import { __assign, __extends } from 'tslib';
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
var  /**
 * @abstract
 * @template T
 */
DaffModelFactory = /** @class */ (function () {
    function DaffModelFactory(type) {
        this.type = type;
    }
    /**
     * @param {?=} partial
     * @return {?}
     */
    DaffModelFactory.prototype.create = /**
     * @param {?=} partial
     * @return {?}
     */
    function (partial) {
        if (partial === void 0) { partial = {}; }
        return __assign({}, (/** @type {?} */ (new this.type())), partial);
    };
    /**
     * @param {?=} qty
     * @param {?=} partial
     * @return {?}
     */
    DaffModelFactory.prototype.createMany = /**
     * @param {?=} qty
     * @param {?=} partial
     * @return {?}
     */
    function (qty, partial) {
        var _this = this;
        if (qty === void 0) { qty = 1; }
        if (partial === void 0) { partial = {}; }
        return range(0, qty - 1).map((/**
         * @return {?}
         */
        function () { return _this.create(partial); }));
    };
    return DaffModelFactory;
}());
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
var /**
 * @deprecated
 * Prefer the `MockDaffAddress` of daffodil/geography/testing`
 */
MockDaffAddress = /** @class */ (function () {
    function MockDaffAddress() {
        this.firstname = name.firstName();
        this.lastname = name.lastName();
        this.street = address.streetName();
        this.city = address.city();
        this.state = address.stateAbbr();
        this.email = internet.email();
        this.postcode = address.zipCode();
        this.telephone = phone.phoneNumber();
    }
    return MockDaffAddress;
}());
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
var DaffMockCurrencyPipe = /** @class */ (function () {
    function DaffMockCurrencyPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DaffMockCurrencyPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
    ;
    DaffMockCurrencyPipe.decorators = [
        { type: Pipe, args: [{ name: 'currency' },] }
    ];
    return DaffMockCurrencyPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCoreTestingModule = /** @class */ (function () {
    function DaffCoreTestingModule() {
    }
    DaffCoreTestingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DaffMockCurrencyPipe
                    ]
                },] }
    ];
    return DaffCoreTestingModule;
}());

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
