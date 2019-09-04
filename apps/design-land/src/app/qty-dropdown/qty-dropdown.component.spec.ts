import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QtyDropdownComponent } from './qty-dropdown.component';

describe('QtyDropdownComponent', () => {
  let component: QtyDropdownComponent;
  let fixture: ComponentFixture<QtyDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtyDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
