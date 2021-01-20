import { DaffLoginInfo } from '../../../models/login-info';
import { DaffAccountRegistration } from '../../../models/account-registration';
/**
 * Transforms magento auths into an object usable by daffodil.
 */
export declare class DaffMagentoLoginInfoTransformerService {
    transform(registration: DaffAccountRegistration): DaffLoginInfo;
}
