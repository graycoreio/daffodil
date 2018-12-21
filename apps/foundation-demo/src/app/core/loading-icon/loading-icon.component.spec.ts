
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIconComponent } from './loading-icon.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({ template: '<demo-loading-icon class="host-element"></demo-loading-icon>' })
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
});
