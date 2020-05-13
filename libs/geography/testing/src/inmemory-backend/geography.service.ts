import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo
} from 'angular-in-memory-web-api';

import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory } from '@daffodil/geography/testing';

/**
 * An in-memory service that stubs out the backend services for getting countries.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendGeographyService implements InMemoryDbService {
  countries: DaffCountry[];

  constructor(private countryFactory: DaffCountryFactory) {
    this.countries = this.countryFactory.createMany(5);
  }

  /**
   * Creates a fake database of countries for the geography inmemory backend service.
   *
   * @returns A fake database of an array of countries
   */
  createDb(reqInfo: RequestInfo): any {
    if (reqInfo) {
      const seedData = reqInfo.utils.getJsonBody(reqInfo.req).countries;
      if (seedData) {
        this.countries = seedData;
      }
    }

    return {
      countries: this.countries
    };
  }
}
