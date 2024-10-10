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

import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { DaffInMemoryNavigationService } from './navigation.service';

describe('@daffodil/navigation/driver/in-memory | NavigationService', () => {
  let navigationService;
  let httpMock: HttpTestingController;
  let navigationTreeFactory: DaffNavigationTreeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        DaffInMemoryNavigationService,
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
    navigationService = TestBed.inject(DaffInMemoryNavigationService);
    navigationTreeFactory = TestBed.inject(DaffNavigationTreeFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(navigationService).toBeTruthy();
  });

  describe('get | getting a single navigation', () => {

    it('should send a get request', () => {
      const mockNavigation = navigationTreeFactory.create();

      navigationService.get(mockNavigation.id).subscribe(navigation => {
        expect(navigation).toEqual(mockNavigation);
      });

      const req = httpMock.expectOne(`${navigationService.url}/${mockNavigation.id}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockNavigation);
    });
  });
});
