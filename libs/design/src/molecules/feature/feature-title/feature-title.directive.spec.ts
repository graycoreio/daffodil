import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffFeatureTitleDirective } from './feature-title.directive';

@Component({
  template: `<div daffFeatureTitle></div>`
})

class WrapperComponent {}

describe('DaffFeatureTitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffFeatureTitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffFeatureTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffFeatureTitle]', () => {
    it('should add a class of "daff-feature__title" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-feature__title': true,
      }));
    });
  });
});
