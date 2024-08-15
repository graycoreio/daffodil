import { Document } from 'dgeni';

export const transformGuideDoc = (doc: Document): TransformedDocument => ({
  id: doc.id,
  title: doc.title,
  path: doc.path,
  tableOfContents: doc.tableOfContents,
});

export interface TransformedDocument {
  id: string;
  title: string;
  path: string;
  tableOfContents: string;
}

