import { Document } from 'dgeni';

import {
  DAFF_DOCS_PATH,
  DAFF_DOCS_DESIGN_PATH,
} from '@daffodil/docs-utils';

export const transformGuideDoc = (doc: Document): TransformedDocument => ({
  id: doc.id,
  title: doc.title,
  path: doc.path,
  tableOfContents: doc.tableOfContents,
});

export const transformDesignGuideDoc = (doc: Document): TransformedDocument => doc.id === 'README' ?
  {
    id: 'overview',
    title: 'Overview',
    path: `/${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
    tableOfContents: doc.tableOfContents,
  }
  : {
    id: doc.id,
    title: doc.title,
    path: doc.path,
    tableOfContents: doc.tableOfContents,
  };

export interface TransformedDocument {
  id: string;
  title: string;
  path: string;
  tableOfContents: string;
}

