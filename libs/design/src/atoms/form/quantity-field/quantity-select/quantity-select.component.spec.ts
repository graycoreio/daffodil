import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffQuantitySelectComponent } from './quantity-select.component';

describe('DaffQuantitySelectComponent', () => {
  let component: DaffQuantitySelectComponent;
  let fixture: ComponentFixture<DaffQuantitySelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffQuantitySelectComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffQuantitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
