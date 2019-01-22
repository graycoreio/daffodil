import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureIconComponent } from './feature-icon.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daff-feature-icon></div>'})
class WrapperComponent {}

describe('DaffFeatureIconComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let featureIcon;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    featureIcon = fixture.debugElement.query(By.css('[daff-feature-icon]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-feature__icon` to its host', () => {
    expect(featureIcon.nativeElement.classList.contains('daff-feature__icon')).toBeTruthy();
  });
});
