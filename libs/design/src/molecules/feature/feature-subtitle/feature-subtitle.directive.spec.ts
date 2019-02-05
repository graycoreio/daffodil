import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureSubtitleDirective } from './feature-subtitle.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daffFeatureSubtitle></div>'})
class WrapperComponent {}

describe('DaffFeatureSubtitleDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let featureSubtitle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureSubtitleDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    featureSubtitle = fixture.debugElement.query(By.css('[daffFeatureSubtitle]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-feature__subtitle` to its host', () => {
    expect(featureSubtitle.nativeElement.classList.contains('daff-feature__subtitle')).toBeTruthy();
  });
});
