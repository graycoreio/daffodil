import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyServiceInterface } from '@daffodil/geography/driver';
export declare class DaffInMemoryGeographyService implements DaffGeographyServiceInterface<DaffCountry> {
    private http;
    url: string;
    constructor(http: HttpClient);
    get(countryId: DaffCountry['id']): Observable<DaffCountry>;
    list(): Observable<DaffCountry[]>;
}
