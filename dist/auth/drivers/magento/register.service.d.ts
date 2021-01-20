import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { DaffRegisterServiceInterface } from '../interfaces/register-service.interface';
import { DaffLoginInfo } from '../../models/login-info';
import { DaffAccountRegistration } from '../../models/account-registration';
import { DaffMagentoLoginInfoTransformerService } from './transforms/login-info-transformer.service';
export declare class DaffMagentoRegisterService implements DaffRegisterServiceInterface<DaffAccountRegistration, DaffLoginInfo> {
    private apollo;
    private loginInfoTransformer;
    constructor(apollo: Apollo, loginInfoTransformer: DaffMagentoLoginInfoTransformerService);
    register(registration: DaffAccountRegistration): Observable<DaffLoginInfo>;
}
