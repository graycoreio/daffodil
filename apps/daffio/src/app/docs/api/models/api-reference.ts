import { DaffDocsGenericList } from '@daffodil/docs-utils';

/**
 * An object for a reference to an API document.
 */
export interface DaffioApiReference extends DaffDocsGenericList<DaffioApiReference> {
  docType: string;
  docTypeShorthand: string;
}
