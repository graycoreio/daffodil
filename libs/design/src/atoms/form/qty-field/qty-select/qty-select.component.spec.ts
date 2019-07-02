import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffQtySelectComponent } from './qty-select.component';

describe('DaffQtySelectComponent', () => {
  let component: DaffQtySelectComponent;
  let fixture: ComponentFixture<DaffQtySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffQtySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffQtySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
