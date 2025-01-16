import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DaffCartAddressFactory } from '@daffodil/cart/testing';
import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffGeographyTestingDriverModule } from '@daffodil/geography/driver/testing';

import { DemoCheckoutShippingAddressFormComponent } from './shipping-address-form.component';
import { DemoCheckoutAddressFormComponent } from '../../forms/address/components/address-form/address-form.component';
import { DemoCheckoutAddressFormFactory } from '../../forms/address/factories/address-form.factory';
import { DemoCheckoutAddressFormGroup } from '../../forms/address/models/address-form.type';


@Component({
  template: `
    <demo-checkout-shipping-address-form
      [shippingAddress]="shippingAddressValue"
      (submitted)="submittedFunction($event)"></demo-checkout-shipping-address-form>
  `,
  imports: [
    DemoCheckoutShippingAddressFormComponent,
  ],
})
class WrapperComponent {
  shippingAddressValue: DaffPersonalAddress;
  submittedFunction;
}

describe('DemoCheckoutShippingAddressFormComponent', () => {
  let addressFactory: DaffCartAddressFactory;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DemoCheckoutShippingAddressFormComponent;
  let stubDemoCheckoutAddressFormGroup: DemoCheckoutAddressFormGroup;
  let stubShippingAddress: DaffPersonalAddress;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        DaffGeographyTestingDriverModule.forRoot(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    stubDemoCheckoutAddressFormGroup = TestBed.inject(DemoCheckoutAddressFormFactory).create(stubShippingAddress);
    addressFactory = TestBed.inject(DaffCartAddressFactory);

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    stubShippingAddress = addressFactory.create();
    wrapper.shippingAddressValue = stubShippingAddress;
    wrapper.submittedFunction = jasmine.createSpy();

    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('demo-checkout-shipping-address-form')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingAddress as input', () => {
    expect(component.shippingAddress).toEqual(wrapper.shippingAddressValue);
  });

  it('should init the form with shipping address data', () => {
    expect(component.form.value.street).toEqual(stubShippingAddress.street);
  });

  describe('on <demo-checkout-address-form>', () => {
    let addressFormComponent: DemoCheckoutAddressFormComponent;

    beforeEach(() => {
      addressFormComponent = fixture.debugElement.query(By.directive(DemoCheckoutAddressFormComponent)).componentInstance;
    });

    it('should set formGroup', () => {
      expect(addressFormComponent.formGroup).toEqual(component.form);
    });
  });

  describe('onSubmit', () => {
    describe('when form is valid', () => {
      beforeEach(() => {
        component.onSubmit(component.form);
      });

      it('should call submitted.emit', () => {
        expect(wrapper.submittedFunction).toHaveBeenCalledWith(component.form.value);
      });
    });

    describe('when form is invalid', () => {

      it('should not call submitted.emit', () => {
        spyOn(component.submitted, 'emit');

        component.onSubmit(component.form);

        expect(wrapper.submittedFunction).not.toHaveBeenCalled();
      });
    });
  });
});
