import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSummaryComponent } from './shipping-summary.component';
import { Component } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { By } from '@angular/platform-browser';

let stubShippingAddress = {
  firstname: 'firstname',
  lastname: 'lastname',
  street: 'street',
  city: 'city',
  state: 'state',
  postcode: 'postcode',
  telephone: 'telephone'
};

@Component({selector: 'shipping-option', template: ''})
class MockShippingOptionComponent {}

@Component({template: '<shipping-summary [shippingInfo]="shippingInfoValue" (editShippingInfo)="editShippingInfoFunction()"></shipping-summary>'})
class TestShippingSummaryWrapper {
  shippingInfoValue: ShippingAddress = stubShippingAddress;
  editShippingInfoFunction: Function = () => {};
}

describe('ShippingSummaryComponent', () => {
  let component: TestShippingSummaryWrapper;
  let fixture: ComponentFixture<TestShippingSummaryWrapper>;
  let shippingSummaryComponent: ShippingSummaryComponent;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingInfo', () => {
    expect(shippingSummaryComponent.shippingInfo).toEqual(stubShippingAddress);
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
