/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffCustomerRegistrationFactory } from './customer-registration.factory';
import * as i0 from "@angular/core";
export class MockAccountRegistration {
    constructor() {
        this.customer = this.fakeCustomer();
        this.password = faker.random.alphaNumeric(16);
    }
    /**
     * @private
     * @return {?}
     */
    fakeCustomer() {
        /** @type {?} */
        const factory = new DaffCustomerRegistrationFactory();
        return factory.create();
    }
}
if (false) {
    /** @type {?} */
    MockAccountRegistration.prototype.customer;
    /** @type {?} */
    MockAccountRegistration.prototype.password;
}
;
export class DaffAccountRegistrationFactory extends DaffModelFactory {
    constructor() {
        super(MockAccountRegistration);
    }
}
DaffAccountRegistrationFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAccountRegistrationFactory.ctorParameters = () => [];
/** @nocollapse */ DaffAccountRegistrationFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAccountRegistrationFactory_Factory() { return new DaffAccountRegistrationFactory(); }, token: DaffAccountRegistrationFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1yZWdpc3RyYXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvYWNjb3VudC1yZWdpc3RyYXRpb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQUVsRixNQUFNLE9BQU8sdUJBQXVCO0lBQXBDO1FBQ0UsYUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFPM0MsQ0FBQzs7Ozs7SUFMUyxZQUFZOztjQUNaLE9BQU8sR0FBRyxJQUFJLCtCQUErQixFQUFFO1FBRXJELE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3pCLENBQUM7Q0FDRjs7O0lBUkMsMkNBQStCOztJQUMvQiwyQ0FBeUM7O0FBTzFDLENBQUM7QUFLRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsZ0JBQXlDO0lBQzNGO1FBQ0UsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBTkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkFjY291bnRSZWdpc3RyYXRpb24sIERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9hdXRoJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcbmltcG9ydCB7IERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbkZhY3RvcnkgfSBmcm9tICcuL2N1c3RvbWVyLXJlZ2lzdHJhdGlvbi5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE1vY2tBY2NvdW50UmVnaXN0cmF0aW9uIGltcGxlbWVudHMgRGFmZkFjY291bnRSZWdpc3RyYXRpb24ge1xuICBjdXN0b21lciA9IHRoaXMuZmFrZUN1c3RvbWVyKCk7XG4gIHBhc3N3b3JkID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNik7XG5cbiAgcHJpdmF0ZSBmYWtlQ3VzdG9tZXIoKTogRGFmZkN1c3RvbWVyUmVnaXN0cmF0aW9uIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gbmV3IERhZmZDdXN0b21lclJlZ2lzdHJhdGlvbkZhY3RvcnkoKTtcblxuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZSgpXG4gIH1cbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBY2NvdW50UmVnaXN0cmF0aW9uRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkFjY291bnRSZWdpc3RyYXRpb24+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja0FjY291bnRSZWdpc3RyYXRpb24pO1xuICB9XG59XG4iXX0=