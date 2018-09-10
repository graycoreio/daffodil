import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffSidebarContentComponent } from './sidebar-content.component';

@Component({template: '<daff-sidebar-content class="sidebar-content-wrapper">Title</daff-sidebar-content>>'})
class TestSidebarContentWrapper {}

fdescribe('DaffSidebarContentComponent', () => {
  let component: DaffSidebarContentComponent;
  let fixture: ComponentFixture<DaffSidebarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffSidebarContentComponent,
        TestSidebarContentWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidebarContentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-sidebar-content` to its host', () => {
    let sidebarContentWrapper = fixture.debugElement.query(By.css('.sidebar-content-wrapper'));

    expect(sidebarContentWrapper.nativeElement.classList.contains('daff-sidebar-content')).toBeTruthy();
  })
});
