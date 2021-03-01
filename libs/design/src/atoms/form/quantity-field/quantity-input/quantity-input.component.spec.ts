import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffQuantityInputComponent } from './quantity-input.component';

describe('DaffQuantityInputComponent', () => {
  let component: DaffQuantityInputComponent;
  let fixture: ComponentFixture<DaffQuantityInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffQuantityInputComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffQuantityInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
