/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
/**
 * @deprecated
 */
export class MockOrderPayment {
    constructor() {
        this.payment_id = faker.random.number({ min: 1, max: 1000 });
        this.quote_id = faker.random.number({ min: 1, max: 1000 });
        this.created_at = new Date();
        this.updated_at = new Date();
        this.method = 'card';
        this.cc_type = 'visa';
        this.cc_number_enc = faker.random.number({ min: 1000, max: 9999 }).toString();
        this.cc_last4 = faker.random.number({ min: 1000, max: 9999 }).toString();
        this.cc_cid_enc = faker.random.number({ min: 1, max: 1000 }).toString();
        this.cc_owner = 'owner';
        this.cc_exp_month = 'month';
        this.cc_exp_year = 'year';
        this.cc_ss_owner = 'owner';
        this.cc_ss_start_month = 'start month';
        this.cc_ss_start_year = 'start year';
        this.po_number = 'po';
        this.cc_ss_issue = 'issue';
    }
}
if (false) {
    /** @type {?} */
    MockOrderPayment.prototype.payment_id;
    /** @type {?} */
    MockOrderPayment.prototype.quote_id;
    /** @type {?} */
    MockOrderPayment.prototype.created_at;
    /** @type {?} */
    MockOrderPayment.prototype.updated_at;
    /** @type {?} */
    MockOrderPayment.prototype.method;
    /** @type {?} */
    MockOrderPayment.prototype.cc_type;
    /** @type {?} */
    MockOrderPayment.prototype.cc_number_enc;
    /** @type {?} */
    MockOrderPayment.prototype.cc_last4;
    /** @type {?} */
    MockOrderPayment.prototype.cc_cid_enc;
    /** @type {?} */
    MockOrderPayment.prototype.cc_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_exp_year;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_owner;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_start_month;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_start_year;
    /** @type {?} */
    MockOrderPayment.prototype.po_number;
    /** @type {?} */
    MockOrderPayment.prototype.cc_ss_issue;
}
/**
 * @deprecated
 */
export class DaffOrderPaymentFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderPayment);
    }
}
DaffOrderPaymentFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderPaymentFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderPaymentFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderPaymentFactory_Factory() { return new DaffOrderPaymentFactory(); }, token: DaffOrderPaymentFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGF5bWVudC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NoZWNrb3V0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJvcmRlci9mYWN0b3JpZXMvb3JkZXItcGF5bWVudC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBSzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFBN0I7UUFDSSxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ3RELGFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDcEQsZUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZFLGFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEUsZUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqRSxhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLHNCQUFpQixHQUFHLGFBQWEsQ0FBQztRQUNsQyxxQkFBZ0IsR0FBRyxZQUFZLENBQUM7UUFDaEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVyxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0NBQUE7OztJQWpCRyxzQ0FBc0Q7O0lBQ3RELG9DQUFvRDs7SUFDcEQsc0NBQXdCOztJQUN4QixzQ0FBd0I7O0lBQ3hCLGtDQUFnQjs7SUFDaEIsbUNBQWlCOztJQUNqQix5Q0FBdUU7O0lBQ3ZFLG9DQUFrRTs7SUFDbEUsc0NBQWlFOztJQUNqRSxvQ0FBbUI7O0lBQ25CLHdDQUF1Qjs7SUFDdkIsdUNBQXFCOztJQUNyQix1Q0FBc0I7O0lBQ3RCLDZDQUFrQzs7SUFDbEMsNENBQWdDOztJQUNoQyxxQ0FBaUI7O0lBQ2pCLHVDQUFzQjs7Ozs7QUFTMUIsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFrQztJQUMzRTtRQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQU5OLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZk9yZGVyUGF5bWVudCB9IGZyb20gJ0BkYWZmb2RpbC9jaGVja291dCc7XG5pbXBvcnQgKiBhcyBmYWtlciBmcm9tICdmYWtlci9sb2NhbGUvZW5fVVMnO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIE1vY2tPcmRlclBheW1lbnQgaW1wbGVtZW50cyBEYWZmT3JkZXJQYXltZW50IHtcbiAgICBwYXltZW50X2lkID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KTtcbiAgICBxdW90ZV9pZCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMSwgbWF4OiAxMDAwfSk7XG4gICAgY3JlYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgdXBkYXRlZF9hdCA9IG5ldyBEYXRlKCk7XG4gICAgbWV0aG9kID0gJ2NhcmQnO1xuICAgIGNjX3R5cGUgPSAndmlzYSc7XG4gICAgY2NfbnVtYmVyX2VuYyA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMTAwMCwgbWF4OiA5OTk5fSkudG9TdHJpbmcoKTtcbiAgICBjY19sYXN0NCA9IGZha2VyLnJhbmRvbS5udW1iZXIoe21pbjogMTAwMCwgbWF4OiA5OTk5fSkudG9TdHJpbmcoKTtcbiAgICBjY19jaWRfZW5jID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMDB9KS50b1N0cmluZygpO1xuICAgIGNjX293bmVyID0gJ293bmVyJztcbiAgICBjY19leHBfbW9udGggPSAnbW9udGgnO1xuICAgIGNjX2V4cF95ZWFyID0gJ3llYXInO1xuICAgIGNjX3NzX293bmVyID0gJ293bmVyJztcbiAgICBjY19zc19zdGFydF9tb250aCA9ICdzdGFydCBtb250aCc7XG4gICAgY2Nfc3Nfc3RhcnRfeWVhciA9ICdzdGFydCB5ZWFyJztcbiAgICBwb19udW1iZXIgPSAncG8nO1xuICAgIGNjX3NzX2lzc3VlID0gJ2lzc3VlJztcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZPcmRlclBheW1lbnRGYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmT3JkZXJQYXltZW50PntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihNb2NrT3JkZXJQYXltZW50KTtcbiAgICAgIH1cbn1cbiJdfQ==