import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffContainerComponent, DaffContainerSize } from './container.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<daff-container [size]="size"></daff-container>`
})
class WrapperComponent {
  size: DaffContainerSize;
}

describe('DaffContainerComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffContainerComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-container'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  describe('<daff-container>', () => {
    it('should add a class of "daff-container" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-container': true,
      }));
    });
  });

  describe('setting the size', () => {
    it('should not set a default size', () => {
      expect(component.size).toBeFalsy();

      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-container--xs': false,
        'daff-container--sm': false,
        'daff-container--md': false,
        'daff-container--lg': false,
        'daff-container--xl': false
      }));
    });

    describe('when size="xs"', () => {
      it('should add a class of "daff-container--xs" to the host element', () => {
        wrapper.size = 'xs';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-container--xs': true
        }));
      });
    });

    describe('when size="sm"', () => {
      it('should add a class of "daff-container--sm" to the host element', () => {
        wrapper.size = 'sm';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-container--sm': true
        }));
      });
    });

    describe('when size="md"', () => {
      it('should add a class of "daff-container--md" to the host element', () => {
        wrapper.size = 'md';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-container--md': true
        }));
      });
    });

    describe('when size="lg"', () => {
      it('should add a class of "daff-container--lg" to the host element', () => {
        wrapper.size = 'lg';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-container--lg': true
        }));
      });
    });

    describe('when size="xl"', () => {
      it('should add a class of "daff-container--xl" to the host element', () => {
        wrapper.size = 'xl';
        fixture.detectChanges();

        expect(de.classes).toEqual(jasmine.objectContaining({
          'daff-container--xl': true
        }));
      });
    });
  });
});
