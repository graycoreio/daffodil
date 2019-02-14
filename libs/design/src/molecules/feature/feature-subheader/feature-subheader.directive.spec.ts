import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureSubheaderDirective } from './feature-subheader.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daffFeatureSubheader></div>'})
class WrapperComponent {}

describe('DaffFeatureSubheaderDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let featureSubheader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureSubheaderDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    featureSubheader = fixture.debugElement.query(By.css('[daffFeatureSubheader]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-feature__subheader` to its host', () => {
    expect(featureSubheader.nativeElement.classList.contains('daff-feature__subheader')).toBeTruthy();
  });
});
