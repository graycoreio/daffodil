import { Document } from 'dgeni';

import {
  DAFF_DOCS_PATH,
  DAFF_DOCS_DESIGN_PATH,
  DaffDesignGuideNavDoc,
  DaffNavDoc,
} from '@daffodil/docs-utils';

export const transformGuideDoc = (doc: Document): DaffNavDoc => ({
  id: doc.id,
  title: doc.title,
  path: doc.path,
});

export const transformDesignGuideDoc = (doc: Document): DaffDesignGuideNavDoc => doc.id === 'README' ?
  {
    id: 'overview',
    title: 'Overview',
    path: `/${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
  }
  : {
    id: doc.id,
    title: doc.title,
    path: doc.path,
    description: doc.longDescription,
  };


