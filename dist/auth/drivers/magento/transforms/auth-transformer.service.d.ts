import { DaffAuthToken } from '../../../models/auth-token';
import { MagentoAuth } from '../models/response/auth';
/**
 * Transforms magento auths into an object usable by daffodil.
 */
export declare class DaffMagentoAuthTransformerService {
    /**
     * Transforms the magento AuthNode from the magento auth query into a DaffAuthToken.
     * @param auth the auth from a magento auth query.
     */
    transform(auth: MagentoAuth): DaffAuthToken;
}
