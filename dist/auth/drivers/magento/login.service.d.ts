import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffLoginServiceInterface } from '../interfaces/login-service.interface';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAuthToken } from '../../models/auth-token';
import { DaffMagentoAuthTransformerService } from './transforms/auth-transformer.service';
export declare class DaffMagentoLoginService implements DaffLoginServiceInterface<DaffLoginInfo, DaffAuthToken> {
    private apollo;
    authTransformer: DaffMagentoAuthTransformerService;
    constructor(apollo: Apollo, authTransformer: DaffMagentoAuthTransformerService);
    login({ email, password }: DaffLoginInfo): Observable<DaffAuthToken>;
    logout(): Observable<any>;
}
