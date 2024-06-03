import { DaffioGenericDocList } from '../../models/doc-list';

/**
 * An object for a reference to an API document.
 */
export interface DaffioApiReference extends DaffioGenericDocList<DaffioApiReference> {
  docType: string;
  docTypeShorthand: string;
}
