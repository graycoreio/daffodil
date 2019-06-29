import { DaffioApiDocReference } from './api-doc-reference';

/**
 * A list of references for API documents.
 */
export interface DaffioApiDocReferenceList {
  name: string;
  title: string;
  path: string;
  items: DaffioApiDocReference[];
}
