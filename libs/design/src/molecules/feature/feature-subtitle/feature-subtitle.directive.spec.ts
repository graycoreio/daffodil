import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffFeatureSubtitleDirective } from './feature-subtitle.directive';

@Component({
  template: `<div daffFeatureSubtitle></div>`
})

class WrapperComponent {}

describe('DaffFeatureSubtitleDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffFeatureSubtitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffFeatureSubtitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffFeatureSubtitle]', () => {
    it('should add a class of "daff-feature__subtitle" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-feature__subtitle': true,
      }));
    });
  });
});
