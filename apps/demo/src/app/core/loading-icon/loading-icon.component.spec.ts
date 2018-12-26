
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIconComponent } from './loading-icon.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({ template: '<daff-loading-icon class="host-element"></daff-loading-icon>' })
class WrapperComponent {}

describe('LoadingIconComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        LoadingIconComponent
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
});
