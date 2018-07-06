import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingWrapperComponent } from './shipping-wrapper.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';

let stubShippingAddress: ShippingAddress = {
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  state: '',
  postcode: '',
  telephone: ''
}
let stubShippingOption: string = 'shipping option';

@Component({selector: 'shipping-form', template: ''})
class MockShippingFormComponent {
  @Input() shippingInfo: ShippingAddress;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'shipping-summary', template: ''})
class MockShippingSummaryComponent {
  @Input() shippingInfo: ShippingAddress;
  @Input() shippingOption: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({
  selector: '[shipping-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ShippingContainer'
})
class MockShippingContainer {
  shippingInfo$: Observable<ShippingAddress> = of(stubShippingAddress);
  shippingOption$: Observable<string> = of(stubShippingOption);
  updateShippingInfo: Function = () => {};
  updateShippingOption: Function = () => {};
}

describe('ShippingViewComponent', () => {
  let component: ShippingWrapperComponent;
  let fixture: ComponentFixture<ShippingWrapperComponent>;
  let shippingFormComponent: MockShippingFormComponent;
  let shippingSummaryComponent: MockShippingSummaryComponent;
  let shippingContainer: MockShippingContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ShippingWrapperComponent,
        MockShippingFormComponent,
        MockShippingSummaryComponent,
        MockShippingContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingWrapperComponent);
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
      shippingContainer.shippingInfo$.subscribe((shippingInfo) => {
        expect(shippingFormComponent.shippingInfo).toEqual(shippingInfo);
      })
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      shippingContainer.shippingInfo$.subscribe((shippingInfo) => {
        expect(shippingSummaryComponent.shippingInfo).toEqual(shippingInfo);
      });
    });

    it('should set shippingOption to value passed by the [shipping-container]', () => {
      shippingContainer.shippingOption$.subscribe((shippingOption) => {
        expect(shippingSummaryComponent.shippingOption).toEqual(shippingOption);
      });
    });
  });

  describe('ngOnInit', () => {
    
    it('should set showShippingForm to true', () => {
      expect(component.showShippingForm).toBeTruthy();
    });
  });

  describe('when shippingFormComponent.updateShippingInfo is emitted', () => {

    let emittedValue;

    beforeEach(() => {
      emittedValue = 'emittedValue';
      spyOn(shippingContainer, 'updateShippingInfo');
      spyOn(component, 'toggleShippingView');

      shippingFormComponent.updateShippingInfo.emit(emittedValue);
    });
    
    it('should call shippingContainer.updateShippingInfo', () => {
      expect(shippingContainer.updateShippingInfo).toHaveBeenCalledWith(emittedValue);
    });

    it('should call toggleShippingView', () => {
      expect(component.toggleShippingView).toHaveBeenCalled();
    });
  });

  describe('when shippingSummaryComponent.editShippingInfo is emitted', () => {
    
    it('should call toggleShippingView', () => {
      spyOn(component, 'toggleShippingView');

      shippingSummaryComponent.editShippingInfo.emit();
      
      expect(component.toggleShippingView).toHaveBeenCalled();
    });
  });

  describe('when shippingSummaryComponent.updateShippingOption is emitted', () => {
    
    it('should call ShippingContainer.updateShippingOption', () => {
      spyOn(shippingContainer, 'updateShippingOption');

      shippingSummaryComponent.updateShippingOption.emit(stubShippingOption);
      
      expect(shippingContainer.updateShippingOption).toHaveBeenCalledWith(stubShippingOption);
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
      shippingContainer.shippingInfo$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeFalsy();
      });
    });

    describe('and shippingContainer.shipping is defined', () => {
      
      it('should hide <shipping-summary>', () => {
        shippingContainer.shippingInfo$.subscribe(() => {
          expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeTruthy();
        })
      });
    });

    describe('and shippingContainer.shippingInfo is null', () => {
      
      it('should not render <shipping-summary>', () => {
        shippingContainer.shippingInfo$ = of(null);
        fixture.detectChanges();

        shippingContainer.shippingInfo$.subscribe(() => {
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
      shippingContainer.shippingInfo$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeTruthy();
      });
    });

    it('should show <shipping-summary>', () => {
      shippingContainer.shippingInfo$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeFalsy();
      });
    });
  });
});
