import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffInputComponent } from './input.component';

describe('DaffInputComponent', () => {
  let component: DaffInputComponent;
  let fixture: ComponentFixture<DaffInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
