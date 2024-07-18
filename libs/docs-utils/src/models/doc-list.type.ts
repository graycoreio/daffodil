/**
 * A list of references for API documents.
 */
export interface DaffDocsGenericList<T extends DaffDocsGenericList<T>> {
  id: string;
  title: string;
  path?: string;
  children: T[];
}

export type DaffDocsList = DaffDocsGenericList<DaffDocsList>;
