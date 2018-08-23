import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffodilAddress, DaffodilAddressFactory, ShippingOption } from '@daffodil/core';

import { ShippingSummaryComponent } from './shipping-summary.component';

let daffodilAddressFactory = new DaffodilAddressFactory();
let stubDaffodilAddress = daffodilAddressFactory.create();

@Component({
  template: '<shipping-summary [selectedShippingOption]="selectedShippingOptionValue" ' + 
              '[shippingInfo]="shippingInfoValue" ' + 
              '(editShippingInfo)="editShippingInfoFunction()"></shipping-summary>'})
class TestShippingSummaryWrapper {
  shippingInfoValue: DaffodilAddress = stubDaffodilAddress;
  selectedShippingOptionValue: ShippingOption = {id: 0, text:'shippingOption'};
  editShippingInfoFunction: Function = () => {};
}

@Component({selector: 'address-summary', template: ''})
class MockAddressSummaryComponent {
  @Input() address: DaffodilAddress;
}

describe('ShippingSummaryComponent', () => {
  let component: TestShippingSummaryWrapper;
  let fixture: ComponentFixture<TestShippingSummaryWrapper>;
  let shippingSummaryComponent: ShippingSummaryComponent;
  let addressSummaryComponent: MockAddressSummaryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestShippingSummaryWrapper,
        ShippingSummaryComponent,
        MockAddressSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingSummaryWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingSummaryComponent = fixture.debugElement.query(By.css('shipping-summary')).componentInstance;
    addressSummaryComponent = fixture.debugElement.query(By.css('address-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingInfo', () => {
    expect(shippingSummaryComponent.shippingInfo).toEqual(stubDaffodilAddress);
  });

  it('should be able to take selectedShippingOption', () => {
    expect(shippingSummaryComponent.selectedShippingOption).toEqual(component.selectedShippingOptionValue);
  });

  describe('on <address-summary', () => {

    it('should set address', () => {
      expect(addressSummaryComponent.address).toEqual(stubDaffodilAddress);
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
});
