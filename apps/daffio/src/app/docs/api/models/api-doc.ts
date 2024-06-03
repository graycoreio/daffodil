import { DaffioDoc } from '../../models/doc';

/**
 * An object for an API document.
 */
export interface DaffioApiDoc extends DaffioDoc {
  docType: string;
  docTypeShorthand: string;
}
