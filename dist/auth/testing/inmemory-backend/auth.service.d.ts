import { InMemoryDbService } from 'angular-in-memory-web-api';
export declare class DaffInMemoryBackendAuthService implements InMemoryDbService {
    constructor();
    private generateToken;
    private generateId;
    createDb(): {
        auth: {};
    };
    post(reqInfo: any): any;
    private login;
    private register;
    private logout;
    private check;
}
