import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffSidebarItemComponent } from './sidebar-item.component';

@Component({template: '<div class="sidebar-item-wrapper" daff-sidebar-item>Title</div>'})
class WrapperComponent {}

describe('DaffSidebarItemComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffSidebarItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-sidebar__item` to its host', () => {
    const sidebarItemWrapper = fixture.debugElement.query(By.css('.sidebar-item-wrapper'));

    expect(sidebarItemWrapper.nativeElement.classList.contains('daff-sidebar__item')).toBeTruthy();
  });
});
