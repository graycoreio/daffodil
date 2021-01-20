import { Observable } from 'rxjs';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyServiceInterface } from '@daffodil/geography/driver';
import { DaffCountryFactory, DaffSubdivisionFactory } from '@daffodil/geography/testing';
export declare class DaffTestingGeographyService implements DaffGeographyServiceInterface<DaffCountry> {
    private countryFactory;
    private subdivisionFactory;
    constructor(countryFactory: DaffCountryFactory, subdivisionFactory: DaffSubdivisionFactory);
    get(countryId: DaffCountry['id']): Observable<DaffCountry>;
    list(): Observable<DaffCountry[]>;
}
