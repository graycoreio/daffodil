import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  DaffCountry,
  DaffCountryNotFoundError
} from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { DaffInMemoryGeographyService } from './geography.service';

describe('Driver | In Memory | Cart | CartService', () => {
  let service: DaffInMemoryGeographyService;
  let httpMock: HttpTestingController;
  let countryFactory: DaffCountryFactory;

  let mockCountry: DaffCountry;
  let countryId;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DaffInMemoryGeographyService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    countryFactory = TestBed.get(DaffCountryFactory);
    service = TestBed.get(DaffInMemoryGeographyService);

    mockCountry = countryFactory.create();
    countryId = mockCountry.id;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a country', () => {
    it('should send a get request and return the country', done => {
      service.get(countryId).subscribe(country => {
        expect(country).toEqual(mockCountry);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/${countryId}`);

      expect(req.request.method).toBe('GET');
      req.flush(mockCountry);
		});

    it('should throw a daffodil error when it receives an error', (done) => {
			service.get(countryId).pipe(
				catchError((error) => {
					expect(error).toEqual(DaffCountryNotFoundError);
					done();
					return of(null);
				})
			).subscribe();

			const req = httpMock.expectOne(`${service.url}/${countryId}`);

			expect(req.request.method).toBe('GET');
			req.error(new ErrorEvent('404'));
    });
  });

  describe('list | getting all countries', () => {
    it('should send a get request and return the list of countries', done => {
      service.list().subscribe(res => {
        expect(res).toEqual([mockCountry]);
        done();
      });

      const req = httpMock.expectOne(`${service.url}/`);

      expect(req.request.method).toBe('GET');
      req.flush([mockCountry]);
		});
  });
});
