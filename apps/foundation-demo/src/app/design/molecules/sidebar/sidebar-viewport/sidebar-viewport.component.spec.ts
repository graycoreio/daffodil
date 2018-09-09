import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffSidebarViewportComponent } from './sidebar-viewport.component';

describe('DaffSidebarViewportComponent', () => {
  let component: DaffSidebarViewportComponent;
  let fixture: ComponentFixture<DaffSidebarViewportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffSidebarViewportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
