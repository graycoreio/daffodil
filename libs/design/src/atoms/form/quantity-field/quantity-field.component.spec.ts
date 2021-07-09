import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffQuantityFieldComponent } from './quantity-field.component';

describe('DaffQuantityFieldComponent', () => {
  let component: DaffQuantityFieldComponent;
  let fixture: ComponentFixture<DaffQuantityFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffQuantityFieldComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffQuantityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
