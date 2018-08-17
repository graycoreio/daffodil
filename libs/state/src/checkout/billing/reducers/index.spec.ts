import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffodilAddressFactory, DaffodilAddress, BillingFactory, PaymentInfo } from "@daffodil/core";

import { UpdateBillingAddress, UpdatePaymentInfo } from "../actions/billing.actions";
import * as fromBilling from './index';

describe('selectBillingState', () => {

  let store: Store<fromBilling.BillingState>;
  let daffodilAddressFactory: DaffodilAddressFactory = new DaffodilAddressFactory();
  let stubBillingAddress: DaffodilAddress;
  let billingFactory: BillingFactory = new BillingFactory();
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

    stubPaymentInfo = billingFactory.create();
    stubBillingAddress = daffodilAddressFactory.create();
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
