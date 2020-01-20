import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffFeatureSubheaderDirective } from './feature-subheader.directive';

@Component({
  template: `<div daffFeatureSubheader></div>`
})

class WrapperComponent {}

describe('DaffFeatureSubheaderDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffFeatureSubheaderDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffFeatureSubheader]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffFeatureSubheader]', () => {
    it('should add a class of "daff-feature__subheader" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-feature__subheader': true,
      }));
    });
  });
});
