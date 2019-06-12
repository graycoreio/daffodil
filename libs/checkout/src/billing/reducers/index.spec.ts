import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffAddress } from "@daffodil/core";
import { DaffAddressFactory } from '@daffodil/core/testing';

import { UpdateBillingAddress, UpdatePaymentInfo } from "../actions/billing.actions";
import * as fromBilling from './index';
import { PaymentInfo } from "../../models/payment/payment-info";
import { DaffPaymentFactory } from '../../../testing/src';

describe('selectBillingState', () => {

  let store: Store<fromBilling.BillingState>;
  const addressFactory: DaffAddressFactory = new DaffAddressFactory();
  let stubBillingAddress: DaffAddress;

  const paymentFactory: DaffPaymentFactory = new DaffPaymentFactory();
  let stubPaymentInfo: PaymentInfo;
  
  let stubBillingAddressIsShippingAddress: boolean;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          billing: combineReducers(fromBilling.reducers),
        })
      ]
    });

    stubPaymentInfo = paymentFactory.create();
    stubBillingAddress = addressFactory.create();
    stubBillingAddressIsShippingAddress = false;
    store = TestBed.get(Store);
    store.dispatch(new UpdateBillingAddress(stubBillingAddress));
    store.dispatch(new UpdatePaymentInfo(stubPaymentInfo));
  }));

  describe('selectBillingState', () => {
    
    it('selects billing state', () => {
      const expectedBillingState = {
        billingAddress: stubBillingAddress,
        billingAddressIsShippingAddress: stubBillingAddressIsShippingAddress,
        paymentInfo: stubPaymentInfo
      }

      store.pipe(select(fromBilling.billingStateSelector)).subscribe((billingState) => {
        expect(billingState).toEqual(expectedBillingState);
      });
    });
  });

  describe('selectBillingAddressState', () => {
    
    it('selects billingAddress state', () => {
      store.pipe(select(fromBilling.selectBillingAddressState)).subscribe((billingAddress) => {
        expect(billingAddress).toEqual(stubBillingAddress);
      });
    });
  });

  describe('selectBillingAddressIsShippingAddressState', () => {
    
    it('selects billingAddressIsShippingAddress state', () => {
      store.pipe(select(fromBilling.selectBillingAddressIsShippingAddressState)).subscribe((billingAddressIsShippingAddress) => {
        expect(billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
      });
    });
  });

  describe('selectPaymentInfoState', () => {
    
    it('selects paymentInfo state', () => {
      store.pipe(select(fromBilling.selectPaymentInfoState)).subscribe((paymentInfo) => {
        expect(paymentInfo).toEqual(stubPaymentInfo);
      });
    });
  });
});
