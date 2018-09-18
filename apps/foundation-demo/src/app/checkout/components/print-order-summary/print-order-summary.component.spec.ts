import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOrderSummaryComponent } from './print-order-summary.component';

describe('PrintOrderSummaryComponent', () => {
  let component: PrintOrderSummaryComponent;
  let fixture: ComponentFixture<PrintOrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintOrderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
