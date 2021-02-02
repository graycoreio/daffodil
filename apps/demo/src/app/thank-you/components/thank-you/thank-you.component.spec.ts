import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { ThankYouComponent } from './thank-you.component';

@Component({ selector: 'demo-print-order-summary', template: '' })
class MockPrintOrderSummaryComponent {}

describe('ThankYouComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ThankYouComponent,
        MockPrintOrderSummaryComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
