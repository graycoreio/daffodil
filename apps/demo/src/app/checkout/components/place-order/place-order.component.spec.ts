import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import { DaffCart, DaffCartFacade } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { PlaceOrder } from '@daffodil/checkout';
import * as fromDemoCheckout from '../../reducers';
import { PlaceOrderComponent } from './place-order.component';

class MockDaffCartFacade {
	cart$: BehaviorSubject<DaffCart> = new BehaviorSubject(null);
	dispatch = jasmine.createSpy();
}

describe('PlaceOrderComponent', () => {
  let fixture: ComponentFixture<PlaceOrderComponent>;
  let component: PlaceOrderComponent;
  const stubEnablePlaceOrderButton = true;
  let store: MockStore<any>;
  let cartFactory: DaffCartFactory;
	let stubCart: DaffCart;
	let cartFacade: MockDaffCartFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaceOrderComponent
      ],
      providers: [
				provideMockStore({}),
				{ provide: DaffCartFacade, useClass: MockDaffCartFacade }
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
		cartFacade = TestBed.get(DaffCartFacade);
		cartFacade.cart$.next(stubCart);

    spyOn(store, 'dispatch');

    store.overrideSelector(fromDemoCheckout.selectEnablePlaceOrderButton, stubEnablePlaceOrderButton);

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a proceed to checkout button', () => {
    expect(fixture.debugElement.query(By.css('.button'))).toBeDefined();
  });

  describe('ngOnInit', () => {

    it('should initialize enablePlaceOrderButton$', () => {
      const expected = cold('a', { a: stubEnablePlaceOrderButton });
      expect(component.enablePlaceOrderButton$).toBeObservable(expected);
    });

    it('should initialize cart$', () => {
      const expected = cold('a', { a: stubCart });
      expect(component.cart$).toBeObservable(expected);
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
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      expect(cartFacade.dispatch).toHaveBeenCalledWith(new PlaceOrder(stubCart));
    });
  });
});
