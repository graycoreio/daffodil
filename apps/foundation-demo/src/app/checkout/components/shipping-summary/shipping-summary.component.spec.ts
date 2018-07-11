import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSummaryComponent } from './shipping-summary.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { By } from '@angular/platform-browser';
import { ShippingOptionComponent } from '../shipping-option/shipping-option.component';

let stubShippingAddress = {
  firstname: 'firstname',
  lastname: 'lastname',
  street: 'street',
  city: 'city',
  state: 'state',
  postcode: 'postcode',
  telephone: 'telephone'
};
let stubShippingOption = 'shipping option';

@Component({selector: 'shipping-option', template: ''})
class MockShippingOptionComponent {
  @Input() shippingOption: string;
  @Output() updateShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({template: '<shipping-summary [shippingInfo]="shippingInfoValue" (editShippingInfo)="editShippingInfoFunction()" [shippingOption]="shippingOptionValue" (updateShippingOption)="updateShippingOptionFunction($event)"></shipping-summary>'})
class TestShippingSummaryWrapper {
  shippingInfoValue: ShippingAddress = stubShippingAddress;
  shippingOptionValue: string = stubShippingOption;
  editShippingInfoFunction: Function = () => {};
  updateShippingOptionFunction: Function = () => {};
}

describe('ShippingSummaryComponent', () => {
  let component: TestShippingSummaryWrapper;
  let fixture: ComponentFixture<TestShippingSummaryWrapper>;
  let shippingSummaryComponent: ShippingSummaryComponent;
  let shippingOptionComponent: ShippingOptionComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MockShippingOptionComponent,
        TestShippingSummaryWrapper,
        ShippingSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingSummaryWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingSummaryComponent = fixture.debugElement.query(By.css('shipping-summary')).componentInstance;
    shippingOptionComponent = fixture.debugElement.query(By.css('shipping-option')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingInfo', () => {
    expect(shippingSummaryComponent.shippingInfo).toEqual(stubShippingAddress);
  });

  it('should be able to take shippingOption', () => {
    expect(shippingSummaryComponent.shippingOption).toEqual(stubShippingOption);
  });

  describe('on <shipping-option>', () => {
    
    it('should set shippingOption', () => {
      expect(shippingOptionComponent.shippingOption).toEqual(stubShippingOption);
    });
  });

  describe('when shippingOption.updateShippingOption is emitted', () => {
    
    it('should call onUpdateShippingOption', () => {
      spyOn(shippingSummaryComponent, 'onUpdateShippingOption');

      shippingOptionComponent.updateShippingOption.emit(stubShippingOption);

      expect(shippingSummaryComponent.onUpdateShippingOption).toHaveBeenCalledWith(stubShippingOption);
    });
  });

  describe('when edit anchor tag is clicked', () => {
    
    it('should call onEdit', () => {
      spyOn(shippingSummaryComponent, 'onEdit');

      fixture.debugElement.query(By.css('a')).nativeElement.click();

      expect(shippingSummaryComponent.onEdit).toHaveBeenCalled();
    });
  });

  describe('onEdit', () => {
    
    it('should call editShippingInfo.emit', () => {
      spyOn(shippingSummaryComponent.editShippingInfo, 'emit');

      shippingSummaryComponent.onEdit();

      expect(shippingSummaryComponent.editShippingInfo.emit).toHaveBeenCalled();
    });
  });

  describe('when editShippingInfo is emitted', () => {

    it('should call editShippingInfoFunction', () => {
      spyOn(component, 'editShippingInfoFunction');

      shippingSummaryComponent.editShippingInfo.emit();

      expect(component.editShippingInfoFunction).toHaveBeenCalled();
    });
  });

  describe('onUpdateShippingOption', () => {

    beforeEach(() => {
      spyOn(shippingSummaryComponent.updateShippingOption, 'emit');

      shippingSummaryComponent.onUpdateShippingOption(stubShippingOption);
    });

    it('should set disableContinueToPayment to false', () => {
      expect(shippingSummaryComponent.disableContinueToPayment).toBeFalsy();
    });
    
    it('should call updateShippingOption.emit', () => {
      expect(shippingSummaryComponent.updateShippingOption.emit).toHaveBeenCalledWith(stubShippingOption);
    });
  });

  describe('when updateShippingOption is emitted', () => {

    it('should call updateShippingOptionFunction', () => {
      spyOn(component, 'updateShippingOptionFunction');

      shippingSummaryComponent.updateShippingOption.emit(stubShippingOption);

      expect(component.updateShippingOptionFunction).toHaveBeenCalledWith(stubShippingOption);
    });
  });

  describe('ngOnInit', () => {
    
    it('should set disableContinueToPayment to true', () => {
      expect(shippingSummaryComponent.disableContinueToPayment).toBeTruthy();
    });
  });

  describe('when disableContinueToPayment is true', () => {
    
    it('should disable continue to payment button', () => {
      shippingSummaryComponent.disableContinueToPayment = true;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    });
  });

  describe('when disableContinueToPayment is false', () => {
    
    it('should not disable continue to payment button', () => {
      shippingSummaryComponent.disableContinueToPayment = false;
      fixture.detectChanges();
      
      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeFalsy();
    });
  });
});
