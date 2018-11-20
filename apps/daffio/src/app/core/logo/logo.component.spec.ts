import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioLogoComponent } from './logo.component';

describe('DaffioLogoComponent', () => {
  let component: DaffioLogoComponent;
  let fixture: ComponentFixture<DaffioLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffioLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
