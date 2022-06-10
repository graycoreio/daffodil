import {
  DAFF_COLLECTION_PAGE_OUT_OF_BOUNDS_ERROR_CODE,
  daffCollectionErrorMap,
} from '@daffodil/core';

export const MagentoSearchProductErrorMap = {
  ...daffCollectionErrorMap,
};

export const MagentoSearchProductErrorMessageRegexMap = {
  [DAFF_COLLECTION_PAGE_OUT_OF_BOUNDS_ERROR_CODE]: /current_page value (\d+) specified is greater than the (\d+) page\(s\) available/,
};
