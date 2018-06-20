import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewComponent } from './checkout-view.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShippingAddress } from '@daffodil/core';
import { Observable, of } from 'rxjs';

let stubShippingAddress: ShippingAddress = {
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  state: '',
  postcode: '',
  telephone: ''
}

@Component({selector: 'shipping', template: ''})
class MockShippingComponent {
  @Input() shippingInfo: ShippingAddress;
  @Output() updateShipping: EventEmitter<any> = new EventEmitter();
}

@Component({
  selector: '[shipping-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ShippingContainer'
})
class MockShippingContainer {
  shipping$: Observable<ShippingAddress> = of(stubShippingAddress);
  updateShipping: Function = () => {};
}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shippingComponent: MockShippingComponent;
  let shippingContainer: MockShippingContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MockShippingComponent,
        MockShippingContainer,
        CheckoutViewComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingComponent = fixture.debugElement.query(By.css('shipping')).componentInstance;
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render shipping component', () => {
    expect(shippingComponent).not.toBeNull();
  });

  describe('on <shipping>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      shippingContainer.shipping$.subscribe((shippingAddress) => {
        expect(shippingComponent.shippingInfo).toEqual(shippingAddress);
      })
    });
  });

  describe('when shippingComponent.updateShipping is emitted', () => {

    let emittedValue;

    beforeEach(() => {
      emittedValue = 'emittedValue';
      spyOn(shippingContainer, 'updateShipping');

      shippingComponent.updateShipping.emit(emittedValue);
    });
    
    it('should call shippingContainer.updateShipping', () => {
      expect(shippingContainer.updateShipping).toHaveBeenCalledWith(emittedValue);
    });
  });
});
