import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListSubheaderDirective } from './list-subheader.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<h3 daffListSubheader></h3>'})
class WrapperComponent {}

describe('DaffListSubheaderDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let listSubheader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffListSubheaderDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();

    listSubheader = fixture.debugElement.query(By.css('[daffListSubheader]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-list__subheader` to its host', () => {
    expect(listSubheader.nativeElement.classList.contains('daff-list__subheader')).toBeTruthy();
  });
});
