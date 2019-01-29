import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffButtonSetComponent } from './button-set.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<daff-button-set></daff-button-set>'})
class WrapperComponent {}

describe('DaffButtonSetComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffButtonSetComponent
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

  it('should set "daff-button-set" class on self', () => {
    const buttonSet = fixture.debugElement.query(By.css('daff-button-set')).nativeElement;

    expect(buttonSet.classList.contains('daff-button-set')).toBeTruthy();
  });
});
