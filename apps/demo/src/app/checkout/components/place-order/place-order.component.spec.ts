import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Component } from '@angular/core';

import { Cart } from '@daffodil/core';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import * as fromFoundationCheckout from '../../reducers';
import { PlaceOrderComponent } from './place-order.component';
import { PlaceOrder } from '../../actions/checkout.actions';
import { DaffCartFactory } from '@daffodil/core/testing';

@Component({template: '<demo-place-order [cart]="cartValue"></demo-place-order>'})
class WrapperComponent {
  cartValue: Cart;
}

describe('PlaceOrderComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let placeOrderComponent: PlaceOrderComponent;
  const stubEnablePlaceOrderButton = true;
  let cartFactory: DaffCartFactory;
  let stubCart: Cart;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          checkout: combineReducers(fromFoundationCheckout.reducers),
        }),
        DaffDriverTestingModule
      ],
      declarations: [ 
        WrapperComponent,
        PlaceOrderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    store = TestBed.get(Store);
    cartFactory = TestBed.get(DaffCartFactory);

    wrapper = fixture.componentInstance;
    stubCart = cartFactory.create();
    wrapper.cartValue = stubCart;

    spyOn(store, 'dispatch');
    spyOn(fromFoundationCheckout, 'selectEnablePlaceOrderButton').and.returnValue(stubEnablePlaceOrderButton);
    
    fixture.detectChanges();

    placeOrderComponent = fixture.debugElement.query(By.css('demo-place-order')).componentInstance;
  });

  it('should create', () => {
    expect(placeOrderComponent).toBeTruthy();
  });

  it('should display a proceed to checkout button', () => {
    expect(fixture.debugElement.query(By.css('.button'))).toBeDefined();
  });

  it('should be able to take cart as input', () => {
    expect(placeOrderComponent.cart).toEqual(wrapper.cartValue);
  });

  describe('ngOnInit', () => {
    
    it('should initialize enablePlaceOrderButton$', () => {
      placeOrderComponent.enablePlaceOrderButton$.subscribe((enablePlaceOrderButton) => {
        expect(enablePlaceOrderButton).toEqual(stubEnablePlaceOrderButton);
      });
    });
  });

  describe('when enablePlaceOrderButton$ is true', () => {
    
    it('should disabled on Place Order button to false', () => {
      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeFalsy();
    });
  });

  describe('when enablePlaceOrderButton$ is false', () => {
    
    it('should disabled on Place Order button to true', () => {
      placeOrderComponent.enablePlaceOrderButton$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    });
  });

  describe('when button is clicked', () => {
    
    it('should call store.dispatch with a PlaceOrder action', () => {
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(store.dispatch).toHaveBeenCalledWith(new PlaceOrder(stubCart.id));
    });
  });
});
