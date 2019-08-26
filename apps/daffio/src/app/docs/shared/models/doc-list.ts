/**
 * A list of references for API documents.
 */
export interface DaffioDocList<T extends DaffioDocList<T>> {
  id: string;
  title: string;
  path: string;
  items?: T[];
}


