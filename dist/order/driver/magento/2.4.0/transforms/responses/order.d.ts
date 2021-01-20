import { DaffOrder } from '@daffodil/order';
import { MagentoGraycoreOrder } from '../../models/responses/public_api';
/**
 * Transforms the MagentoGraycoreOrder from the magento order query into a DaffOrder.
 */
export declare function daffMagentoTransformOrder(order: MagentoGraycoreOrder): DaffOrder;
