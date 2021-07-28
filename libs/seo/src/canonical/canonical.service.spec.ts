import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { DaffCanonicalService } from './canonical.service';

describe('@daffodil/seo | DaffCanonicalService', () => {
  let service: DaffCanonicalService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCanonicalService,
      ],
    });

    service = TestBed.inject(DaffCanonicalService);
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

      it('should cache the URL', () => {
        expect(service.url).toEqual(url);
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

      it('should cache the URL', () => {
        expect(service.url).toEqual(url);
      });
    });
  });

  describe('remove', () => {
    describe('when a canonical link tag exists', () => {
      let link: HTMLLinkElement;

      beforeEach(() => {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', '');
        document.head.appendChild(link);

        service.remove();
      });

      it('should remove the existing link element', () => {
        const el = document.querySelector('link[rel="canonical"]');
        expect(el).toBeFalsy();
      });
    });
  });
});
