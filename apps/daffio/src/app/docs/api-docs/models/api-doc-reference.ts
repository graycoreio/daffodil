import { DaffioDocList } from "../../shared/models/doc-list";

/**
 * An object for a reference to an API document.
 */
export interface DaffioApiDocReference extends DaffioDocList<DaffioApiDocReference> {
  docType: string;
  docTypeShorthand: string;
}
