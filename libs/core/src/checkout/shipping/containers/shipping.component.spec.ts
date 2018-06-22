import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { ShippingContainer } from './shipping.component';
import { ShippingAddress } from '../models/shipping-address';
import { UpdateShippingInfo, UpdateShippingOption } from '../actions/shipping.actions';
import * as fromShipping from '../reducers';
import { ShippingFactory } from '../testing/factories/shipping.factory';

describe('ShippingContainer', () => {
  let component: ShippingContainer;
  let fixture: ComponentFixture<ShippingContainer>;
  let store;
  let initialShippingInfo: ShippingAddress;
  let stubShippingOption: string;
  let shippingFactory: ShippingFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shippings: combineReducers(fromShipping.reducers),
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

    shippingFactory = new ShippingFactory();
    initialShippingInfo = shippingFactory.create();
    stubShippingOption = 'shippingOption';

    spyOn(fromShipping, 'selectShippingInfoState').and.returnValue(initialShippingInfo);
    spyOn(fromShipping, 'selectShippingOptionState').and.returnValue(stubShippingOption);
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

    it('initializes shippingOption$', () => {
      component.shippingOption$.subscribe((shippingOption) => {
        expect(shippingOption).toEqual(stubShippingOption);
      })
    });
  });

  describe('updateShippingInfo', () => {
    
    it('should call store.dispatch with UpdateShippingInfo action', () => {
      component.updateShippingInfo(initialShippingInfo);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateShippingInfo(initialShippingInfo));
    });
  });

  describe('updateShippingOption', () => {
    
    it('should call store.dispatch with UpdateShippingOption action', () => {
      component.updateShippingOption(stubShippingOption);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateShippingOption(stubShippingOption));
    });
  });
});
