import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListTitleComponent } from './list-title.component';

describe('DaffListTitleComponent', () => {
  let component: DaffListTitleComponent;
  let fixture: ComponentFixture<DaffListTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffListTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
