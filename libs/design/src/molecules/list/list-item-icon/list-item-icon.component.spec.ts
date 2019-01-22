import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListItemIconComponent } from './list-item-icon.component';
import { By } from '@angular/platform-browser';

@Component({template: '<div daff-list-item-icon></div>'})
class WrapperComponent {}

describe('DaffListItemIconComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let listItemIcon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffListItemIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    listItemIcon = fixture.debugElement.query(By.css('[daff-list-item-icon'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-list-item__icon` to its host', () => {
    expect(listItemIcon.nativeElement.classList.contains('daff-list-item__icon')).toBeTruthy();
  });
});
