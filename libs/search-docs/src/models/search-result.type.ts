import {
  DaffDocKind,
  DaffDocsItem,
} from '@daffodil/docs-utils';
import { DaffSearchResult } from '@daffodil/search';

import { DAFF_SEARCH_DOCS_RESULT_KIND } from '../constants/public_api';

/**
 * An extension of a {@link DaffSearchResult} for docs.
 */
export type DaffSearchDocsResult<T extends DaffDocsItem = DaffDocsItem> = DaffSearchResult & T & {
  kind: typeof DAFF_SEARCH_DOCS_RESULT_KIND | DaffDocKind;
};
