import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffDropdownBodyComponent } from './dropdown-body.component';

@Component({template: '<div class="dropdown-body-wrapper" daff-dropdown-body>Title</div>'})
class TestDropdownBodyWrapper {}

describe('DaffDropdownBodyComponent', () => {
  let component: TestDropdownBodyWrapper;
  let fixture: ComponentFixture<TestDropdownBodyWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDropdownBodyWrapper,
        DaffDropdownBodyComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDropdownBodyWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-dropdown__body` to its host', () => {
    let dropdownBodyWrapper = fixture.debugElement.query(By.css('.dropdown-body-wrapper'));

    expect(dropdownBodyWrapper.nativeElement.classList.contains('daff-dropdown__body')).toBeTruthy();
  });
});
