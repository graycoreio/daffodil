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

@Component({selector: 'shipping-form', template: ''})
class MockShippingFormComponent {
  @Input() shippingInfo: ShippingAddress;
  @Output() updateShipping: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'shipping-summary', template: ''})
class MockShippingSummaryComponent {
  @Input() shippingInfo: ShippingAddress;
  @Output() editShipping: EventEmitter<any> = new EventEmitter();
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
  let shippingFormComponent: MockShippingFormComponent;
  let shippingSummaryComponent: MockShippingSummaryComponent;
  let shippingContainer: MockShippingContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MockShippingFormComponent,
        MockShippingSummaryComponent,
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

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
    shippingSummaryComponent = fixture.debugElement.query(By.css('shipping-summary')).componentInstance;
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render shipping-form component', () => {
    expect(shippingFormComponent).not.toBeNull();
  });

  describe('on <shipping-form>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      shippingContainer.shipping$.subscribe((shippingAddress) => {
        expect(shippingFormComponent.shippingInfo).toEqual(shippingAddress);
      })
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      shippingContainer.shipping$.subscribe((shippingAddress) => {
        expect(shippingSummaryComponent.shippingInfo).toEqual(shippingAddress);
      })
    });
  });

  describe('ngOnInit', () => {
    
    it('should set showShippingForm to true', () => {
      expect(component.showShippingForm).toBeTruthy();
    });
  });

  describe('when shippingFormComponent.updateShipping is emitted', () => {

    let emittedValue;

    beforeEach(() => {
      emittedValue = 'emittedValue';
      spyOn(shippingContainer, 'updateShipping');
      spyOn(component, 'toggleShippingView');

      shippingFormComponent.updateShipping.emit(emittedValue);
    });
    
    it('should call shippingContainer.updateShipping', () => {
      expect(shippingContainer.updateShipping).toHaveBeenCalledWith(emittedValue);
    });

    it('should call toggleShippingView', () => {
      expect(component.toggleShippingView).toHaveBeenCalled();
    });
  });

  describe('when shippingSummaryComponent.editShipping is emitted', () => {
    
    it('should call toggleShippingView', () => {
      spyOn(component, 'toggleShippingView');

      shippingSummaryComponent.editShipping.emit();
      
      expect(component.toggleShippingView).toHaveBeenCalled();
    });
  });

  describe('toggleShippingView', () => {
    
    it('should toggle showShippingForm', () => {
      component.toggleShippingView();

      expect(component.showShippingForm).toBeFalsy();
    });
  });

  describe('when showShippingForm is true', () => {
    
    it('should show <shipping-form>', () => {
      shippingContainer.shipping$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeFalsy();
      });
    });

    describe('and shippingContainer.shipping is defined', () => {
      
      it('should hide <shipping-summary>', () => {
        shippingContainer.shipping$.subscribe(() => {
          expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeTruthy();
        })
      });
    });

    describe('and shippingContainer.shipping is null', () => {
      
      it('should not render <shipping-summary>', () => {
        shippingContainer.shipping$ = of(null);
        fixture.detectChanges();

        shippingContainer.shipping$.subscribe(() => {
          expect(fixture.debugElement.query(By.css('shipping-summary'))).toBeNull();
        })
      });
    });
  });

  describe('when showShippingForm is false', () => {

    beforeEach(() => {
      component.showShippingForm = false;
      fixture.detectChanges();
    });
    
    it('should not show <shipping-form>', () => {
      shippingContainer.shipping$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeTruthy();
      });
    });

    it('should show <shipping-summary>', () => {
      shippingContainer.shipping$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeFalsy();
      });
    });
  });
});
