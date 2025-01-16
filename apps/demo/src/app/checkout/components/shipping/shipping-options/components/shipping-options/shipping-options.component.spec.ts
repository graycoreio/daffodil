import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';

import { DemoCheckoutShippingOptionsComponent } from './shipping-options.component';
import { DemoCheckoutShippingFormFactory } from '../../factories/shipping-option-form.factory';
import { DemoCheckoutShippingFormGroup } from '../../models/shipping-form.type';

@Component({
  template: `
    <demo-checkout-shipping-options
      [group]="formGroupValue"
      [options]="optionsValue"
    ></demo-checkout-shipping-options>
  `,
  imports: [
    DemoCheckoutShippingOptionsComponent,
  ],
})
class WrapperComponent {
  formGroupValue: DemoCheckoutShippingFormGroup;
  optionsValue: Array<DaffCartShippingRate>;
};

describe('DemoCheckoutShippingOptionsComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let shippingOptionsComponent: DemoCheckoutShippingOptionsComponent;
  let shippingFactory: DaffCartShippingRateFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    shippingFactory = TestBed.inject(DaffCartShippingRateFactory);

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formGroupValue = TestBed.inject(DemoCheckoutShippingFormFactory).create();
    wrapper.optionsValue = shippingFactory.createMany(3);
    fixture.detectChanges();

    shippingOptionsComponent = fixture.debugElement.query(By.css('demo-checkout-shipping-options')).componentInstance;
  });

  it('should create', () => {
    expect(shippingOptionsComponent).toBeTruthy();
  });

  it('should be able to take group as input', () => {
    expect(shippingOptionsComponent.group).toEqual(wrapper.formGroupValue);
  });

  it('should be able to take options as input', () => {
    expect(shippingOptionsComponent.options).toEqual(wrapper.optionsValue);
  });

  it('should render the shipping options as radios in a radio set', () => {
    const options = fixture.debugElement.queryAll(By.css(`daff-radio-set daff-radio`));
    wrapper.optionsValue.forEach((option, i) => {
      expect(options[i]).toBeTruthy();
    });
  });

  describe('when formControl has not been touched or submitted', () => {

    it('should set errorState to false', () => {
      shippingOptionsComponent.group.controls['id'].markAsUntouched();

      fixture.detectChanges();

      expect(shippingOptionsComponent.errorState).toBeFalsy();
    });
  });

  describe('when formControl has been touched', () => {

    beforeEach(() => {
      shippingOptionsComponent.group.controls['id'].markAsTouched();
    });

    describe('and does not have an error', () => {

      it('should set errorState to false', () => {
        shippingOptionsComponent.group.controls['id'].setValue('valid');
        shippingOptionsComponent.ngDoCheck();

        expect(shippingOptionsComponent.errorState).toBeFalsy();
      });
    });

    describe('and has an error', () => {

      it('should set errorState to true', () => {
        shippingOptionsComponent.group.controls['id'].setValue(null);

        fixture.detectChanges();

        expect(shippingOptionsComponent.errorState).toBeTruthy();
      });
    });
  });

  describe('when errorState is true', () => {

    beforeEach(() => {
      shippingOptionsComponent.group.controls['id'].setValue(null);
      shippingOptionsComponent.group.controls['id'].markAsTouched();
      fixture.detectChanges();
    });

    it('should set hidden to false on .demo-shipping-options__invalid', () => {
      const hostNativeElement = fixture.debugElement.query(By.css('.demo-shipping-options__invalid')).nativeElement;

      expect(hostNativeElement.hidden).toBeFalsy();
    });
  });

  describe('when errorState is false', () => {

    beforeEach(() => {
      shippingOptionsComponent.group.controls['id'].setValue('valid');

      fixture.detectChanges();
    });

    it('should set hidden to true on .demo-shipping-options__invalid', () => {
      const hostNativeElement = fixture.debugElement.query(By.css('.demo-shipping-options__invalid')).nativeElement;

      expect(hostNativeElement.hidden).toBeTruthy();
    });
  });
});
