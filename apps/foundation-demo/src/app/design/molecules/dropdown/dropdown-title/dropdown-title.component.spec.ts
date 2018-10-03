import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffDropdownTitleComponent } from './dropdown-title.component';

@Component({template: '<div class="dropdown-title-wrapper" daff-dropdown-title>Title</div>'})
class TestDropdownTitleWrapper {}

describe('DaffDropdownTitleComponent', () => {
  let component: TestDropdownTitleWrapper;
  let fixture: ComponentFixture<TestDropdownTitleWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestDropdownTitleWrapper,
        DaffDropdownTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDropdownTitleWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daff-dropdown__title` to its host', () => {
    let dropdownTitleWrapper = fixture.debugElement.query(By.css('.dropdown-title-wrapper'));

    expect(dropdownTitleWrapper.nativeElement.classList.contains('daff-dropdown__title')).toBeTruthy();
  });
});
