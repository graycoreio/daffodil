import { DaffOrder } from '@daffodil/order';
import { MagentoOrder } from '../../models/responses/public_api';
/**
 * Transforms the MagentoOrder from the magento order query into a DaffOrder.
 */
export declare function daffMagentoTransformOrder(order: MagentoOrder): DaffOrder;
