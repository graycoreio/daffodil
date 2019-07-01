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

  describe('setting the layout of the hero', () => {
    describe('when layout is centered', () => {
      it('should set "daff-hero--centered" on host element', () => {
        wrapper.layout = 'centered';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-hero--centered')).toEqual(true);
      });
    });

    it('should not set a default layout', () => {
      expect(component.layout).toBeFalsy();
    });
  });

  describe('setting the size of the hero', () => {
    describe('when size is fullscreen', () => {
      it('should set "daff-hero--fullscreen" on host element', () => {
        wrapper.size = 'fullscreen';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-hero--fullscreen')).toEqual(true);
      });
    });

    describe('when size is small', () => {
      it('should set "daff-hero--small" on host element', () => {
        wrapper.size = 'small';
        fixture.detectChanges();

        expect(de.nativeElement.classList.contains('daff-hero--small')).toEqual(true);
      });
    });

    it('should not set a default size', () => {
      expect(component.size).toBeFalsy();
    });
  });

  describe('using a color variant of a hero',() => {
    it('should set a color class on the hero', () => {
      wrapper.color = "primary";
      fixture.detectChanges();
      
      expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
    });

    it('should not set a default color', () => {
      expect(component.color).toBeFalsy();
    });
  });
});
