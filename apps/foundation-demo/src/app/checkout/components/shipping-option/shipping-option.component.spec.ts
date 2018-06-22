import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionComponent } from './shipping-option.component';

describe('ShippingOptionComponent', () => {
  let component: ShippingOptionComponent;
  let fixture: ComponentFixture<ShippingOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
