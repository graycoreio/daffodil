import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { of } from 'rxjs';

import * as fromDemoCheckout from '../../reducers';
import { PlaceOrderComponent } from './place-order.component';
import { PlaceOrder } from '../../actions/checkout.actions';

describe('PlaceOrderComponent', () => {
  let fixture: ComponentFixture<PlaceOrderComponent>;
  let placeOrderComponent: PlaceOrderComponent;
  const stubEnablePlaceOrderButton = true;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          checkout: combineReducers(fromDemoCheckout.reducers),
        })
      ],
      declarations: [ 
        PlaceOrderComponent,
        PlaceOrderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderComponent);
    store = TestBed.get(Store);

    spyOn(store, 'dispatch');
    spyOn(fromDemoCheckout, 'selectEnablePlaceOrderButton').and.returnValue(stubEnablePlaceOrderButton);
    
    fixture.detectChanges();

    placeOrderComponent = fixture.componentInstance;
  });

  it('should create', () => {
    expect(placeOrderComponent).toBeTruthy();
  });

  it('should display a proceed to checkout button', () => {
    expect(fixture.debugElement.query(By.css('.button'))).toBeDefined();
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

      expect(store.dispatch).toHaveBeenCalledWith(new PlaceOrder());
    });
  });
});
