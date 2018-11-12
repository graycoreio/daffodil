import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffLogoComponent } from './logo.component';

describe('DaffLogoComponent', () => {
  let component: DaffLogoComponent;
  let fixture: ComponentFixture<DaffLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
