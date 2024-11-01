import { DaffDoc } from './type';

/**
 * An API doc that includes the type of the symbol.
 */
export interface DaffApiDoc extends DaffDoc {
  docType: string;
}
