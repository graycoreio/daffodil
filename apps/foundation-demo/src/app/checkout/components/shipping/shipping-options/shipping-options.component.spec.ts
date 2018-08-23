import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionsComponent } from './shipping-options.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ShippingOption } from '@daffodil/core';
import { ShippingFactory } from '@daffodil/core/testing';

let shippingFactory: ShippingFactory = new ShippingFactory();
let stubShippingOptions = shippingFactory.createShippingOptions();
let stubSelectedShippingOptionId = stubShippingOptions[0].id;

@Component({
  template: '<shipping-options ' + 
              '[selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
              '[shippingOptions]="shippingOptionsValue" ' + 
              '(selectShippingOption)="selectShippingOptionFunction($event)"></shipping-options>'
})
class TestShippingOptionsWrapper {
  selectedShippingOptionIdValue: number = stubSelectedShippingOptionId;
  shippingOptionsValue: ShippingOption[] = stubShippingOptions;
  selectShippingOptionFunction = () => {};
};

describe('ShippingOptionsComponent', () => {
  let component: TestShippingOptionsWrapper;
  let fixture: ComponentFixture<TestShippingOptionsWrapper>;
  let shippingOptionsComponent: ShippingOptionsComponent;
  let shippingOptionsRadioWrappers;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestShippingOptionsWrapper,
        ShippingOptionsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingOptionsWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingOptionsComponent = fixture.debugElement.query(By.css('shipping-options')).componentInstance;
    shippingOptionsRadioWrappers = fixture.debugElement.queryAll(By.css('.shipping-options__radio'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingOptions as input', () => {
    expect(shippingOptionsComponent.shippingOptions).toEqual(stubShippingOptions);
  });

  it('should be able to take selectedShippingOptionId as input', () => {
    expect(shippingOptionsComponent.selectedShippingOptionId).toEqual(stubSelectedShippingOptionId);
  });

  describe('when radio wrapper is clicked', () => {
    
    it('should not call onSelectShippingOption', () => {
      spyOn(shippingOptionsComponent, 'onSelectShippingOption');

      shippingOptionsRadioWrappers[0].nativeElement.click();

      expect(shippingOptionsComponent.onSelectShippingOption).not.toHaveBeenCalled();
    });
  });

  describe('when radio input button is clicked', () => {
    
    it('should call onSelectShippingOption', () => {
      let radioInputs = fixture.debugElement.queryAll(By.css('input'));
      spyOn(shippingOptionsComponent, 'onSelectShippingOption');

      radioInputs[0].nativeElement.click();

      expect(shippingOptionsComponent.onSelectShippingOption).toHaveBeenCalledWith(stubShippingOptions[0].text);
    });
  });

  describe('when radio label is clicked', () => {
    
    it('should call onSelectShippingOption', () => {
      let radioLabels = fixture.debugElement.queryAll(By.css('label'));
      spyOn(shippingOptionsComponent, 'onSelectShippingOption');

      radioLabels[0].nativeElement.click();

      expect(shippingOptionsComponent.onSelectShippingOption).toHaveBeenCalledWith(stubShippingOptions[0].id);
    });
  });

  describe('when onSelectShippingOption is called', () => {
    
    it('should emit selectShippingOption', () => {
      spyOn(shippingOptionsComponent.selectShippingOption, 'emit');

      shippingOptionsComponent.onSelectShippingOption(stubShippingOptions[0].id);

      expect(shippingOptionsComponent.selectShippingOption.emit).toHaveBeenCalledWith(stubShippingOptions[0].id);
    });
  });

  describe('when selectShippingOption is emitted', () => {
    
    it('should call the function passed by host', () => {
      spyOn(component, 'selectShippingOptionFunction');

      shippingOptionsComponent.selectShippingOption.emit(stubShippingOptions[0].id);

      expect(component.selectShippingOptionFunction).toHaveBeenCalledWith(stubShippingOptions[0].id);
    });
  });
});
