import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';
import { DaffGeographyTestingDriverModule } from '@daffodil/geography/driver/testing';
import { DaffGeographyStateTestingModule } from '@daffodil/geography/state/testing';

import { DemoCheckoutShippingFormComponent } from './shipping-form.component';
import { DemoCheckoutShippingOptionsComponent } from '../shipping-options/components/shipping-options/shipping-options.component';

@Component({
  template: `
    <demo-checkout-shipping-form
      [selectedOption]="selectedOptionValue"
      [options]="optionsValue"
      (submitted)="submittedFunction($event)"></demo-checkout-shipping-form>
  `,
  imports: [
    DemoCheckoutShippingFormComponent,
  ],
})
class WrapperComponent {
  selectedOptionValue: DaffCartShippingRate;
  optionsValue: Array<DaffCartShippingRate>;
  submittedFunction;
}

describe('DemoCheckoutShippingFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let shippingFormComponent: DemoCheckoutShippingFormComponent;
  let shippingFactory: DaffCartShippingRateFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        DaffGeographyStateTestingModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        DaffGeographyTestingDriverModule.forRoot(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    shippingFactory = TestBed.inject(DaffCartShippingRateFactory);

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.submittedFunction = jasmine.createSpy();
    wrapper.optionsValue = shippingFactory.createMany(3);
    wrapper.selectedOptionValue = wrapper.optionsValue[0];

    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('demo-checkout-shipping-form')).componentInstance;
  });

  it('should create', () => {
    expect(shippingFormComponent).toBeTruthy();
  });

  it('should be able to take options as input', () => {
    expect(shippingFormComponent.options).toEqual(wrapper.optionsValue);
  });

  it('should be able to take selectedOption as input', () => {
    expect(shippingFormComponent.selectedOption).toEqual(wrapper.selectedOptionValue);
  });

  it('should init the form value to the selected option', () => {
    expect(shippingFormComponent.form.value.id).toEqual(wrapper.selectedOptionValue.id);
  });

  describe('on <demo-checkout-shipping-options>', () => {
    let shippingOptionsComponent: DemoCheckoutShippingOptionsComponent;

    beforeEach(() => {
      shippingOptionsComponent = fixture.debugElement.query(By.directive(DemoCheckoutShippingOptionsComponent)).componentInstance;
    });

    it('should set formGroup', () => {
      expect(shippingOptionsComponent.group).toEqual(shippingFormComponent.form);
    });

    it('should set options', () => {
      expect(shippingOptionsComponent.options).toEqual(shippingFormComponent.options);
    });
  });

  describe('when the submit button is clicked', () => {
    describe('when form is valid', () => {
      let option: DaffCartShippingRate;

      beforeEach(() => {
        option = wrapper.optionsValue[1];
        shippingFormComponent.form.setValue({ id: option.id });
        fixture.debugElement.query(By.css('.demo-checkout-shipping-form__button')).nativeElement.click();
        fixture.detectChanges();
      });

      it('should emit submitted with the option', () => {
        expect(wrapper.submittedFunction).toHaveBeenCalledWith(option);
      });
    });

    describe('when form is invalid', () => {
      beforeEach(() => {
        shippingFormComponent.form.setValue({ id: null });
        fixture.debugElement.query(By.css('.demo-checkout-shipping-form__button')).nativeElement.click();
        fixture.detectChanges();
      });

      it('should not call submitted.emit', () => {
        expect(wrapper.submittedFunction).not.toHaveBeenCalled();
      });
    });
  });
});
