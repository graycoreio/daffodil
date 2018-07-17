import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingSummaryComponent } from './shipping-summary.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShippingAddress, ShippingFactory, ShippingOption } from '@daffodil/core';
import { By } from '@angular/platform-browser';
import { ShippingOptionsComponent } from '../shipping-options/shipping-options.component';

let shippingFactory = new ShippingFactory();
let stubShippingAddress = shippingFactory.createShippingAddress();

@Component({selector: 'shipping-options', template: ''})
class MockShippingOptionsComponent {
  @Input() selectedShippingOption: string;
  @Input() shippingOptions: string;
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({template: '<shipping-summary [selectedShippingOption]="selectedShippingOptionValue" [shippingInfo]="shippingInfoValue" (editShippingInfo)="editShippingInfoFunction()" (selectShippingOption)="selectShippingOptionFunction($event)"></shipping-summary>'})
class TestShippingSummaryWrapper {
  shippingInfoValue: ShippingAddress = stubShippingAddress;
  selectedShippingOptionValue: string = 'id';
  editShippingInfoFunction: Function = () => {};
  selectShippingOptionFunction: Function = () => {};
}

describe('ShippingSummaryComponent', () => {
  let component: TestShippingSummaryWrapper;
  let fixture: ComponentFixture<TestShippingSummaryWrapper>;
  let shippingSummaryComponent: ShippingSummaryComponent;
  let shippingOptionsComponent: ShippingOptionsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MockShippingOptionsComponent,
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
    shippingOptionsComponent = fixture.debugElement.query(By.css('shipping-options')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingInfo', () => {
    expect(shippingSummaryComponent.shippingInfo).toEqual(stubShippingAddress);
  });

  it('should be able to take selectedShippingOption', () => {
    expect(shippingSummaryComponent.selectedShippingOption).toEqual(component.selectedShippingOptionValue);
  });

  describe('constructor', () => {
    
    it('should generate an array of shippingOptions', () => {
      expect(shippingSummaryComponent.shippingOptions.length).toEqual(3);
    });

    it('should generate a shippingOptions array with standard-shipping', () => {
      expect(shippingSummaryComponent.shippingOptions[0].id).toEqual('standard-shipping');
    });

    it('should generate a shippingOptions array with two-day-shipping', () => {
      expect(shippingSummaryComponent.shippingOptions[1].id).toEqual('two-day-shipping');
    });

    it('should generate a shippingOptions array with one-day-shipping', () => {
      expect(shippingSummaryComponent.shippingOptions[2].id).toEqual('one-day-shipping');
    });
  });

  describe('on <shipping-options>', () => {
    
    it('should set shippingOptions', () => {
      expect(shippingOptionsComponent.shippingOptions).toEqual(shippingSummaryComponent.shippingOptions);
    });
  });

  describe('when shippingOptions.selectShippingOption is emitted', () => {
    
    it('should call onSelectShippingOption', () => {
      spyOn(shippingSummaryComponent, 'onSelectShippingOption');

      shippingOptionsComponent.selectShippingOption.emit(shippingSummaryComponent.shippingOptions[0].id);

      expect(shippingSummaryComponent.onSelectShippingOption).toHaveBeenCalledWith(shippingSummaryComponent.shippingOptions[0].id);
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

  describe('onSelectShippingOption', () => {

    beforeEach(() => {
      spyOn(shippingSummaryComponent.selectShippingOption, 'emit');

      shippingSummaryComponent.onSelectShippingOption(shippingSummaryComponent.shippingOptions[0].id);
    });
    
    it('should call selectShippingOption.emit', () => {
      expect(shippingSummaryComponent.selectShippingOption.emit).toHaveBeenCalledWith(shippingSummaryComponent.shippingOptions[0].id);
    });
  });

  describe('when selectShippingOption is emitted', () => {

    it('should call selectShippingOptionFunction', () => {
      spyOn(component, 'selectShippingOptionFunction');

      shippingSummaryComponent.selectShippingOption.emit(shippingSummaryComponent.shippingOptions[0].id);

      expect(component.selectShippingOptionFunction).toHaveBeenCalledWith(shippingSummaryComponent.shippingOptions[0].id);
    });
  });

  describe('when selectedShippingOption is null', () => {
    
    it('should disable Continue to Payment button', () => {
      shippingSummaryComponent.selectedShippingOption = null;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    });
  });

  describe('when selectedShippingOption is defined', () => {
    
    it('should disable Continue to Payment button', () => {
      shippingSummaryComponent.selectedShippingOption = 'defined';
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('button')).nativeElement.disabled).toBeFalsy();
    });
  });
});
