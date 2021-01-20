import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyServiceInterface } from '@daffodil/geography/driver';
import { DaffMagentoCountryTransformer } from './transforms/responses/country.service';
/**
 * A service for making Magento GraphQL queries for carts.
 */
export declare class DaffGeographyMagentoService implements DaffGeographyServiceInterface<DaffCountry> {
    private apollo;
    countryTransformer: DaffMagentoCountryTransformer;
    constructor(apollo: Apollo, countryTransformer: DaffMagentoCountryTransformer);
    list(): Observable<DaffCountry[]>;
    get(countryId: DaffCountry['id']): Observable<DaffCountry>;
}
