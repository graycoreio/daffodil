import { DaffBreadcrumb } from '@daffodil/docs-utils';

export interface DaffioDoc {
  id: string;
  title: string;
  contents: string;
  tableOfContents?: {
    json: {
      content: string;
      lvl: number;
      slug: string;
    }[];
  };
  breadcrumbs?: Array<DaffBreadcrumb>;
}
