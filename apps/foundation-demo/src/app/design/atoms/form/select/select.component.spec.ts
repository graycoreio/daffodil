import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffSelectComponent } from './select.component';

describe('DaffSelectComponent', () => {
  let component: DaffSelectComponent;
  let fixture: ComponentFixture<DaffSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
