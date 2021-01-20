/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockPaymentInfo {
    constructor() {
        this.name = 'name';
        this.cardnumber = 1234123412341234;
        this.month = 10;
        this.year = 2021;
        this.securitycode = 123;
    }
}
if (false) {
    /** @type {?} */
    MockPaymentInfo.prototype.name;
    /** @type {?} */
    MockPaymentInfo.prototype.cardnumber;
    /** @type {?} */
    MockPaymentInfo.prototype.month;
    /** @type {?} */
    MockPaymentInfo.prototype.year;
    /** @type {?} */
    MockPaymentInfo.prototype.securitycode;
}
export class DaffPaymentFactory extends DaffModelFactory {
    constructor() {
        super(MockPaymentInfo);
    }
}
DaffPaymentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPaymentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffPaymentFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffPaymentFactory_Factory() { return new DaffPaymentFactory(); }, token: DaffPaymentFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJwYXltZW50L2ZhY3Rvcmllcy9wYXltZW50LmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ0UsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGlCQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLENBQUM7Q0FBQTs7O0lBTEMsK0JBQWM7O0lBQ2QscUNBQThCOztJQUM5QixnQ0FBVzs7SUFDWCwrQkFBWTs7SUFDWix1Q0FBbUI7O0FBTXJCLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBNkI7SUFDbkU7UUFDRSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGF5bWVudEluZm8gfSBmcm9tICdAZGFmZm9kaWwvY2hlY2tvdXQnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrUGF5bWVudEluZm8gaW1wbGVtZW50cyBQYXltZW50SW5mbyB7XG4gIG5hbWUgPSAnbmFtZSc7XG4gIGNhcmRudW1iZXIgPSAxMjM0MTIzNDEyMzQxMjM0O1xuICBtb250aCA9IDEwO1xuICB5ZWFyID0gMjAyMTtcbiAgc2VjdXJpdHljb2RlID0gMTIzO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGF5bWVudEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PFBheW1lbnRJbmZvPiB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoTW9ja1BheW1lbnRJbmZvKTtcbiAgfVxufSJdfQ==