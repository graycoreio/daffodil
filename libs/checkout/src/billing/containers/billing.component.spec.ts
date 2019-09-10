import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { BillingContainer } from './billing.component';
import { UpdateBillingAddress, UpdatePaymentInfo, ToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import * as fromBilling from '../reducers/index';
import { PaymentInfo } from '../../models/payment/payment-info';
import { DaffPaymentFactory } from '../../../testing/src';

describe('BillingContainer', () => {
  let component: BillingContainer;
  let fixture: ComponentFixture<BillingContainer>;
  let store: MockStore<any>;
  let initialBillingAddress: DaffAddress;
  let initialBillingAddressIsShippingAddress: boolean;
  let initialPaymentInfo: PaymentInfo;
  let addressFactory: DaffAddressFactory;
  let paymentFactory: DaffPaymentFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingContainer ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingContainer);
    component = fixture.componentInstance;
    
    store = TestBed.get(Store);
    addressFactory = TestBed.get(DaffAddressFactory);
    paymentFactory = TestBed.get(DaffPaymentFactory);

    initialBillingAddress = addressFactory.create();
    initialBillingAddressIsShippingAddress = false;
    initialPaymentInfo = paymentFactory.create();

    store.overrideSelector(fromBilling.selectPaymentInfoState, initialPaymentInfo);
    store.overrideSelector(fromBilling.selectBillingAddressState, initialBillingAddress);
    store.overrideSelector(fromBilling.selectBillingAddressIsShippingAddressState, initialBillingAddressIsShippingAddress);

    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    it('initializes billingAddress$', () => {
      component.billingAddress$.subscribe((billingAddress) => {
        expect(billingAddress).toEqual(initialBillingAddress);
      });
    });

    it('initializes billingAddressIsShippingAddress$', () => {
      component.billingAddressIsShippingAddress$.subscribe((billingAddressIsShippingAddress) => {
        expect(billingAddressIsShippingAddress).toEqual(initialBillingAddressIsShippingAddress);
      });
    });

    it('initializes paymentInfo$', () => {
      component.paymentInfo$.subscribe((paymentInfo) => {
        expect(paymentInfo).toEqual(initialPaymentInfo);
      });
    });
  });

  describe('updateBillingAddress', () => {
    
    it('should call store.dispatch with UpdateBillingAddress action', () => {
      component.updateBillingAddress(initialBillingAddress);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateBillingAddress(initialBillingAddress));
    });
  });

  describe('toggleBillingAddressIsShippingAddress', () => {
    
    it('should call store.dispatch with ToggleBillingAddressIsShippingAddress action', () => {
      component.toggleBillingAddressIsShippingAddress();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleBillingAddressIsShippingAddress());
    });
  });

  describe('updatePaymentInfo', () => {
    
    it('should call store.dispatch with UpdatePaymentInfo action', () => {
      component.updatePaymentInfo(initialPaymentInfo);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdatePaymentInfo(initialPaymentInfo));
    });
  });
});
