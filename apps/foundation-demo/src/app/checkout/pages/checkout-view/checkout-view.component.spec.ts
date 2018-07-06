import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutViewComponent } from './checkout-view.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({selector: 'shipping-wrapper', template: ''})
class MockShippingWrapperComponent {}

describe('CheckoutViewComponent', () => {
  let component: CheckoutViewComponent;
  let fixture: ComponentFixture<CheckoutViewComponent>;
  let shippingWrapper: MockShippingWrapperComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutViewComponent,
        MockShippingWrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingWrapper = fixture.debugElement.query(By.css('shipping-wrapper')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render <shipping-wrapper>', () => {
    expect(shippingWrapper).not.toBeNull();
  });
});
