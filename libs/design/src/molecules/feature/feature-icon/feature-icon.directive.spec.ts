import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureIconDirective } from './feature-icon.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daffFeatureIcon></div>'})
class WrapperComponent {}

describe('DaffFeatureIconDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let featureIcon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureIconDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    featureIcon = fixture.debugElement.query(By.css('[daffFeatureIcon]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-feature__icon` to its host', () => {
    expect(featureIcon.nativeElement.classList.contains('daff-feature__icon')).toBeTruthy();
  });
});
