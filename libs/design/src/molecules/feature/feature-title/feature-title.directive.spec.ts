import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureTitleDirective } from './feature-title.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daffFeatureTitle></div>'})
class WrapperComponent {}

describe('DaffFeatureTitleDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let featureTitle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureTitleDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    featureTitle = fixture.debugElement.query(By.css('[daffFeatureTitle]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-feature__title` to its host', () => {
    expect(featureTitle.nativeElement.classList.contains('daff-feature__title')).toBeTruthy();
  });
});
