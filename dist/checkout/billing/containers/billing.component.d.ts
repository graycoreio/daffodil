import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DaffAddress } from '@daffodil/core';
import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffBillingReducersState } from '../reducers/billing-reducers.interface';
export declare class BillingContainer implements OnInit {
    private store;
    billingAddress$: Observable<DaffAddress>;
    billingAddressIsShippingAddress$: Observable<boolean>;
    paymentInfo$: Observable<PaymentInfo>;
    constructor(store: Store<DaffBillingReducersState>);
    ngOnInit(): void;
    updateBillingAddress(address: DaffAddress): void;
    toggleBillingAddressIsShippingAddress(): void;
    updatePaymentInfo(info: PaymentInfo): void;
}
