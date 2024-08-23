import { DaffioDoc } from '../../models/doc';

/**
 * An object for an API document.
 */
export interface DaffioApiDoc extends DaffioDoc {
  description: string;
  docType: string;
  docTypeShorthand: string;
}
