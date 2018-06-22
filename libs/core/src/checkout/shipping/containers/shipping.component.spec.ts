import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { ShippingContainer } from './shipping.component';
import { ShippingAddress } from '../models/shipping-address';
import { UpdateShippingInfo } from '../actions/shipping.actions';
import * as fromShipping from '../reducers';
import { ShippingFactory } from '../testing/factories/shipping.factory';

describe('ShippingContainer', () => {
  let component: ShippingContainer;
  let fixture: ComponentFixture<ShippingContainer>;
  let store;
  let initialShippingInfo: ShippingAddress;
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

    spyOn(fromShipping, 'selectShippingInfoState').and.returnValue(initialShippingInfo);
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
  });

  describe('updateShippingInfo', () => {
    
    it('should call store.dispatch with UpdateShippingInfo action', () => {
      component.updateShippingInfo(initialShippingInfo);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateShippingInfo(initialShippingInfo));
    });
  });
});
