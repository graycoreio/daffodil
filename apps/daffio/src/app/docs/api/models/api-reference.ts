import { DaffDocsNavGenericList } from '@daffodil/docs-utils';

/**
 * An object for a reference to an API document.
 */
export interface DaffioApiReference extends DaffDocsNavGenericList<DaffioApiReference> {
  docType: string;
  docTypeShorthand: string;
  path: string;
}
