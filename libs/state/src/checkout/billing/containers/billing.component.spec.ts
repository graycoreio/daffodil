import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { BillingContainer } from './billing.component';
import { DaffodilAddress, DaffodilAddressFactory, BillingFactory, PaymentInfo } from '@daffodil/core';
import { UpdateBillingAddress, UpdatePaymentInfo, ToggleBillingAddressIsShippingAddress } from '../actions/billing.actions';
import * as fromBilling from '../reducers';

describe('BillingContainer', () => {
  let component: BillingContainer;
  let fixture: ComponentFixture<BillingContainer>;
  let store;
  let initialBillingAddress: DaffodilAddress;
  let initialBillingAddressIsShippingAddress: boolean;
  let initialPaymentInfo: PaymentInfo;
  let daffodilAddressFactory: DaffodilAddressFactory;
  let billingFactory: BillingFactory;

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

    daffodilAddressFactory = new DaffodilAddressFactory();
    initialBillingAddress = daffodilAddressFactory.create();
    initialBillingAddressIsShippingAddress = false;
    billingFactory = new BillingFactory();
    initialPaymentInfo = billingFactory.create();

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
