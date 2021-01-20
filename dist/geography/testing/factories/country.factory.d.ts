import { DaffCountry } from '@daffodil/geography';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockCountry implements DaffCountry {
    id: string;
    name: any;
    name_en: any;
    alpha2: any;
    alpha3: any;
    subdivisions: any[];
}
export declare class DaffCountryFactory extends DaffModelFactory<DaffCountry> {
    constructor();
}
