import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffFeatureIconDirective } from './feature-icon.directive';

@Component({
  template: `<div daffFeatureIcon></div>`
})

class WrapperComponent {}

describe('DaffFeatureIconDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffFeatureIconDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffFeatureIcon]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffFeatureIcon]', () => {
    it('should add a class of "daff-feature__icon" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-feature__icon': true,
      }));
    });
  });
});
