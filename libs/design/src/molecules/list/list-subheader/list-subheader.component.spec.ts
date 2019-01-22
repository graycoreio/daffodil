import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListSubheaderComponent } from './list-subheader.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daff-list-subheader></div>'})
class WrapperComponent {}

describe('DaffListSubheaderComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let listSubheader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffListSubheaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();

    listSubheader = fixture.debugElement.query(By.css('[daff-list-subheader]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-list__subheader` to its host', () => {
    expect(listSubheader.nativeElement.classList.contains('daff-list__subheader')).toBeTruthy();
  });
});
