import { DaffBreadcrumb } from '../breadcrumb/public_api';
import { DaffDocKind } from '../kind/public_api';
import { DaffDocTableOfContents } from '../toc/public_api';

/**
 * A basic generated document that represents some piece of documentation.
 */
export interface DaffDoc {
  id: string;
  title: string;
  contents: string;
  breadcrumbs: Array<DaffBreadcrumb>;
  kind: DaffDocKind;
  tableOfContents: DaffDocTableOfContents;
}
