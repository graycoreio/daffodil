import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffodilAddress, PaymentInfo } from "@daffodil/core";
import { DaffPaymentFactory, DaffAddressFactory } from '@daffodil/core/testing';

import { UpdateBillingAddress, UpdatePaymentInfo } from "../actions/billing.actions";
import * as fromBilling from './index';

describe('selectBillingState', () => {

  let store: Store<fromBilling.BillingState>;
  let addressFactory: DaffAddressFactory = new DaffAddressFactory();
  let stubBillingAddress: DaffodilAddress;

  let paymentFactory: DaffPaymentFactory = new DaffPaymentFactory();
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
      let expectedBillingState = {
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
