import { DaffioDocList } from '../../docs/models/doc-list';

/**
 * An object for a reference to an API document.
 */
export interface DaffioApiReference extends DaffioDocList<DaffioApiReference> {
  docType: string;
  docTypeShorthand: string;
}
