/**
 * A list of references for API documents.
 */
export interface DaffioGenericDocList<T extends DaffioGenericDocList<T>> {
  id: string;
  title: string;
  path?: string;
  tableOfContents?: string;
  children: T[];
}

export type DaffioDocList = DaffioGenericDocList<DaffioDocList>;
