import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule, combineReducers } from '@ngrx/store';
import { of } from 'rxjs';

import * as fromFoundationCheckout from '../../reducers';
import { PlaceOrderComponent } from './place-order.component';

describe('PlaceOrderComponent', () => {
  let component: PlaceOrderComponent;
  let fixture: ComponentFixture<PlaceOrderComponent>;
  let stubEnablePlaceOrderButton: boolean = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          checkout: combineReducers(fromFoundationCheckout.reducers),
        })
      ],
      declarations: [ PlaceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderComponent);
    component = fixture.componentInstance;
    spyOn(fromFoundationCheckout, 'selectEnablePlaceOrderButton').and.returnValue(stubEnablePlaceOrderButton);
    
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
    
    it('should call placeOrder', () => {
      spyOn(component, 'placeOrder');

      fixture.debugElement.query(By.css('button')).nativeElement.click();

      expect(component.placeOrder).toHaveBeenCalled();
    });
  });
});
