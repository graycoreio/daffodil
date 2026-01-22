import { DaffDocsItem } from '@daffodil/docs-utils';
import { AlgoliaSearchResultTransform } from '@daffodil/search/driver/algolia';
import {
  DAFF_SEARCH_DOCS_RESULT_KIND,
  DaffSearchDocsResult,
} from '@daffodil/search-docs';

export const algoliaSearchDocsResultTransform: AlgoliaSearchResultTransform<DaffDocsItem> = (doc): DaffSearchDocsResult => ({
  ...doc,
  url: doc.path,
  kind: 'kind' in doc ? doc.kind : DAFF_SEARCH_DOCS_RESULT_KIND,
});
