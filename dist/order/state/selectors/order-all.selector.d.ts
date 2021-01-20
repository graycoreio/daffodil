import { DaffOrder } from '@daffodil/order';
import { DaffOrderEntitySelectors } from './order-entities.selector';
import { DaffOrderSelectors } from './order.selector';
import { DaffOrderFeatureSelector } from './order-feature.selector';
export interface DaffOrderAllSelectors<T extends DaffOrder = DaffOrder> extends DaffOrderEntitySelectors<T>, DaffOrderSelectors, DaffOrderFeatureSelector<T> {
}
export declare const getDaffOrderSelectors: <T extends DaffOrder = DaffOrder>() => DaffOrderAllSelectors<T>;
