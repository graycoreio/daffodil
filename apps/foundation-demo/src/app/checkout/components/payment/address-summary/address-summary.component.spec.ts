import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSummaryComponent } from './address-summary.component';
import { Component } from '@angular/core';
import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';
import { By } from '@angular/platform-browser';

let daffodilAddressFactory = new DaffodilAddressFactory();
let stubDaffodilAddress = daffodilAddressFactory.create();

@Component({template: '<address-summary [address]="addressValue"></address-summary>'})
class TestShippingSummaryWrapper {
  addressValue: DaffodilAddress = stubDaffodilAddress;
}

describe('AddressSummaryComponent', () => {
  let component: TestShippingSummaryWrapper;
  let fixture: ComponentFixture<TestShippingSummaryWrapper>;
  let addressSummary;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestShippingSummaryWrapper,
        AddressSummaryComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingSummaryWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    addressSummary = fixture.debugElement.query(By.css('address-summary')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take address as input', () => {
    expect(addressSummary.address).toEqual(stubDaffodilAddress);
  });
});
