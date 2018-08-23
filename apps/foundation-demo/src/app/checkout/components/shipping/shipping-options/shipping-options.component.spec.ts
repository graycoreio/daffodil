import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionsComponent } from './shipping-options.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ShippingOption } from '@daffodil/core';
import { ShippingFactory } from '@daffodil/core/testing';

let stubShippingOptions = [ 'option1', 'option2'];
let stubSelectedShippingOptionIndex = 0;

@Component({
  template: '<shipping-options ' + 
              '[selectedShippingOptionIndex]="selectedShippingOptionIndexValue" ' + 
              '[shippingOptions]="shippingOptionsValue" ' + 
              '(selectShippingOption)="selectShippingOptionFunction($event)"></shipping-options>'
})
class TestShippingOptionsWrapper {
  selectedShippingOptionIndexValue: number = stubSelectedShippingOptionIndex;
  shippingOptionsValue: string[] = stubShippingOptions;
  selectShippingOptionFunction = () => {};
};

describe('ShippingOptionsComponent', () => {
  let component: TestShippingOptionsWrapper;
  let fixture: ComponentFixture<TestShippingOptionsWrapper>;
  let shippingOptionsComponent: ShippingOptionsComponent;
  let shippingOptionsRadioWrappers;
  let selectedIndex = 0;

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

  it('should be able to take selectedShippingOptionIndex as input', () => {
    expect(shippingOptionsComponent.selectedShippingOptionIndex).toEqual(stubSelectedShippingOptionIndex);
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

      expect(shippingOptionsComponent.onSelectShippingOption).toHaveBeenCalledWith(selectedIndex);
    });
  });

  describe('when onSelectShippingOption is called', () => {
    
    it('should emit selectShippingOption', () => {
      spyOn(shippingOptionsComponent.selectShippingOption, 'emit');

      shippingOptionsComponent.onSelectShippingOption(selectedIndex);

      expect(shippingOptionsComponent.selectShippingOption.emit).toHaveBeenCalledWith(selectedIndex);
    });
  });

  describe('when selectShippingOption is emitted', () => {
    
    it('should call the function passed by host', () => {
      spyOn(component, 'selectShippingOptionFunction');

      shippingOptionsComponent.selectShippingOption.emit(selectedIndex);

      expect(component.selectShippingOptionFunction).toHaveBeenCalledWith(selectedIndex);
    });
  });
});
