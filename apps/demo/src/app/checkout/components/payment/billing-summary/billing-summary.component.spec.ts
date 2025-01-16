import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DemoGeographyAddressSummaryComponent } from 'apps/demo/src/app/geography/components/address-summary/address-summary.component';

import { DaffCartAddress } from '@daffodil/cart';
import { DaffCartAddressFactory } from '@daffodil/cart/testing';

import { DemoCheckoutBillingAddressSummaryComponent } from './billing-summary.component';

@Component({
  template: `
    <demo-checkout-billing-summary
      [billingAddress]="billingAddressValue"
      (edit)="editBillingInfoFunction()"
    ></demo-checkout-billing-summary>
  `,
  imports: [
    DemoCheckoutBillingAddressSummaryComponent,
  ],
})
class WrapperComponent {
  billingAddressValue: DaffCartAddress;
  editBillingInfoFunction;
}

describe('DemoCheckoutBillingAddressSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DemoCheckoutBillingAddressSummaryComponent;
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
    wrapper.billingAddressValue = addressFactory.create();
    wrapper.editBillingInfoFunction = jasmine.createSpy();
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('demo-checkout-billing-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take billingAddress', () => {
    expect(component.billingAddress).toEqual(wrapper.billingAddressValue);
  });

  describe('on <demo-geography-address-summary>', () => {
    let summaryComponent: DemoGeographyAddressSummaryComponent;

    beforeEach(() => {
      summaryComponent = fixture.debugElement.query(By.directive(DemoGeographyAddressSummaryComponent)).componentInstance;
    });

    it('should set address', () => {
      expect(summaryComponent.address).toEqual(component.billingAddress);
    });
  });
});
