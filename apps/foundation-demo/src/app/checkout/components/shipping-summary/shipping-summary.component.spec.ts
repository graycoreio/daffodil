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

@Component({template: '<shipping-summary [shippingInfo]="shippingInfoValue" (editShipping)="editShippingFunction()"></shipping-summary>'})
class TestShippingSummaryWrapper {
  shippingInfoValue: ShippingAddress = stubShippingAddress;
  editShippingFunction: Function = () => {};
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
    
    it('should call editShipping.emit', () => {
      spyOn(shippingSummaryComponent.editShipping, 'emit');

      shippingSummaryComponent.onEdit();

      expect(shippingSummaryComponent.editShipping.emit).toHaveBeenCalled();
    });
  });

  describe('when editShipping is emitted', () => {

    it('should call editShippingFunction', () => {
      spyOn(component, 'editShippingFunction');

      shippingSummaryComponent.editShipping.emit();

      expect(component.editShippingFunction).toHaveBeenCalled();
    });
  });
});
