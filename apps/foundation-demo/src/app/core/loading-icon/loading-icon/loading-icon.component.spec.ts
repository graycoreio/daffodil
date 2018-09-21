
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIconComponent } from './loading-icon.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({ template: '<div loading-icon class="host-element"></div>' })
class TestLoadingIconComponentWrapper {}

describe('LoadingIconComponent', () => {
  let component: TestLoadingIconComponentWrapper;
  let fixture: ComponentFixture<TestLoadingIconComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestLoadingIconComponentWrapper,
        LoadingIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLoadingIconComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add loading-icon class to host element', () => {
    let hostElement = fixture.debugElement.query(By.css('.host-element')).nativeElement;

    expect(hostElement.classList.contains('loading-icon')).toBeTruthy();
  });
});
