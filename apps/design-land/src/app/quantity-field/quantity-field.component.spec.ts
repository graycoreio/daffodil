import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DesignLandQuantityFieldComponent } from './quantity-field.component';

describe('DesignLandQuantityFieldComponent', () => {
  let component: DesignLandQuantityFieldComponent;
  let fixture: ComponentFixture<DesignLandQuantityFieldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandQuantityFieldComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandQuantityFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
