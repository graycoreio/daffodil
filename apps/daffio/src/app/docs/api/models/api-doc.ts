import { DaffDoc } from '@daffodil/docs-utils';

/**
 * An object for an API document.
 */
export interface DaffioApiDoc extends DaffDoc {
  docType: string;
  docTypeShorthand: string;
}
