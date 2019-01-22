import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureBodyComponent } from './feature-body.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daff-feature-body></div>'})
class WrapperComponent {}

describe('DaffFeatureBodyComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let featureBody;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureBodyComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    featureBody = fixture.debugElement.query(By.css('[daff-feature-body]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-feature__body` to its host', () => {
    expect(featureBody.nativeElement.classList.contains('daff-feature__body')).toBeTruthy();
  });
});
