import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';

import { DaffSeoNameMetaDefinition } from '@daffodil/seo';

import { getAttrSelector } from './get-attr-selector';
import { DaffMetaService } from './meta.service';

describe('@daffodil/seo | DaffMetaService', () => {
  let service: DaffMetaService;
  let metaServiceSpy: jasmine.SpyObj<Meta>;

  beforeEach(() => {
    metaServiceSpy = jasmine.createSpyObj('Meta', ['updateTag', 'removeTag']);

    TestBed.configureTestingModule({
      providers: [
        DaffMetaService,
        {
          provide: Meta,
          useValue: metaServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffMetaService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('upsert', () => {
    let def: DaffSeoNameMetaDefinition;

    beforeEach(() => {
      def = {
        name: 'description',
        content: 'meta description',
      };

      service.upsert(def);
    });

    it('should call the Angular meta service with the def', () => {
      expect(metaServiceSpy.updateTag).toHaveBeenCalledOnceWith(def);
    });
  });

  describe('remove', () => {
    let def: DaffSeoNameMetaDefinition;

    beforeEach(() => {
      def = {
        name: 'description',
        content: 'meta description',
      };

      service.remove(def);
    });

    it('should call the Angular meta service with the attrSelector', () => {
      expect(metaServiceSpy.removeTag).toHaveBeenCalledOnceWith(getAttrSelector(def));
    });
  });
});
