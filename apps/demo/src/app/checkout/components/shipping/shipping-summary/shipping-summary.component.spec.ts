import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffCartShippingRate } from '@daffodil/cart';
import { DaffCartShippingRateFactory } from '@daffodil/cart/testing';

import { DemoCheckoutShippingSummaryComponent } from './shipping-summary.component';

@Component({
  template: `
    <demo-checkout-shipping-summary
      [selectedShippingOption]="shippingValue"
      (editShippingInfo)="editShippingInfoFunction()"></demo-checkout-shipping-summary>
  `,
  imports: [
    DemoCheckoutShippingSummaryComponent,
  ],
})
class WrapperComponent {
  shippingValue: DaffCartShippingRate;
  editShippingInfoFunction;
}

describe('DemoCheckoutShippingSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let shippingSummaryComponent: DemoCheckoutShippingSummaryComponent;
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
    wrapper.shippingValue = shippingFactory.create();
    wrapper.editShippingInfoFunction = jasmine.createSpy();
    fixture.detectChanges();

    shippingSummaryComponent = fixture.debugElement.query(By.directive(DemoCheckoutShippingSummaryComponent)).componentInstance;
  });

  it('should create', () => {
    expect(shippingSummaryComponent).toBeTruthy();
  });

  it('should be able to take shippingAddress', () => {
    expect(shippingSummaryComponent.selectedShippingOption).toEqual(wrapper.shippingValue);
  });

  describe('when edit anchor tag is clicked', () => {
    beforeEach(() => {
      fixture.debugElement.query(By.css('a')).nativeElement.click();
    });

    it('should call onEdit', () => {
      expect(wrapper.editShippingInfoFunction).toHaveBeenCalledWith();
    });
  });
});
