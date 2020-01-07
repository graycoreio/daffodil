import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import { DaffPaymentFactory } from '@daffodil/checkout/testing';

import { BillingContainer } from './billing.component';
import { DaffUpdateBillingAddress, DaffUpdatePaymentInfo, DaffToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import { PaymentInfo } from '../../models/payment/payment-info';
import { selectPaymentInfo, selectBillingAddress, selectBillingAddressIsShippingAddress } from '../selectors/billing.selector';

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

    store.overrideSelector(selectPaymentInfo, initialPaymentInfo);
    store.overrideSelector(selectBillingAddress, initialBillingAddress);
    store.overrideSelector(selectBillingAddressIsShippingAddress, initialBillingAddressIsShippingAddress);

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
    
    it('should call store.dispatch with DaffUpdateBillingAddress action', () => {
      component.updateBillingAddress(initialBillingAddress);

      expect(store.dispatch).toHaveBeenCalledWith(new DaffUpdateBillingAddress(initialBillingAddress));
    });
  });

  describe('toggleBillingAddressIsShippingAddress', () => {
    
    it('should call store.dispatch with DaffToggleBillingAddressIsShippingAddress action', () => {
      component.toggleBillingAddressIsShippingAddress();

      expect(store.dispatch).toHaveBeenCalledWith(new DaffToggleBillingAddressIsShippingAddress());
    });
  });

  describe('updatePaymentInfo', () => {
    
    it('should call store.dispatch with DaffUpdatePaymentInfo action', () => {
      component.updatePaymentInfo(initialPaymentInfo);

      expect(store.dispatch).toHaveBeenCalledWith(new DaffUpdatePaymentInfo(initialPaymentInfo));
    });
  });
});
