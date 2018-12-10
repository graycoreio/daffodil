import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffodilAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { AddressSummaryComponent } from './address-summary.component';

let daffodilAddressFactory = new DaffAddressFactory();
let stubDaffodilAddress = daffodilAddressFactory.create();

@Component({template: '<address-summary [address]="addressValue"></address-summary>'})
class TestShippingSummaryWrapper {
  addressValue: DaffodilAddress = stubDaffodilAddress;
}

describe('AddressSummaryComponent', () => {
  let component: TestShippingSummaryWrapper;
  let fixture: ComponentFixture<TestShippingSummaryWrapper>;
  let addressSummary: AddressSummaryComponent;

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
