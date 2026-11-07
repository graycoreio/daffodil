import { DaffCollectionMetadata } from '@daffodil/core';

import { MagentoSearchResultPageInfo } from '../../models/public_api';

export function magentoPageInfoTransform(pageInfo: MagentoSearchResultPageInfo): Pick<DaffCollectionMetadata, 'pageSize' | 'currentPage' | 'totalPages'> {
  return {
    pageSize: pageInfo.page_size,
    currentPage: pageInfo.current_page,
    totalPages: pageInfo.total_pages,
  };
}
