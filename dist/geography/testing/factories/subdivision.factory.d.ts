import { DaffSubdivision } from '@daffodil/geography';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockSubdivision implements DaffSubdivision {
    id: string;
    name: any;
    iso_3166_2: any;
}
export declare class DaffSubdivisionFactory extends DaffModelFactory<DaffSubdivision> {
    constructor();
}
