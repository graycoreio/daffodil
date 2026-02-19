import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffDocsSassItem } from '@daffodil/docs-utils';

import {
  DaffioColorPaletteService,
  DOCS_LOCATION,
} from './palettes.service';
import {
  DaffioAssetFetchService,
  DaffioAssetFetchServiceInterface,
} from '../../../../../core/assets/fetch/service.interface';

describe('@daffodil/daffio | DaffioColorPaletteService', () => {
  let service: DaffioColorPaletteService;
  let fetchAssetServiceSpy: jasmine.SpyObj<DaffioAssetFetchServiceInterface>;

  beforeEach(() => {
    fetchAssetServiceSpy = jasmine.createSpyObj('DaffioAssetFetchService', ['fetch']);

    TestBed.configureTestingModule({
      providers: [
        DaffioColorPaletteService,
        {
          provide: DaffioAssetFetchService,
          useValue: fetchAssetServiceSpy,
        },
      ],
    });

    service = TestBed.inject(DaffioColorPaletteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('and the get method', () => {
    it('should return sass docs items', (done) => {
      const mockSassItems: Array<DaffDocsSassItem> = [];
      fetchAssetServiceSpy.fetch.and.returnValue(of(mockSassItems));

      service.get().subscribe((resp) => {
        expect(resp).toEqual(mockSassItems);
        expect(fetchAssetServiceSpy.fetch).toHaveBeenCalledWith(
          `/assets/daffio/${DOCS_LOCATION}.json`,
          'DOCS_LOCATION',
        );
        done();
      });
    });
  });
});
