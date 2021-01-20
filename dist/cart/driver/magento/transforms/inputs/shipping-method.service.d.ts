import { DaffCartShippingRate } from '@daffodil/cart';
import { MagentoShippingMethodInput } from '../../models/requests/shipping-method';
export declare class DaffMagentoShippingMethodInputTransformer {
    transform(method: Partial<DaffCartShippingRate>): MagentoShippingMethodInput;
}
