import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionsComponent } from './shipping-options.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ShippingFactory, ShippingOption } from '@daffodil/core';

let shippingFactory: ShippingFactory = new ShippingFactory();
let stubShippingOptions = shippingFactory.createShippingOptions();
let stubSelectedShippingOption = stubShippingOptions[0].id;

@Component({template: '<shipping-options [selectedShippingOption]="selectedShippingOptionValue" [shippingOptions]="shippingOptionsValue" (selectShippingOption)="selectShippingOptionFunction($event)"></shipping-options>'})
class TestShippingOptionsWrapper {
  selectedShippingOptionValue: string = stubSelectedShippingOption;
  shippingOptionsValue: ShippingOption[] = stubShippingOptions;
  selectShippingOptionFunction: Function = () => {};
};

describe('ShippingOptionsComponent', () => {
  let component: TestShippingOptionsWrapper;
  let fixture: ComponentFixture<TestShippingOptionsWrapper>;
  let shippingOptionsComponent: ShippingOptionsComponent;
  let shippingOptionsRadios;

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
    shippingOptionsRadios = fixture.debugElement.queryAll(By.css('.shipping-options__radio'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingOptions as input', () => {
    expect(shippingOptionsComponent.shippingOptions).toEqual(stubShippingOptions);
  });

  it('should be able to take selectedShippingOption as input', () => {
    expect(shippingOptionsComponent.selectedShippingOption).toEqual(stubSelectedShippingOption);
  });

  describe('when radio is clicked', () => {
    
    it('should call onSelectShippingOption', () => {
      spyOn(shippingOptionsComponent, 'onSelectShippingOption');

      shippingOptionsRadios[0].nativeElement.click();

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
