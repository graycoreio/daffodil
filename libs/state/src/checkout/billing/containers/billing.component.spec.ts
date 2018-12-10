import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffodilAddress, PaymentInfo } from '@daffodil/core';
import { DaffAddressFactory, DaffPaymentFactory } from '@daffodil/core/testing';

import { BillingContainer } from './billing.component';
import { UpdateBillingAddress, UpdatePaymentInfo, ToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import * as fromBilling from '../reducers/index';

describe('BillingContainer', () => {
  let component: BillingContainer;
  let fixture: ComponentFixture<BillingContainer>;
  let store;
  let initialBillingAddress: DaffodilAddress;
  let initialBillingAddressIsShippingAddress: boolean;
  let initialPaymentInfo: PaymentInfo;
  let addressFactory: DaffAddressFactory;
  let paymentFactory: DaffPaymentFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          billing: combineReducers(fromBilling.reducers),
        })
      ],
      declarations: [ BillingContainer ]
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

    spyOn(fromBilling, 'selectPaymentInfoState').and.returnValue(initialPaymentInfo);
    spyOn(fromBilling, 'selectBillingAddressState').and.returnValue(initialBillingAddress);
    spyOn(fromBilling, 'selectBillingAddressIsShippingAddressState').and.returnValue(initialBillingAddressIsShippingAddress);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

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
