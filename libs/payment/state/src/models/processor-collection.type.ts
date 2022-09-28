import { DaffPaymentAvailableProcessor } from './available-processor.type';

/**
 * A collection of {@link DaffPaymentAvailableProcessor}s.
 */
export type DaffPaymentProcessorCollection = Record<DaffPaymentAvailableProcessor['kind'], DaffPaymentAvailableProcessor>;
