import { Injectable } from '@angular/core';
import {
  InMemoryDbService,
  RequestInfo,
  STATUS
} from 'angular-in-memory-web-api';

import { DaffCountry } from '@daffodil/geography';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';

import {
  DaffCountryFactory,
  DaffSubdivisionFactory
} from '../factories/public_api';

/**
 * An in-memory service that stubs out the backend services for getting countries.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryBackendGeographyService implements InMemoryDbService, DaffInMemoryDataServiceInterface {
  countries: DaffCountry[];

  constructor(
    private countryFactory: DaffCountryFactory,
    private subdivisionFactory: DaffSubdivisionFactory
  ) {
    this.countries = this.countryFactory.createMany(5);
    this.countries.forEach(country => country.subdivisions = this.subdivisionFactory.createMany(5))
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

  /**
   * Responds to GET requests.
   */
  get(reqInfo: RequestInfo): any {
    return reqInfo.utils.createResponse$(() => ({
      body: reqInfo.id ? this.getCountry(reqInfo) : this.listCountries(reqInfo),
      status: STATUS.OK
    }))
  }

  private getCountry(reqInfo: RequestInfo) {
    return reqInfo.collection.find(country => country.id === reqInfo.id)
  }

  private listCountries(reqInfo: RequestInfo) {
    return reqInfo.collection
  }
}
