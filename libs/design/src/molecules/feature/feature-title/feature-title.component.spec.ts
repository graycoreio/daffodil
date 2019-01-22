import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffFeatureTitleComponent } from './feature-title.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daff-feature-title></div>'})
class WrapperComponent {}

describe('DaffFeatureTitleComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let featureTitle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    featureTitle = fixture.debugElement.query(By.css('[daff-feature-title]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-feature__title` to its host', () => {
    expect(featureTitle.nativeElement.classList.contains('daff-feature__title')).toBeTruthy();
  });
});
