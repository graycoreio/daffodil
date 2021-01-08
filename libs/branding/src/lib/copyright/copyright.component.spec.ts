import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffCopyrightComponent } from './copyright.component';

describe('DaffCopyrightComponent', () => {
  let component: DaffCopyrightComponent;
  let fixture: ComponentFixture<DaffCopyrightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffCopyrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
