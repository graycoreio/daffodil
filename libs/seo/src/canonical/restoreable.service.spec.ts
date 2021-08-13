import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { DaffRestoreableCanonicalService } from './restoreable.service';

describe('@daffodil/seo | DaffRestoreableCanonicalService', () => {
  let service: DaffRestoreableCanonicalService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffRestoreableCanonicalService,
      ],
    });

    service = TestBed.inject(DaffRestoreableCanonicalService);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    document.head.querySelectorAll('link[rel="canonical"]').forEach(el => {
      document.head.removeChild(el);
    });
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('upsert', () => {
    let url: string;

    beforeEach(() => {
      url = 'testing/url';
    });

    describe('when a canonical link tag exists', () => {
      let link: HTMLLinkElement;

      beforeEach(() => {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', '');
        document.head.appendChild(link);

        service.upsert(url);
      });

      it('should update the existing link element', () => {
        expect(link.getAttribute('href')).toEqual(url);
      });
    });

    describe('when a canonical link tag does not exist', () => {
      beforeEach(() => {
        service.upsert(url);
      });

      it('should add a link tag to the document head', () => {
        const el = document.head.querySelector('link[rel="canonical"]');
        expect(el).toBeTruthy();
      });
    });

    describe('when a falsy url is passed', () => {
      beforeEach(() => {
        service.upsert(null);
      });

      it('should not add a link tag to the document', () => {
        const el = document.querySelector('link[rel="canonical"]');
        expect(el).toBeFalsy();
      });
    });
  });

  describe('clear', () => {
    describe('when a canonical link tag exists', () => {
      let link: HTMLLinkElement;

      beforeEach(() => {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', '');
        document.head.appendChild(link);

        service.clear();
      });

      it('should remove the existing link element', () => {
        const el = document.querySelector('link[rel="canonical"]');
        expect(el).toBeFalsy();
      });
    });
  });

  describe('restore', () => {
    describe('when a canonical link tag has been upserted and cleared', () => {
      let url: string;

      beforeEach(() => {
        url = 'testing/url';
        service.upsert(url);
        service.clear();

        service.restore();
      });

      it('should add a link tag to the document head', () => {
        const el = document.head.querySelector('link[rel="canonical"]');
        expect(el.getAttribute('href')).toEqual(url);
      });
    });

    describe('when a canonical link tag has been upserted and cleared and a new URL is upserted', () => {
      let url: string;
      let newUrl: string;

      beforeEach(() => {
        url = 'testing/url';
        newUrl = 'testing/newurl';
        service.upsert(url);
        service.clear();
        service.upsert(newUrl);

        service.restore();
      });

      it('should restore the original URL', () => {
        const el = document.head.querySelector('link[rel="canonical"]');
        expect(el.getAttribute('href')).toEqual(url);
      });
    });
  });
});
