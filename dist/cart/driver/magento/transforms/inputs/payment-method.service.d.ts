import { DaffCartPaymentMethod } from '@daffodil/cart';
import { MagentoPaymentMethodInput } from '../../models/requests/payment-method';
export declare class DaffMagentoPaymentMethodInputTransformer {
    transform(payment: Partial<DaffCartPaymentMethod>): MagentoPaymentMethodInput;
}
