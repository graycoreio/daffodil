import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { DaffInMemoryBackendGeographyService } from './geography.service';

describe('DaffInMemoryBackendGeographyService | Integration', () => {
  let httpClient: HttpClient;

  let countryFactory: DaffCountryFactory;

  let mockCountry: DaffCountry;
  let countryId: DaffCountry['id'];

  beforeEach(done => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryBackendGeographyService, { delay: 0 })),
      ],
    });

    httpClient = TestBed.inject(HttpClient);

    countryFactory = TestBed.inject(DaffCountryFactory);

    mockCountry = countryFactory.create();
    countryId = mockCountry.id;

    httpClient.post<any>('commands/resetDb', { countries: [mockCountry]}).subscribe(() => done());
  });

  describe('processing a country load request', () => {
    it('should return the correct country', done => {
      httpClient.get<any>(`/api/countries/${countryId}`).subscribe(result => {
        expect(result).toEqual(mockCountry);
        done();
      });
    });
  });

  describe('processing a country list request', () => {
    it('should return the correct countries', done => {
      httpClient.get<any>(`/api/countries/`).subscribe(result => {
        expect(result).toEqual([mockCountry]);
        done();
      });
    });
  });
});
