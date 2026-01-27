import { Document } from 'dgeni';

import {
  DAFF_DOCS_PATH,
  DaffDesignGuideNavDoc,
  DaffNavDoc,
} from '@daffodil/docs-utils';

export const transformGuideDoc = (doc: Document): DaffNavDoc => ({
  id: doc.id,
  title: doc.title,
  path: doc.path,
});

export const transformDesignGuideDocFactory = (section: string) => (doc: Document): DaffDesignGuideNavDoc => doc.id === 'README' || doc.id === 'overview' ?
  {
    id: 'overview',
    title: 'Overview',
    path: `/${DAFF_DOCS_PATH}/${section}`,
  }
  : {
    id: doc.id,
    title: doc.title,
    path: doc.path,
    description: doc.longDescription,
  };


