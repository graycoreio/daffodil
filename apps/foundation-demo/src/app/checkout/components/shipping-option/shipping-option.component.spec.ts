import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionComponent } from './shipping-option.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

let stubShippingOption = 'shipping option';

@Component({template: '<shipping-option [shippingOption]="shippingOptionValue" (updateShippingOption)="updateShippingOptionFunction($event)"></shipping-option>'})
class TestShippingOptionWrapper {
  shippingOptionValue: string = stubShippingOption;
  updateShippingOptionFunction: Function = () => {};
};

describe('ShippingOptionComponent', () => {
  let component: TestShippingOptionWrapper;
  let fixture: ComponentFixture<TestShippingOptionWrapper>;
  let shippingOptionComponent: ShippingOptionComponent;
  let shippingOptionRadios;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestShippingOptionWrapper,
        ShippingOptionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingOptionWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingOptionComponent = fixture.debugElement.query(By.css('shipping-option')).componentInstance;
    shippingOptionRadios = fixture.debugElement.queryAll(By.css('.shipping-option__radio'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingOption as input', () => {
    expect(shippingOptionComponent.shippingOption).toEqual(stubShippingOption);
  });

  describe('when standard-shipping radio is clicked', () => {
    
    it('should call onUpdateShippingOption', () => {
      spyOn(shippingOptionComponent, 'onUpdateShippingOption');

      shippingOptionRadios[0].nativeElement.click();

      expect(shippingOptionComponent.onUpdateShippingOption).toHaveBeenCalledWith('standard-shipping');
    });
  });

  describe('when two-day-shipping radio is clicked', () => {
    
    it('should call onUpdateShippingOption', () => {
      spyOn(shippingOptionComponent, 'onUpdateShippingOption');

      shippingOptionRadios[1].nativeElement.click();

      expect(shippingOptionComponent.onUpdateShippingOption).toHaveBeenCalledWith('two-day-shipping');
    });
  });

  describe('when one-day-shipping radio is clicked', () => {
    
    it('should call onUpdateShippingOption', () => {
      spyOn(shippingOptionComponent, 'onUpdateShippingOption');

      shippingOptionRadios[2].nativeElement.click();

      expect(shippingOptionComponent.onUpdateShippingOption).toHaveBeenCalledWith('one-day-shipping');
    });
  });

  describe('when onUpdateShippingOption is called', () => {
    
    it('should emit updateShippingOption', () => {
      spyOn(shippingOptionComponent.updateShippingOption, 'emit');

      shippingOptionComponent.onUpdateShippingOption(stubShippingOption);

      expect(shippingOptionComponent.updateShippingOption.emit).toHaveBeenCalledWith(stubShippingOption);
    });
  });

  describe('when updateShippingOption is emitted', () => {
    
    it('should call the function passed by host', () => {
      spyOn(component, 'updateShippingOptionFunction');

      shippingOptionComponent.updateShippingOption.emit(stubShippingOption);

      expect(component.updateShippingOptionFunction).toHaveBeenCalledWith(stubShippingOption);
    });
  });
});
