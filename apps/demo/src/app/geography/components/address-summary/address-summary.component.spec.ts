import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffPersonalAddress } from '@daffodil/geography';
import { DaffPersonalAddressFactory } from '@daffodil/geography/testing';

import { DemoGeographyAddressSummaryComponent } from './address-summary.component';

@Component({
  template: '<demo-geography-address-summary [address]="addressValue"></demo-geography-address-summary>',
  imports: [
    DemoGeographyAddressSummaryComponent,
  ],
})
class WrapperComponent {
  addressValue: DaffPersonalAddress;
}

describe('DemoGeographyAddressSummaryComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let addressSummary: DemoGeographyAddressSummaryComponent;
  let addressFactory: DaffPersonalAddressFactory;
  let stubDaffodilAddress: DaffPersonalAddress;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    addressFactory = TestBed.inject(DaffPersonalAddressFactory);
    stubDaffodilAddress = addressFactory.create();

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.addressValue = stubDaffodilAddress;

    fixture.detectChanges();

    addressSummary = fixture.debugElement.query(By.css('demo-geography-address-summary')).componentInstance;
  });

  it('should create', () => {
    expect(addressSummary).toBeTruthy();
  });

  it('should be able to take address as input', () => {
    expect(addressSummary.address).toEqual(stubDaffodilAddress);
  });
});
