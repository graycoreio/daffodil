import { DaffBreadcrumb } from '@daffodil/docs-utils';

/**
 * A basic generated document that represents some piece of documentation.
 */
export interface DaffDoc {
  id: string;
  title: string;
  contents: string;
  breadcrumbs: Array<DaffBreadcrumb>;
}
