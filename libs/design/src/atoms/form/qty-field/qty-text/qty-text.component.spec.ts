import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffQtyTextComponent } from './qty-text.component';

describe('DaffQtyTextComponent', () => {
  let component: DaffQtyTextComponent;
  let fixture: ComponentFixture<DaffQtyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffQtyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffQtyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
