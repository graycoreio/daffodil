import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffFeatureComponent, DaffFeatureMode } from './feature.component';

@Component({
  template: `<daff-feature [mode]="mode"></daff-feature>`
})

class WrapperComponent {
  mode: DaffFeatureMode;
}

describe('DaffFeatureComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffFeatureComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffFeatureComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-feature'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-feature>', () => {
    it('should add a class of "daff-feature" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-feature': true,
      }));
    });
  });

  describe('setting the mode of the feature', () => {
    it('should set the default mode to normal', () => {
      wrapper.mode = 'normal';
      fixture.detectChanges();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-feature--normal': true
      }));
    });

    describe('when mode="compact"', () => {
      it('should add a class of "daff-feature--compact" to the host element', () => {
        wrapper.mode = 'compact';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-feature--compact': true
        }));
      });
    });

    describe('when mode="normal"', () => {
      it('should add a class of "daff-feature--normal" to the host element', () => {
        wrapper.mode = 'normal';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-feature--normal': true
        }));
      });
    });
  });
});
