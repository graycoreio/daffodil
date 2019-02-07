import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListItemIconDirective } from './list-item-icon.directive';
import { By } from '@angular/platform-browser';

@Component({template: '<div daffListItemIcon></div>'})
class WrapperComponent {}

describe('DaffListItemIconDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let listItemIcon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffListItemIconDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    listItemIcon = fixture.debugElement.query(By.css('[daffListItemIcon]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-list-item__icon` to its host', () => {
    expect(listItemIcon.nativeElement.classList.contains('daff-list-item__icon')).toBeTruthy();
  });
});
