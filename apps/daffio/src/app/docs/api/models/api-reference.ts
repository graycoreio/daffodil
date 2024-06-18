import {
  DaffDocsNavGenericList,
  DaffDocsNavListBranch,
  DaffDocsNavListLeaf,
} from '@daffodil/docs-utils';

/**
 * An object for a reference to an API document.
 */
export type DaffioApiReference = DaffDocsNavGenericList<(DaffDocsNavListLeaf | DaffDocsNavListBranch<DaffioApiReference>) & {
  path: string;
  docType: string;
  docTypeShorthand: string;
}> & {
  path: string;
  docType: string;
  docTypeShorthand: string;
};
