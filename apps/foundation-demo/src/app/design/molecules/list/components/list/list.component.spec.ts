import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListComponent } from './list.component';

describe('DaffListComponent', () => {
  let component: DaffListComponent;
  let fixture: ComponentFixture<DaffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
