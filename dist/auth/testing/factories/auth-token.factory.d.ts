import { DaffAuthToken } from '@daffodil/auth';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockAuthToken implements DaffAuthToken {
    token: any;
}
export declare class DaffAuthTokenFactory extends DaffModelFactory<DaffAuthToken> {
    constructor();
}
