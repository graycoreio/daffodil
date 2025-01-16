import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DemoGeographyAddressSummaryComponent } from 'apps/demo/src/app/geography/components/address-summary/address-summary.component';

import { DaffCartAddressFactory } from '@daffodil/cart/testing';
import { DaffPersonalAddress } from '@daffodil/geography';

import { DemoCheckoutShippingAddressSummaryComponent } from './shipping-address-summary.component';

@Component({
  template: `
    <demo-checkout-shipping-address-summary
      [shippingAddress]="shippingAddressValue"
      (edit)="editShippingInfoFunction()"
    ></demo-checkout-shipping-address-summary>
  `,
  imports: [
    DemoCheckoutShippingAddressSummaryComponent,
  ],
})
class WrapperComponent {
  shippingAddressValue: DaffPersonalAddress;
  editShippingInfoFunction;
}

describe('DemoCheckoutShippingAddressSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DemoCheckoutShippingAddressSummaryComponent;
  let addressFactory: DaffCartAddressFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    addressFactory = TestBed.inject(DaffCartAddressFactory);

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.shippingAddressValue = addressFactory.create();
    wrapper.editShippingInfoFunction = jasmine.createSpy();
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('demo-checkout-shipping-address-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take shippingAddress', () => {
    expect(component.shippingAddress).toEqual(wrapper.shippingAddressValue);
  });

  describe('on <demo-geography-address-summary>', () => {
    let summaryComponent: DemoGeographyAddressSummaryComponent;

    beforeEach(() => {
      summaryComponent = fixture.debugElement.query(By.directive(DemoGeographyAddressSummaryComponent)).componentInstance;
    });

    it('should set address', () => {
      expect(summaryComponent.address).toEqual(component.shippingAddress);
    });
  });

  describe('when edit anchor tag is clicked', () => {
    beforeEach(() => {
      fixture.debugElement.query(By.css('a')).nativeElement.click();
      fixture.detectChanges();
    });

    it('should emit edit', () => {
      expect(wrapper.editShippingInfoFunction).toHaveBeenCalledWith();
    });
  });
});
