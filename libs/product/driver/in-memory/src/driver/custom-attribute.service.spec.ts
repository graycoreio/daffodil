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

  describe('list | getting a list of custom attributes', () => {
    it('should send a get request', () => {
      const mockCustomAttributes = customAttributeFactory.createMany(3);

      customAttributeService.list().subscribe(customAttributes => {
        expect(customAttributes).toEqual(mockCustomAttributes);
      });

      const req = httpMock.expectOne(`${customAttributeService['url']}/`);
      expect(req.request.method).toBe('GET');

      req.flush(mockCustomAttributes);
    });
  });
});
