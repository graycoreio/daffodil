import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { SelectMaxQuantityFieldComponent } from './select-max-quantity-field.component';

describe('SelectMaxQuantityFieldComponent', () => {
  let component: SelectMaxQuantityFieldComponent;
  let fixture: ComponentFixture<SelectMaxQuantityFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMaxQuantityFieldComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMaxQuantityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
