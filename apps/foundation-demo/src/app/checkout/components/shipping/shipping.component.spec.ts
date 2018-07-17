import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponent } from './shipping.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';

let stubIsShippingInfoValidValue = true;
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

@Component({template: '<shipping [isShippingInfoValid]="isShippingInfoValidValue" [shippingInfo]="shippingInfoValue" [shippingOption]="shippingOptionValue" (updateShippingInfo)="updateShippingInfoFunction($event)" (updateShippingOption)="updateShippingOptionFunction($event)"></shipping>'})
class TestShipping {
  isShippingInfoValidValue = stubIsShippingInfoValidValue;
  shippingInfoValue: ShippingAddress = stubShippingAddress;
  shippingOptionValue: string = stubShippingOption;
  updateShippingInfoFunction: Function = () => {};
  updateShippingOptionFunction: Function = () => {};
}

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

describe('ShippingComponent', () => {
  let component: TestShipping;
  let fixture: ComponentFixture<TestShipping>;
  let shippingFormComponent: MockShippingFormComponent;
  let shippingSummaryComponent: MockShippingSummaryComponent;
  let shipping: ShippingComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestShipping,
        MockShippingFormComponent,
        MockShippingSummaryComponent,
        ShippingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShipping);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
    shippingSummaryComponent = fixture.debugElement.query(By.css('shipping-summary')).componentInstance;
    shipping = fixture.debugElement.query(By.css('shipping')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take isShippingInfoValid as input', () => {
    expect(shipping.isShippingInfoValid).toEqual(stubIsShippingInfoValidValue);
  });

  it('should be able to take shippingInfo as input', () => {
    expect(shipping.shippingInfo).toEqual(stubShippingAddress);
  });

  it('should be able to take shippingOption as input', () => {
    expect(shipping.shippingOption).toEqual(stubShippingOption);
  });

  describe('on <shipping-form>', () => {
    
    it('should set shippingInfo', () => {
      expect(shippingFormComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      expect(shippingSummaryComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });

    it('should set shippingOption to value passed by the [shipping-container]', () => {
      expect(shippingSummaryComponent.shippingOption).toEqual(shipping.shippingOption);
    });
  });

  describe('ngOnInit', () => {
    
    it('should set showShippingForm to !value passed by the [shipping-container]', () => {
      expect(shipping.showShippingForm).toEqual(!stubIsShippingInfoValidValue);
    });
  });

  describe('when shippingFormComponent emits', () => {
    
    describe('updateShippingInfo', () => {
      
      let emittedValue;

      beforeEach(() => {
        emittedValue = 'emittedValue';
        spyOn(component, 'updateShippingInfoFunction');
        spyOn(shipping, 'toggleShippingView');

        shippingFormComponent.updateShippingInfo.emit(emittedValue);
      });
      
      it('should call hostComponent.updateShippingInfoFunction', () => {
        expect(component.updateShippingInfoFunction).toHaveBeenCalledWith(emittedValue);
      });

      it('should call toggleShippingView', () => {
        expect(shipping.toggleShippingView).toHaveBeenCalled();
      });
    });
  });

  describe('when shippingSummaryComponent emits', () => {
    
    describe('editShippingInfo', () => {
      it('should call toggleShippingView', () => {
        spyOn(shipping, 'toggleShippingView');
  
        shippingSummaryComponent.editShippingInfo.emit();
        
        expect(shipping.toggleShippingView).toHaveBeenCalled();
      });
    });

    describe('updateShippingOption', () => {
      
      it('should call hostComponent.updateShippingOptionFunction', () => {
        spyOn(component, 'updateShippingOptionFunction');

        shippingSummaryComponent.updateShippingOption.emit(stubShippingOption);
        
        expect(component.updateShippingOptionFunction).toHaveBeenCalledWith(stubShippingOption);
      });
    });
  });

  describe('toggleShippingView', () => {
    
    it('should toggle showShippingForm', () => {
      let oldShowShippingForm = shipping.showShippingForm;
      shipping.toggleShippingView();

      expect(shipping.showShippingForm).toEqual(!oldShowShippingForm);
    });
  });

  describe('when showShippingForm is true', () => {

    beforeEach(() => {
      shipping.showShippingForm = true;

      fixture.detectChanges();
    });
    
    it('should show <shipping-form>', () => {
      expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeFalsy();
    });

    describe('and shippingInfo is defined', () => {
      
      it('should hide <shipping-summary>', () => {
        expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeTruthy();
      });
    });

    describe('and shippingInfo is null', () => {
      
      it('should not render <shipping-summary>', () => {
        shipping.shippingInfo = null;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('shipping-summary'))).toBeNull();
      });
    });
  });

  describe('when showShippingForm is false', () => {

    beforeEach(() => {
      shipping.showShippingForm = false;
      fixture.detectChanges();
    });
    
    it('should not show <shipping-form>', () => {
      expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeTruthy();
    });

    it('should show <shipping-summary>', () => {
      expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeFalsy();
    });
  });
});
