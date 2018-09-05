import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffSidebarItemComponent } from './sidebar-item.component';

@Component({template: '<div class="sidebar-item-wrapper" sidebar-item>Title</div>'})
class TestSidebarItemWrapper {}

describe('DaffSidebarItemComponent', () => {
  let component: TestSidebarItemWrapper;
  let fixture: ComponentFixture<TestSidebarItemWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestSidebarItemWrapper,
        DaffSidebarItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidebarItemWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `sidebar__item` to its host', () => {
    let sidebarItemWrapper = fixture.debugElement.query(By.css('.sidebar-item-wrapper'));

    expect(sidebarItemWrapper.nativeElement.classList.contains('daff-sidebar__item')).toBeTruthy();
  });
});
