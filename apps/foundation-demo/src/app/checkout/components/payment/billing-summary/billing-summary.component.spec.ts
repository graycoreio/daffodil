import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSummaryComponent } from './billing-summary.component';
import { Component, Input } from '@angular/core';
import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';
import { By } from '@angular/platform-browser';

let daffodilAddressFactory = new DaffodilAddressFactory();
let stubBillingAddress = daffodilAddressFactory.create();
let stubBillingAddressIsShippingAddress: boolean = false;

@Component({template: '<billing-summary [billingAddress]="billingAddressValue" [billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue"></billing-summary>'})
class TestPaymentSummaryWrapper {
  billingAddressValue: DaffodilAddress = stubBillingAddress;
  billingAddressIsShippingAddressValue: boolean = stubBillingAddressIsShippingAddress;
}

@Component({selector: 'address-summary', template: ''})
class MockAddressSummaryComponent {
  @Input() address: DaffodilAddress;
}

describe('BillingSummaryComponent', () => {
  let component: TestPaymentSummaryWrapper;
  let fixture: ComponentFixture<TestPaymentSummaryWrapper>;
  let billingSummary: BillingSummaryComponent;
  let addressSummary: MockAddressSummaryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestPaymentSummaryWrapper,
        BillingSummaryComponent,
        MockAddressSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaymentSummaryWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    billingSummary = fixture.debugElement.query(By.css('billing-summary')).componentInstance;
    addressSummary = fixture.debugElement.query(By.css('address-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take billingAddress as input', () => {
    expect(billingSummary.billingAddress).toEqual(stubBillingAddress);
  });

  it('should be able to take billingAddressIsShippingAddress as input', () => {
    expect(billingSummary.billingAddressIsShippingAddress).toEqual(stubBillingAddressIsShippingAddress);
  });

  describe('on <address-summary>', () => {
    
    it('should set address', () => {
      expect(addressSummary.address).toEqual(stubBillingAddress);
    });
  });

  describe('when billingAddress is null', () => {

    beforeEach(() => {
      billingSummary.billingAddress = null;
      fixture.detectChanges();
    });
    
    it('should not render address-summary', () => {
      let addressSummaryElement = fixture.debugElement.query(By.css('address-summary'));

      expect(addressSummaryElement).toBeNull();
    });
  });

  describe('when billingAddress is defined', () => {

    beforeEach(() => {
      billingSummary.billingAddress = stubBillingAddress;
    });

    describe('and billingAddressIsShippingAddress is false', () => {
      
      it('should render address-summary', () => {
        billingSummary.billingAddressIsShippingAddress = false;
        fixture.detectChanges();

        let addressSummaryElement = fixture.debugElement.query(By.css('address-summary'));

        expect(addressSummaryElement).not.toBeNull();
      });
    });

    describe('and billingAddressIsShippingAddress is true', () => {
      
      it('should not render address-summary', () => {
        billingSummary.billingAddressIsShippingAddress = true;
        fixture.detectChanges();
        
        let addressSummaryElement = fixture.debugElement.query(By.css('address-summary'));

        expect(addressSummaryElement).toBeNull();
      });
    });
  });

  describe('when billingAddressIsShippingAddress is true', () => {

    beforeEach(() => {
      billingSummary.billingAddressIsShippingAddress = true;
      fixture.detectChanges();
    });

    it('should render billing-address-is-shipping-address', () => {
      let billingAddressIsShippingAddress = fixture.debugElement.query(By.css('.billing-summary__billing-address-is-shipping-address'));

      expect(billingAddressIsShippingAddress).not.toBeNull();
    });
  });

  describe('when billingAddressIsShippingAddress is false', () => {

    beforeEach(() => {
      component.billingAddressIsShippingAddressValue = false;
      fixture.detectChanges();
    });

    it('should not render billing-address-is-shipping-address', () => {
      let billingAddressIsShippingAddress = fixture.debugElement.query(By.css('.billing-summary__billing-address-is-shipping-address'));

      expect(billingAddressIsShippingAddress).toBeNull();
    });
  });
});
