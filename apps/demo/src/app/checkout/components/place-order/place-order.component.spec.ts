import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { of } from 'rxjs';

import { PlaceOrder } from '@daffodil/checkout';
import { Cart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/core/testing';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import * as fromDemoCheckout from '../../reducers';
import { PlaceOrderComponent } from './place-order.component';

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
          checkout: combineReducers(fromDemoCheckout.reducers)
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

    xit('should initialize cart$', () => {
      // mocking fromCart selector only works if it's imported from libs/state/src in the `place-order.component.ts` file
    });
  });

  describe('when enablePlaceOrderButton$ is true', () => {
    
    it('should disabled on Place Order button to false', () => {
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
      component.cart$ = of(stubCart);
      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(store.dispatch).toHaveBeenCalledWith(new PlaceOrder(stubCart));
    });
  });
});
