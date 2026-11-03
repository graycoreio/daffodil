import {
  DaffSearchDriverErrorMap,
  DAFF_SEARCH_QUERY_TOO_SHORT_ERROR_CODE,
} from '@daffodil/search/driver';

export const MagentoSearchCategoryErrorMap = {
  ...DaffSearchDriverErrorMap,
};

export const MagentoSearchCategoryErrorMessageRegexMap = {
  [DAFF_SEARCH_QUERY_TOO_SHORT_ERROR_CODE]: /Invalid match filter\. Minimum length is 3/,
};
