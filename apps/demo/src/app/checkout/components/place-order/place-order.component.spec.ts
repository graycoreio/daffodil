import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { of, Subscription } from 'rxjs';

import { PlaceOrder } from '@daffodil/checkout';
import { Cart, fromCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/core/testing';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import * as fromDemoCheckout from '../../reducers';
import { PlaceOrderComponent } from './place-order.component';

// Because the fromCart selector is now being subscribed to, any test throws an error. Skipping tests until fromCart can be mocked.
describe('PlaceOrderComponent', () => {
  let fixture: ComponentFixture<PlaceOrderComponent>;
  let component: PlaceOrderComponent;
  const stubEnablePlaceOrderButton = true;
  let store;
  let cartFactory: DaffCartFactory;
  let stubCart: Cart;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          checkout: combineReducers(fromDemoCheckout.reducers),
          cart: combineReducers(fromCart.reducers)
        }),
        DaffDriverTestingModule
      ],
      declarations: [ 
        PlaceOrderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();
    component.cart = stubCart;
    component.cartSubscription = null;
    
    spyOn(store, 'dispatch');
    spyOn(fromDemoCheckout, 'selectEnablePlaceOrderButton').and.returnValue(stubEnablePlaceOrderButton);
    
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display a proceed to checkout button', () => {
    expect(fixture.debugElement.query(By.css('.button'))).toBeDefined();
  });
  
  describe('ngOnInit', () => {
    
    it('should initialize enablePlaceOrderButton$', () => {
      component.enablePlaceOrderButton$.subscribe((enablePlaceOrderButton) => {
        expect(enablePlaceOrderButton).toEqual(stubEnablePlaceOrderButton);
      });
    });
    
    it('should initialize cart', () => {
      // mocking fromCart selector only works if it's imported from libs/state/src in the `place-order.component.ts` file
    });
  });
  
  describe('ngOnDestroy', () => {
    
    it('should unsubscribe from cartSubscription', () => {
      component.cartSubscription = new Subscription();
      spyOn(component.cartSubscription, "unsubscribe");
      component.ngOnDestroy();

      expect(component.cartSubscription.unsubscribe).toHaveBeenCalled();
    });
  });

  describe('when enablePlaceOrderButton$ is true', () => {
    
    it('should disabled on Place Order button to false', () => {
      component.enablePlaceOrderButton$ = of(true);
      fixture.detectChanges();
      
      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeFalsy();
    });
  });

  describe('when enablePlaceOrderButton$ is false', () => {
    
    it('should disabled on Place Order button to true', () => {
      component.enablePlaceOrderButton$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    });
  });

  describe('when button is clicked', () => {
    
    it('should call store.dispatch with a PlaceOrder action', () => {
      component.cart = stubCart;
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(store.dispatch).toHaveBeenCalledWith(new PlaceOrder(stubCart));
    });
  });
});
