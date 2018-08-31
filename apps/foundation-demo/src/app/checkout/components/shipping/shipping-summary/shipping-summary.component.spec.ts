import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffodilAddress, DaffodilAddressFactory, ShippingOption, ShippingFactory } from '@daffodil/core';

import { ShippingSummaryComponent } from './shipping-summary.component';
import { ShippingOptionsService } from '../shipping-options/components/services/shipping-options.service';
import { ShippingOptionsFactory } from '../shipping-options/components/factories/shipping-options.factory';

let daffodilAddressFactory = new DaffodilAddressFactory();
let stubDaffodilAddress = daffodilAddressFactory.create();

@Component({
  template: '<shipping-summary [selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
              '[shippingInfo]="shippingInfoValue" ' + 
              '(editShippingInfo)="editShippingInfoFunction()"></shipping-summary>'})
class TestShippingSummaryWrapper {
  shippingInfoValue: DaffodilAddress = stubDaffodilAddress;
  selectedShippingOptionIdValue: string = '0';
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
  let shippingOptionsService: ShippingOptionsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestShippingSummaryWrapper,
        ShippingSummaryComponent,
        MockAddressSummaryComponent
      ],
      providers: [
        ShippingOptionsService,
        ShippingOptionsFactory
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingSummaryWrapper);
    shippingOptionsService = TestBed.get(ShippingOptionsService);
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

  it('should be able to take selectedShippingOptionId', () => {
    expect(shippingSummaryComponent.selectedShippingOptionId).toEqual(component.selectedShippingOptionIdValue);
  });

  it('should set shippingOptions', () => {
    expect(shippingSummaryComponent.shippingOptions).toEqual(shippingOptionsService.getShippingOptions());
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
