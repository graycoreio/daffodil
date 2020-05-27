import { DaffOrder } from '@daffodil/order';

/**
 * A helper function to verify that a model is a Order.
 * @param order
 */
export function isOrder(order: DaffOrder): boolean {
  return !!order.id
    && !!order.customer_id
    && !!order.created_at
    && !!order.updated_at
    && !!order.status
    && !!order.applied_codes
    && !!order.totals;
}
