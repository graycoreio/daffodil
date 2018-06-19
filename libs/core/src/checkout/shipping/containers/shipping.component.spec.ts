import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { ShippingContainer } from './shipping.component';
import { Address } from '../../../interfaces/models/address';
import { UpdateShipping } from '../actions/shipping.actions';
import * as fromShipping from '../reducers';
import { ShippingFactory } from '../testing/factories/shipping.factory';

describe('ShippingContainer', () => {
  let component: ShippingContainer;
  let fixture: ComponentFixture<ShippingContainer>;
  let store;
  let initialShipping: Address;
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
    initialShipping = shippingFactory.create();

    spyOn(fromShipping, 'selectShippingValueState').and.returnValue(initialShipping);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {

    it('initializes shipping$', () => {
      component.shipping$.subscribe((shipping) => {
        expect(shipping).toEqual(initialShipping);
      });
    });
  });

  describe('updateShipping', () => {
    
    it('should call store.dispatch with UpdateShipping action', () => {
      component.updateShipping(initialShipping);

      expect(store.dispatch).toHaveBeenCalledWith(new UpdateShipping(initialShipping));
    });
  });
});
