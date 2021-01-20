import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyFacadeInterface } from '@daffodil/geography/state';
export declare class MockDaffGeographyFacade implements DaffGeographyFacadeInterface {
    loading$: BehaviorSubject<boolean>;
    errors$: BehaviorSubject<string[]>;
    countries$: BehaviorSubject<DaffCountry[]>;
    countryIds$: BehaviorSubject<(string | number)[]>;
    countryCount$: BehaviorSubject<number>;
    countryEntities$: BehaviorSubject<Dictionary<DaffCountry>>;
    getCountry(id: any): BehaviorSubject<any>;
    getCountrySubdivisions(id: any): BehaviorSubject<any[]>;
    isCountryFullyLoaded(id: any): BehaviorSubject<boolean>;
    dispatch(action: Action): void;
}
