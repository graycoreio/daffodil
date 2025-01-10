import { DaffDoc } from './type';
import { DaffDocExample } from '../example/public_api';

/**
 * An API doc that includes the type of the symbol.
 */
export interface DaffApiDoc extends DaffDoc {
  docType: string;
  examples: Array<DaffDocExample>;
}
