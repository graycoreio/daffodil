import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { DaffMetaDescriptionService } from './meta-description.service';

describe('@daffodil/seo | DaffMetaDescriptionService', () => {
  let service: DaffMetaDescriptionService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMetaDescriptionService,
      ],
    });

    service = TestBed.inject(DaffMetaDescriptionService);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    document.head.querySelectorAll('meta[name="description"]').forEach(el => {
      document.head.removeChild(el);
    });
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('upsert', () => {
    let stubContent: string;

    beforeEach(() => {
      stubContent = 'Description content';
    });

    describe('when a description meta tag exists', () => {
      let meta: HTMLMetaElement;

      beforeEach(() => {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        meta.setAttribute('content', stubContent);
        document.head.appendChild(meta);

        service.upsert(stubContent);
      });

      it('should update the existing meta element', () => {
        expect(meta.getAttribute('content')).toEqual(stubContent);
      });
    });

    describe('when a description meta tag does not exist', () => {
      beforeEach(() => {
        service.upsert(stubContent);
      });

      it('should add a description meta tag to the document head', () => {
        const el = document.head.querySelector('meta[name="description"]');
        expect(el).toBeTruthy();
      });
    });
  });

  describe('remove', () => {
    describe('when a description meta tag exists', () => {
      let meta: HTMLMetaElement;

      beforeEach(() => {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);

        service.remove();
      });

      it('should remove the existing meta element', () => {
        const el = document.querySelector('meta[name="description"]');
        expect(el).toBeFalsy();
      });
    });
  });
});
