import { TestBed } from '@angular/core/testing';

import {
  DaffSeoNameMetaDefinition,
  DaffMetaService,
} from '@daffodil/seo';

import { DaffRestoreableMetaService } from './restoreable.service';

describe('@daffodil/seo | DaffRestoreableMetaService', () => {
  let service: DaffRestoreableMetaService;
  let metaServiceSpy: jasmine.SpyObj<DaffMetaService>;

  beforeEach(() => {
    metaServiceSpy = jasmine.createSpyObj('Meta', ['upsert','remove']);

    TestBed.configureTestingModule({
      providers: [
        DaffRestoreableMetaService,
        {
          provide: DaffMetaService,
          useValue: metaServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffRestoreableMetaService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('upsert | adding or updating defs', () => {
    let def: DaffSeoNameMetaDefinition;

    beforeEach(() => {
      def = {
        name: 'description',
        content: 'meta description',
      };

      service.upsert(def);
    });

    it('should call the meta service with the def', () => {
      expect(metaServiceSpy.upsert).toHaveBeenCalledOnceWith(def);
    });
  });

  describe('clear | removing upserted defs', () => {
    describe('when no defs have been upserted', () => {
      beforeEach(() => {
        service.clear();
      });

      it('should not invoke the meta service', () => {
        expect(metaServiceSpy.remove).not.toHaveBeenCalled();
      });
    });

    describe('when defs have been upserted', () => {
      let def: DaffSeoNameMetaDefinition;

      beforeEach(() => {
        def = {
          name: 'description',
          content: 'meta description',
        };

        service.upsert(def);
        service.clear();
      });

      it('should invoke the meta service with the upserted def', () => {
        expect(metaServiceSpy.upsert).toHaveBeenCalledOnceWith(def);
      });
    });
  });

  describe('restore | upserting previously upserted and cleared defs', () => {
    describe('when no defs have been upserted', () => {
      beforeEach(() => {
        service.restore();
      });

      it('should not invoke the meta service', () => {
        expect(metaServiceSpy.upsert).not.toHaveBeenCalled();
      });
    });

    describe('when defs have been upserted but not cleared', () => {
      let def: DaffSeoNameMetaDefinition;

      beforeEach(() => {
        def = {
          name: 'description',
          content: 'meta description',
        };

        service.upsert(def);
        service.restore();
      });

      it('should not restore the defs', () => {
        expect(metaServiceSpy.upsert).toHaveBeenCalledTimes(1);
      });
    });

    describe('when defs have been upserted and cleared', () => {
      let def: DaffSeoNameMetaDefinition;

      beforeEach(() => {
        def = {
          name: 'description',
          content: 'meta description',
        };

        service.upsert(def);
        service.clear();
        service.restore();
      });

      it('should restore the upserted and cleared def', () => {
        expect(metaServiceSpy.upsert.calls.mostRecent().args[0]).toEqual(def);
        expect(metaServiceSpy.upsert).toHaveBeenCalledTimes(2);
      });
    });

    describe('when a def is cleared after having been upserted and updated', () => {
      let def: DaffSeoNameMetaDefinition;
      let updatedDef: DaffSeoNameMetaDefinition;

      beforeEach(() => {
        def = {
          name: 'description',
          content: 'meta description',
        };
        updatedDef = {
          name: 'description',
          content: 'updated meta description',
        };

        service.upsert(def);
        service.upsert(updatedDef);
        service.clear();
        service.restore();
      });

      it('should restore the updated def', () => {
        expect(metaServiceSpy.upsert.calls.mostRecent().args[0]).toEqual(updatedDef);
        expect(metaServiceSpy.upsert).toHaveBeenCalledTimes(3);
      });
    });
  });

  describe('emptyRestoreCache | emptying the restore cache', () => {
    describe('when defs have been upserted and cleared', () => {
      let def: DaffSeoNameMetaDefinition;

      beforeEach(() => {
        def = {
          name: 'description',
          content: 'meta description',
        };

        service.upsert(def);
        service.clear();
        service.emptyRestoreCache();
        service.restore();
      });

      it('should not upsert any defs during the restore', () => {
        expect(metaServiceSpy.upsert).toHaveBeenCalledTimes(1);
      });
    });
  });
});
