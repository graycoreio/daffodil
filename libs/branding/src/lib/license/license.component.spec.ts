import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffLicenseComponent } from './license.component';

describe('DaffLicenseComponent', () => {
  let component: DaffLicenseComponent;
  let fixture: ComponentFixture<DaffLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
