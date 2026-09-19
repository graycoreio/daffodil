import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import { DaffInMemoryProductCustomAttributeService } from './custom-attribute.service';

describe('@daffodil/product/driver/in-memory | ProductCustomAttributeService', () => {
  let customAttributeService: DaffInMemoryProductCustomAttributeService;
  let httpMock: HttpTestingController;
  let customAttributeFactory: DaffProductCustomAttributeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffInMemoryProductCustomAttributeService,
        {
          provide: InMemoryBackendConfig,
          useValue: {
            apiBase: 'api',
          },
        },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    customAttributeService = TestBed.inject(DaffInMemoryProductCustomAttributeService);
    customAttributeFactory = TestBed.inject(DaffProductCustomAttributeFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(customAttributeService).toBeTruthy();
  });

  describe('search | searching for custom attributes by ID', () => {
    let mockCustomAttributes: DaffProductCustomAttribute[];

    beforeEach(() => {
      mockCustomAttributes = customAttributeFactory.createMany(3);
    });

    it('should send a get request with the requested IDs', () => {
      const ids = mockCustomAttributes.map(({ id }) => id);

      customAttributeService.search(ids).subscribe(customAttributes => {
        expect(customAttributes).toEqual(mockCustomAttributes);
      });

      const req = httpMock.expectOne(
        ({ url, params }) => url === `${customAttributeService['url']}/`
          && JSON.stringify(params.getAll('id')) === JSON.stringify(ids),
      );
      expect(req.request.method).toBe('GET');

      req.flush(mockCustomAttributes);
    });
  });
});
