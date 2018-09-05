import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffSidebarWrapperComponent } from './sidebar-wrapper.component';

describe('DaffSidebarWrapperComponent', () => {
  let component: DaffSidebarWrapperComponent;
  let fixture: ComponentFixture<DaffSidebarWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffSidebarWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
