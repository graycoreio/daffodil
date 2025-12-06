import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {
  DesignLandColorPaletteService,
  DOCS_LOCATION,
} from './palette.service';

describe('@daffodil/design-land | DesignLandColorPaletteService', () => {
  let service: DesignLandColorPaletteService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DesignLandColorPaletteService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(DesignLandColorPaletteService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('and the get method', () => {
    it('should return sass docs items', () => {
      service.get().subscribe(resp => {
        expect(resp).toEqual([]);
      });
      const req = httpMock.expectOne(DOCS_LOCATION);
      req.flush([]);
      httpMock.verify();
    });
  });
});
