import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { BasicQuantityFieldComponent } from './basic-quantity-field.component';

describe('BasicQuantityFieldComponent', () => {
  let component: BasicQuantityFieldComponent;
  let fixture: ComponentFixture<BasicQuantityFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicQuantityFieldComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicQuantityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
