import { daffColorMixin, colorInPalette } from "./colorable";
import { ElementRef, Renderer2 } from "@angular/core";
import { TestBed } from "@angular/core/testing";

class TestingClass {
  element: HTMLElement = document.createElement('div');

  _elementRef = new ElementRef<HTMLElement>(this.element);
  _renderer : any = { 
    addClass(el: HTMLElement, className: string) {
      el.classList.add(className);
    },
    removeClass(el: HTMLElement, className: string) {
      el.classList.remove(className);
    }
  } 
}

/**
 * Some of these tests are inspired by the @angular/material
 * color common-behavior, as it is a really clean implementation.
 */
describe('daffColorMixin', () => {
  let instance;
  let classWithColor;

  beforeEach(() => {
    classWithColor = daffColorMixin(TestingClass);
    instance = new classWithColor();
  });

  it('should add a color property to an existing class', () => {
      expect("color" in instance).toBeTruthy();
  });

  it('should allow the consuming class to optionally define a default color', () => {
    classWithColor = daffColorMixin(TestingClass, "primary");
    instance = new classWithColor();

    expect(instance.color).toEqual("primary");
    expect(instance.element.classList).toContain('daff-primary');
  });

  describe('when a color is specified', () => {
    
    it('should set a namespaced color class', () => {
      instance.color = "primary";

      expect(instance.element.classList).toContain("daff-primary");
    });
  });

  describe('when a color is not specified', () => {
    
    it('should default to no color class', () => {
      instance.color = undefined;
      expect(instance.element.classList.length).toEqual(0);
    });
  });

  describe('when `color` changes', () => {

    beforeEach(() => {
      instance.color = "primary";
      expect(instance.element.classList).toContain('daff-primary');

      instance.color = "accent";
    });
    
    it('should add the new color class', () => {
      expect(instance.element.classList).toContain('daff-accent');
    });

    it('should remove the provious color class', () => {
      expect(instance.element.classList).not.toContain('daff-primary');
    });
  });

  describe('when one of the `DaffPalette` types is not used', () => {
    it('should throw an error', () => {
      expect(function(){
        instance.color = "SOMEFAKEPALETTE"
      }).toThrow(new TypeError("SOMEFAKEPALETTE is not a valid color for the DaffPalette"));
    });
  });

  describe('when a default color is undefined', () => {
    describe('and color is set to null or undefined', () => {
      it('should do nothing', () => {
        instance.color = null;
        expect(instance.element.classList.value).toEqual("");

        instance.color = undefined;
        expect(instance.element.classList.value).toEqual("");
      });
    });
  });

  describe('when a default color is specified', () => {

    beforeEach(() => {
      classWithColor = daffColorMixin(TestingClass, "primary");
      instance = new classWithColor();
    });

    describe('and color is set to null or undefined', () => {
      it('should set color to the default color ', () => {
        instance.color = null;

        expect(instance.color).toEqual("primary");
        expect(instance.element.classList).toContain('daff-primary');

        instance.color = undefined;

        expect(instance.color).toEqual("primary");
        expect(instance.element.classList).toContain('daff-primary');
      });
    })
  })
});

describe('colorInPalette', () => {
  describe('when color is in the palette', () => {
    it('should return true', () => {
        expect(colorInPalette("black")).toEqual(true);
        expect(colorInPalette("white")).toEqual(true);
        expect(colorInPalette("primary")).toEqual(true);
        expect(colorInPalette("accent")).toEqual(true);
    });
  });

  describe('when color is NOT in the palette', () => {
    it('should return false', () => {
        expect(colorInPalette("purple")).toEqual(false);
        expect(colorInPalette("green")).toEqual(false);
        expect(colorInPalette("red")).toEqual(false);
        expect(colorInPalette("blarck")).toEqual(false);
    });
  });

  describe('when the color is undefined or null', () => {
    it('should return false', () => {
        expect(colorInPalette(undefined)).toEqual(false);
        expect(colorInPalette(null)).toEqual(false);
    });
  });
})
