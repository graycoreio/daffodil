import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { DaffContentStyleInjector } from './inject-style';

describe('@daffodil/content | DaffContentStyleInjector', () => {
  let service: DaffContentStyleInjector;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffContentStyleInjector],
    });

    service = TestBed.inject(DaffContentStyleInjector);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    service.destroyAll();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('inject', () => {
    it('should create a style element in the document head', () => {
      const css = '.test { color: red; }';
      service.inject(css);

      const styleTag = document.head.querySelector('style[data-schema-styles="true"]');
      expect(styleTag).toBeTruthy();
    });

    it('should set the CSS as the style element content', () => {
      const css = '.test { color: red; }';
      const styleTag = service.inject(css);

      expect(styleTag.textContent).toBe(css);
    });

    it('should return the created style element', () => {
      const css = '.test { color: red; }';
      const styleTag = service.inject(css);

      expect(styleTag).toBeInstanceOf(HTMLStyleElement);
    });

    it('should set the data-schema-styles attribute', () => {
      const css = '.test { color: red; }';
      const styleTag = service.inject(css);

      expect(styleTag.getAttribute('data-schema-styles')).toBe('true');
    });

    it('should return the cached style element for the same CSS', () => {
      const css = '.test { color: red; }';
      const styleTag1 = service.inject(css);
      const styleTag2 = service.inject(css);

      expect(styleTag1).toBe(styleTag2);
    });

    it('should create separate style elements for different CSS', () => {
      const css1 = '.test1 { color: red; }';
      const css2 = '.test2 { color: blue; }';
      const styleTag1 = service.inject(css1);
      const styleTag2 = service.inject(css2);

      expect(styleTag1).not.toBe(styleTag2);
    });

    it('should recreate style element if cached one was removed from DOM', () => {
      const css = '.test { color: red; }';
      const styleTag1 = service.inject(css);
      styleTag1.remove();

      const styleTag2 = service.inject(css);

      expect(styleTag2).not.toBe(styleTag1);
      expect(styleTag2.isConnected).toBe(true);
    });
  });

  describe('destroy', () => {
    it('should remove the style element from the DOM', () => {
      const css = '.test { color: red; }';
      const styleTag = service.inject(css);

      service.destroy(styleTag);

      expect(styleTag.isConnected).toBe(false);
    });

    it('should remove the style from the cache', () => {
      const css = '.test { color: red; }';
      const styleTag1 = service.inject(css);
      service.destroy(styleTag1);

      const styleTag2 = service.inject(css);

      expect(styleTag2).not.toBe(styleTag1);
    });

    it('should handle destroying an already removed style element', () => {
      const css = '.test { color: red; }';
      const styleTag = service.inject(css);
      styleTag.remove();

      expect(() => service.destroy(styleTag)).not.toThrow();
    });

    it('should not affect other style elements', () => {
      const css1 = '.test1 { color: red; }';
      const css2 = '.test2 { color: blue; }';
      const styleTag1 = service.inject(css1);
      const styleTag2 = service.inject(css2);

      service.destroy(styleTag1);

      expect(styleTag1.isConnected).toBe(false);
      expect(styleTag2.isConnected).toBe(true);
    });
  });

  describe('destroyAll', () => {
    it('should remove all injected style elements from the DOM', () => {
      const css1 = '.test1 { color: red; }';
      const css2 = '.test2 { color: blue; }';
      const styleTag1 = service.inject(css1);
      const styleTag2 = service.inject(css2);

      service.destroyAll();

      expect(styleTag1.isConnected).toBe(false);
      expect(styleTag2.isConnected).toBe(false);
    });

    it('should clear the cache', () => {
      const css = '.test { color: red; }';
      const styleTag1 = service.inject(css);
      service.destroyAll();

      const styleTag2 = service.inject(css);

      expect(styleTag2).not.toBe(styleTag1);
    });

    it('should handle already removed style elements', () => {
      const css = '.test { color: red; }';
      const styleTag = service.inject(css);
      styleTag.remove();

      expect(() => service.destroyAll()).not.toThrow();
    });

    it('should handle empty cache', () => {
      expect(() => service.destroyAll()).not.toThrow();
    });
  });
});
