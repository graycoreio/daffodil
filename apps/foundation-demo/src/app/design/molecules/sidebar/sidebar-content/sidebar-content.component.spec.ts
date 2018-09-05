import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffSidebarContentComponent } from './sidebar-content.component';

describe('DaffSidebarContentComponent', () => {
  let component: DaffSidebarContentComponent;
  let fixture: ComponentFixture<DaffSidebarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffSidebarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
