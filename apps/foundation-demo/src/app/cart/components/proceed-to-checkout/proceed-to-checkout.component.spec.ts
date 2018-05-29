import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedToCheckoutComponent } from './proceed-to-checkout.component';
import { By } from '@angular/platform-browser';

describe('ProceedToCheckoutComponent', () => {
  let component: ProceedToCheckoutComponent;
  let fixture: ComponentFixture<ProceedToCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedToCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedToCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a proceed to checkout button', () => {
    expect(fixture.debugElement.query(By.css('.button'))).toBeDefined();
  });
});
