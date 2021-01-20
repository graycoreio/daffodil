import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffAuthServiceInterface } from '../interfaces/auth-service.interface';
export declare class DaffMagentoAuthService implements DaffAuthServiceInterface {
    private apollo;
    constructor(apollo: Apollo);
    check(): Observable<void>;
}
