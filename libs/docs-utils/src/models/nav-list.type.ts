interface DaffDocsNavListBase {
  id: string;
  title: string;
}

export interface DaffDocsNavListLeaf extends DaffDocsNavListBase {
  path: string;
  tableOfContents: string;
  children: never;
}

export interface DaffDocsNavListBranch<T extends DaffDocsNavList = DaffDocsNavList> extends DaffDocsNavListBase {
  children: Array<T>;
}

export type DaffDocsNavGenericList<T extends DaffDocsNavList> = DaffDocsNavListBranch<T> | DaffDocsNavListLeaf;
export type DaffDocsNavList = DaffDocsNavGenericList<DaffDocsNavListLeaf | DaffDocsNavListBranch>;
