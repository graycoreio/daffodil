import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { DaffInMemoryDataServiceInterface } from '@daffodil/core/testing';
import { DaffCountry } from '@daffodil/geography';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';
/**
 * An in-memory service that stubs out the backend services for getting countries.
 */
export declare class DaffInMemoryBackendGeographyService implements InMemoryDbService, DaffInMemoryDataServiceInterface {
    private countryFactory;
    private subdivisionFactory;
    countries: DaffCountry[];
    constructor(countryFactory: DaffCountryFactory, subdivisionFactory: DaffSubdivisionFactory);
    /**
     * Creates a fake database of countries for the geography inmemory backend service.
     *
     * @returns A fake database of an array of countries
     */
    createDb(reqInfo: RequestInfo): any;
    /**
     * Responds to GET requests.
     */
    get(reqInfo: RequestInfo): any;
    private getCountry;
    private listCountries;
}
