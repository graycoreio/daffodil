import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { DaffCalloutComponent, DaffCalloutLayout } from './callout.component';
import { DaffPalette } from '../../../core/colorable/colorable';

@Component ({
  template: `
    <daff-callout [layout]="layout" [color]="color"></daff-callout>
  `
})

class WrapperComponent {
  layout: DaffCalloutLayout;
  color: DaffPalette;
}

describe('DaffCalloutComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffCalloutComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffCalloutComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-callout'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-callout>', () => {
    it('should add a class of "daff-callout" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-callout': true,
      }));
    });
  });

  describe('setting the layout', () => {
    describe('when layout="centered"', () => {
      it('should add a class of "daff-callout--centered" to the host element', () => {
        wrapper.layout = 'centered';
        fixture.detectChanges();
        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-callout--centered': true
        }));
      });
    });

    it('should not set a default layout', () => {
      expect(component.layout).toBeFalsy();
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-callout--centered': false,
      }));
    });
  });

  describe('using a colored variant of a callout',() => {
    it('should set a color class on the callout', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });
  });
});