import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffHeroComponent, DaffHeroLayout, DaffHeroSize } from './hero.component';
import { DaffPalette } from '../../../core/colorable/colorable';

@Component({
  template: `<daff-hero [layout]="layout" [size]="size" [color]="color"></daff-hero>`
})
class WrapperComponent {
  layout: DaffHeroLayout;
  size: DaffHeroSize;
  color: DaffPalette;
}

describe('DaffHeroComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffHeroComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffHeroComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-hero'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-hero>', () => {
    it('should add a class of "daff-hero" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-hero': true,
      }));
    });
  });

  describe('setting the layout', () => {
    it('should not set a default layout', () => {
      expect(component.layout).toBeFalsy();
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-hero--centered': false,
      }));
    });

    describe('when layout="centered"', () => {
      it('should add a class of "daff-hero--centered" to the host element', () => {
        wrapper.layout = 'centered';
        fixture.detectChanges();
        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-hero--centered': true
        }));
      });
    });
  });

  describe('setting the size', () => {
    it('should not set a default size', () => {
      expect(component.layout).toBeFalsy();
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-hero--small': false,
        'daff-hero--compact': false
      }));
    });

    describe('when size="small"', () => {
      it('should add a class of "daff-hero--small" to the host element', () => {
        wrapper.size = 'small';
        fixture.detectChanges();
        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-hero--small': true
        }));
      });
    });

    describe('when size="compact"', () => {
      it('should add a class of "daff-hero--compact" to the host element', () => {
        wrapper.size = 'compact';
        fixture.detectChanges();
        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-hero--compact': true
        }));
      });
    });
  });

  describe('using a color variant of a hero', () => {
    it('should set a color class on the hero', () => {
      wrapper.color = 'primary';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });
  });
});
