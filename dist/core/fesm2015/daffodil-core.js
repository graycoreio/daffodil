import { Injectable, ɵɵdefineInjectable, Inject, PLATFORM_ID, ɵɵinject, InjectionToken, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { pipe, throwError, timer } from 'rxjs';
import { retryWhen, mergeMap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A function to add long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are less than
 * 16 significant figures and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
function daffAdd(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffAdd.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => {
        return acc + Math.round(number * precision);
    }), 0) / precision;
}
/**
 * A function to subtract long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than
 * 16 significant figures and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
function daffSubtract(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffSubtract.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.slice(1).reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => acc - Math.round(number * precision)), Math.round(numbers[0] * precision)) / precision;
}
/**
 * A function to multiply long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
 * and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
function daffMultiply(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffMultiply.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => acc * Math.round(number * precision)), 1) / Math.pow(precision, numbers.length);
}
/**
 * A function to divide long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
 * and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
function daffDivide(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffDivide.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.slice(1).reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => acc / Math.round(number * precision)), Math.round(numbers[0] * precision)) * Math.pow(precision, numbers.length - 2);
}
/**
 * A helper function to get the number of decimal significant figures of a number.
 * This function will fail if the given number has more than 16 significant figures or
 * the value of the number is greater than 10^11
 * @param {?} number
 * @return {?}
 */
function daffPrecision(number) {
    /** @type {?} */
    let p = 10000;
    if (number === undefined || number === null)
        return p;
    while (Math.round(number * p) / p !== number) {
        p *= 10;
    }
    return p;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Range
 *
 * Range accepts two inputs, a `start` and an `end`
 * and returns an array filled with numbers from
 * `start` to `end`.
 *
 * \@param start
 * \@param end
 * \@return number
 * @type {?}
 */
const range = (/**
 * @param {?} start
 * @param {?} end
 * @return {?}
 */
(start, end) => Array.apply(null, Array(end - start + 1)).map((/**
 * @param {?} val
 * @param {?} index
 * @return {?}
 */
(val, index) => index + start)));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Immutable Fisher-Yates Shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @type {?}
 */
const shuffle = (/**
 * @template T
 * @param {?} array
 * @return {?}
 */
(array) => {
    /** @type {?} */
    const result = [];
    array.forEach((/**
     * @param {?} el
     * @param {?} i
     * @return {?}
     */
    (el, i) => {
        /** @type {?} */
        const s = Math.floor(Math.random() * i);
        if (s !== i) {
            result[i] = result[s];
        }
        result[s] = el;
    }));
    return result;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns a random subset of an array in a random order.
 * \@param array
 * \@param length
 * @type {?}
 */
const randomSubset = (/**
 * @template T
 * @param {?} array
 * @param {?=} length
 * @return {?}
 */
(array, length) => {
    if (length > array.length) {
        throw new Error('Requested length is longer than array length.');
    }
    length = length ? length : Math.floor(Math.random() * array.length);
    return shuffle(array).slice(0, length);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns a random slice of an array.
 * \@param array
 * @type {?}
 */
const randomSlice = (/**
 * @template T
 * @param {?} array
 * @return {?}
 */
(array) => {
    if (array.length === 0) {
        return [];
    }
    ;
    /** @type {?} */
    const start = Math.floor(Math.random() * Math.floor(array.length - 1));
    /** @type {?} */
    const end = start + Math.floor(Math.random() * (array.length - 1 - start));
    return array.slice(start, end);
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A class which allows you to appropriately check the inheritance of an error.
 *
 * In typescript, when you try to extend an error with a specialized error class,
 * if you try to call something like:
 *
 * ```ts
 * class MyError extends Error {}
 *
 * let myError = new MyError();
 *
 * myError instanceof MyError; // returns false
 * ```
 *
 * You will see unexpected things. This class fixes that issue as described here
 * https://github.com/microsoft/TypeScript/issues/13965
 */
class DaffInheritableError extends Error {
    /**
     * @param {?=} message
     */
    constructor(message) {
        /** @type {?} */
        const trueProto = new.target.prototype;
        super(message);
        Object.setPrototypeOf(this, trueProto);
    }
}
if (false) {
    /** @type {?} */
    DaffInheritableError.prototype.__proto__;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffStorageServiceError extends DaffInheritableError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_STORAGE_FAILURE';
    }
}
if (false) {
    /** @type {?} */
    DaffStorageServiceError.prototype.code;
    /** @type {?} */
    DaffStorageServiceError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffErrorStorageService {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        this.throwError();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        this.throwError();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        this.throwError();
    }
    /**
     * @return {?}
     */
    clear() {
        this.throwError();
    }
    /**
     * @private
     * @return {?}
     */
    throwError() {
        throw new DaffStorageServiceError(DaffErrorStorageService.ERROR_MESSAGE);
    }
}
DaffErrorStorageService.ERROR_MESSAGE = 'The DaffErrorStorageService always throws an error.';
DaffErrorStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffErrorStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffErrorStorageService_Factory() { return new DaffErrorStorageService(); }, token: DaffErrorStorageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffErrorStorageService.ERROR_MESSAGE;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An error thrown when there is an attempt to access storage on the server and none is available.
 */
class DaffServerSideStorageError extends DaffStorageServiceError {
    /**
     * @param {?} message
     */
    constructor(message) {
        super(message);
        this.message = message;
        this.code = 'DAFF_SERVER_STORAGE_FAILURE';
    }
}
if (false) {
    /** @type {?} */
    DaffServerSideStorageError.prototype.code;
    /** @type {?} */
    DaffServerSideStorageError.prototype.message;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A storage service meant to be loaded into SSR contexts.
 * It will always throw the {\@link DaffServerSideStorageError}.
 */
class DaffServerErrorStorageService {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        this.throwError();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        this.throwError();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        this.throwError();
    }
    /**
     * @return {?}
     */
    clear() {
        this.throwError();
    }
    /**
     * @private
     * @return {?}
     */
    throwError() {
        throw new DaffServerSideStorageError(DaffServerErrorStorageService.ERROR_MESSAGE);
    }
}
DaffServerErrorStorageService.ERROR_MESSAGE = 'The DaffServerErrorStorageService always throws an error.';
DaffServerErrorStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffServerErrorStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffServerErrorStorageService_Factory() { return new DaffServerErrorStorageService(); }, token: DaffServerErrorStorageService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffServerErrorStorageService.ERROR_MESSAGE;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffLocalStorageService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        if (!isPlatformBrowser(platformId)) {
            throw new Error('The DaffLocalStorageService can only be instantiated in the browser.');
        }
    }
    /**
     * Persist the given item into local storage.
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    /**
     * Retrieve the given item from localstorage.
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        return localStorage.getItem(key);
    }
    /**
     * Remove a given item from localstorage
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        localStorage.removeItem(key);
    }
    /**
     * @return {?}
     */
    clear() {
        localStorage.clear();
    }
}
DaffLocalStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffLocalStorageService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ DaffLocalStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffLocalStorageService_Factory() { return new DaffLocalStorageService(ɵɵinject(PLATFORM_ID)); }, token: DaffLocalStorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffNoopStorageService {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) { }
    ;
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) { }
    ;
    /**
     * @return {?}
     */
    clear() { }
    ;
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) { }
    ;
}
DaffNoopStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffNoopStorageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffNoopStorageService_Factory() { return new DaffNoopStorageService(); }, token: DaffNoopStorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffPersistenceService() { }
if (false) {
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DaffPersistenceService.prototype.setItem = function (key, value) { };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffPersistenceService.prototype.getItem = function (key) { };
    /**
     * @return {?}
     */
    DaffPersistenceService.prototype.clear = function () { };
    /**
     * @param {?} key
     * @return {?}
     */
    DaffPersistenceService.prototype.removeItem = function (key) { };
}
/** @type {?} */
const DaffPersistenceServiceToken = new InjectionToken('DaffPersistenceService', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => isPlatformBrowser(inject(PLATFORM_ID))
        ? new DaffLocalStorageService(inject(PLATFORM_ID))
        : new DaffServerErrorStorageService()),
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Retries failed Observables
 * @param {?} maxTries The maximum number of tries the observable will be tried
 * @param {?} ms The initial amount of time
 * @return {?}
 */
function backoff(maxTries, ms) {
    return pipe(retryWhen((/**
     * @param {?} attempt
     * @return {?}
     */
    attempt => attempt.pipe(mergeMap((/**
     * @param {?} shadowedAttempt
     * @param {?} i
     * @return {?}
     */
    (shadowedAttempt, i) => {
        if (i >= maxTries)
            return throwError(shadowedAttempt);
        return timer(ms * Math.pow(2, i));
    }))))));
}

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

export { DaffErrorStorageService, DaffInheritableError, DaffLocalStorageService, DaffNoopStorageService, DaffPersistenceServiceToken, DaffServerErrorStorageService, DaffServerSideStorageError, DaffStorageServiceError, backoff, daffAdd, daffDivide, daffMultiply, daffSubtract, randomSlice, randomSubset, range, shuffle };
//# sourceMappingURL=daffodil-core.js.map
