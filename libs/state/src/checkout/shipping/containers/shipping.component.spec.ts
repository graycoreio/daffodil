import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';

import { ShippingContainer } from './shipping.component';
import { UpdateShippingAddress, SelectShippingOption } from '../actions/shipping.actions';
import * as fromShipping from '../reducers/index';

describe('ShippingContainer', () => {
  let component: ShippingContainer;
  let fixture: ComponentFixture<ShippingContainer>;
  let store;
  let initialShippingAddress: DaffodilAddress;
  let stubSelectedShippingOptionId: string;
  let stubIsShippingAddressValid: boolean;
  let daffodilAddressFactory: DaffodilAddressFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(fromShipping.reducers),
        })
      ],
      declarations: [ ShippingContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    daffodilAddressFactory = new DaffodilAddressFactory();
    initialShippingAddress = daffodilAddressFactory.create();
    stubSelectedShippingOptionId = '0';
    stubIsShippingAddressValid = true;

    spyOn(fromShipping, 'selectShippingAddressState').and.returnValue(initialShippingAddress);
    spyOn(fromShipping, 'selectShippingOptionState').and.returnValue(stubSelectedShippingOptionId);
    spyOn(fromShipping, 'selectIsShippingAddressValid').and.returnValue(stubIsShippingAddressValid);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    it('initializes shippingAddress$', () => {
      component.shippingAddress$.subscribe((shippingAddress) => {
        expect(shippingAddress).toEqual(initialShippingAddress);
      });
    });

    it('initializes selectedShippingOptionId$', () => {
      component.selectedShippingOptionId$.subscribe((shippingOption) => {
        expect(shippingOption).toEqual(stubSelectedShippingOptionId);
      })
    });

    it('initializes isShippingAddressValid$', () => {
      component.isShippingAddressValid$.subscribe((isShippingAddressValid) => {
        expect(isShippingAddressValid).toEqual(stubIsShippingAddressValid);
      })
    });
  });

  describe('updateShippingAddress', () => {
    
    it('should call store.dispatch with UpdateShippingAddress action', () => {
      component.updateShippingAddress(initialShippingAddress);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateShippingAddress(initialShippingAddress));
    });
  });

  describe('selectShippingOption', () => {
    
    it('should call store.dispatch with SelectShippingOption action', () => {
      component.selectShippingOption(stubSelectedShippingOptionId);

      expect(store.dispatch).toHaveBeenCalledWith(new SelectShippingOption(stubSelectedShippingOptionId));
    });
  });
});
