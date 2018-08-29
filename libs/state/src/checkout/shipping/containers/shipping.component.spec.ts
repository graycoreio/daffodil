import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';

import { ShippingContainer } from './shipping.component';
import { UpdateShippingInfo, SelectShippingOption } from '../actions/shipping.actions';
import * as fromShipping from '../reducers/index';

describe('ShippingContainer', () => {
  let component: ShippingContainer;
  let fixture: ComponentFixture<ShippingContainer>;
  let store;
  let initialShippingInfo: DaffodilAddress;
  let stubSelectedShippingOptionId: string;
  let stubIsShippingInfoValid: boolean;
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
    initialShippingInfo = daffodilAddressFactory.create();
    stubSelectedShippingOptionId = '0';
    stubIsShippingInfoValid = true;

    spyOn(fromShipping, 'selectShippingInfoState').and.returnValue(initialShippingInfo);
    spyOn(fromShipping, 'selectShippingOptionState').and.returnValue(stubSelectedShippingOptionId);
    spyOn(fromShipping, 'selectIsShippingInfoValid').and.returnValue(stubIsShippingInfoValid);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    it('initializes shippingInfo$', () => {
      component.shippingInfo$.subscribe((shippingInfo) => {
        expect(shippingInfo).toEqual(initialShippingInfo);
      });
    });

    it('initializes selectedShippingOptionId$', () => {
      component.selectedShippingOptionId$.subscribe((shippingOption) => {
        expect(shippingOption).toEqual(stubSelectedShippingOptionId);
      })
    });

    it('initializes isShippingInfoValid$', () => {
      component.isShippingInfoValid$.subscribe((isShippingInfoValid) => {
        expect(isShippingInfoValid).toEqual(stubIsShippingInfoValid);
      })
    });
  });

  describe('updateShippingInfo', () => {
    
    it('should call store.dispatch with UpdateShippingInfo action', () => {
      component.updateShippingInfo(initialShippingInfo);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateShippingInfo(initialShippingInfo));
    });
  });

  describe('selectShippingOption', () => {
    
    it('should call store.dispatch with SelectShippingOption action', () => {
      component.selectShippingOption(stubSelectedShippingOptionId);

      expect(store.dispatch).toHaveBeenCalledWith(new SelectShippingOption(stubSelectedShippingOptionId));
    });
  });
});
