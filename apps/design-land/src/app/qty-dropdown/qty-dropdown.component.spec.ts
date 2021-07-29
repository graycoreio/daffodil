import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DesignLandQtyDropdownComponent } from './qty-dropdown.component';

describe('DesignLandQtyDropdownComponent', () => {
  let component: DesignLandQtyDropdownComponent;
  let fixture: ComponentFixture<DesignLandQtyDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandQtyDropdownComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandQtyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
