import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { BillingSummaryComponent } from './billing-summary.component';

const daffodilAddressFactory = new DaffAddressFactory();
const stubBillingAddress = daffodilAddressFactory.create();
const stubBillingAddressIsShippingAddress = false;

@Component({template: '<demo-billing-summary [billingAddress]="billingAddressValue" [billingAddressIsShippingAddress]="billingAddressIsShippingAddressValue"></demo-billing-summary>'})
class WrapperComponent {
  billingAddressValue: DaffAddress = stubBillingAddress;
  billingAddressIsShippingAddressValue: boolean = stubBillingAddressIsShippingAddress;
}

@Component({selector: 'demo-address-summary', template: ''})
class MockAddressSummaryComponent {
  @Input() address: DaffAddress;
}

describe('BillingSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let billingSummary: BillingSummaryComponent;
  let addressSummary: MockAddressSummaryComponent;
  let addressSummaryElement;
  let billingAddressIsShippingAddress;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        BillingSummaryComponent,
        MockAddressSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    billingSummary = fixture.debugElement.query(By.css('demo-billing-summary')).componentInstance;
    addressSummary = fixture.debugElement.query(By.css('demo-address-summary')).componentInstance;
  });

  it('should create', () => {
    expect(billingSummary).toBeTruthy();
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
    
    it('should not render demo-address-summary', () => {
      addressSummaryElement = fixture.debugElement.query(By.css('demo-address-summary'));

      expect(addressSummaryElement).toBeNull();
    });
  });

  describe('when billingAddress is defined', () => {

    beforeEach(() => {
      billingSummary.billingAddress = stubBillingAddress;
    });

    describe('and billingAddressIsShippingAddress is false', () => {
      
      it('should render demo-address-summary', () => {
        billingSummary.billingAddressIsShippingAddress = false;
        fixture.detectChanges();

        addressSummaryElement = fixture.debugElement.query(By.css('demo-address-summary'));

        expect(addressSummaryElement).not.toBeNull();
      });
    });

    describe('and billingAddressIsShippingAddress is true', () => {
      
      it('should not render demo-address-summary', () => {
        billingSummary.billingAddressIsShippingAddress = true;
        fixture.detectChanges();
        
        addressSummaryElement = fixture.debugElement.query(By.css('demo-address-summary'));

        expect(addressSummaryElement).toBeNull();
      });
    });
  });

  describe('when billingAddressIsShippingAddress is true', () => {

    beforeEach(() => {
      billingSummary.billingAddressIsShippingAddress = true;
      fixture.detectChanges();
    });

    it('should render note', () => {
      billingAddressIsShippingAddress = fixture.debugElement.query(By.css('.demo-billing-summary__note'));

      expect(billingAddressIsShippingAddress).not.toBeNull();
    });
  });

  describe('when billingAddressIsShippingAddress is false', () => {

    beforeEach(() => {
      billingSummary.billingAddressIsShippingAddress = false;
      fixture.detectChanges();
    });

    it('should not render note', () => {
      billingAddressIsShippingAddress = fixture.debugElement.query(By.css('.demo-billing-summary__note'));

      expect(billingAddressIsShippingAddress).toBeNull();
    });
  });
});
