import { DaffBreadcrumb } from '../breadcrumb/public_api';
import { DaffDocKind } from '../kind/public_api';

/**
 * A basic generated document that represents some piece of documentation.
 */
export interface DaffBaseDoc {
  id: string;
  title: string;
  breadcrumbs: Array<DaffBreadcrumb>;
  kind: DaffDocKind;
}
