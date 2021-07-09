import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { CustomRangeQuantityFieldComponent } from './custom-range-quantity-field.component';

describe('CustomRangeQuantityFieldComponent', () => {
  let component: CustomRangeQuantityFieldComponent;
  let fixture: ComponentFixture<CustomRangeQuantityFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRangeQuantityFieldComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRangeQuantityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
