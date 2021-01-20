import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffPaypalTokenResponse } from '@daffodil/paypal';
export declare class MockPaypalTokenResponse implements DaffPaypalTokenResponse {
    token: string;
    urls: {
        start: any;
        edit: any;
    };
}
export declare class DaffPaypalTokenResponseFactory extends DaffModelFactory<DaffPaypalTokenResponse> {
    constructor();
}
