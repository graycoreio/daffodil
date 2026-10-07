import {
  DaffProductReview,
  DaffProductReviews,
} from '@daffodil/reviews';

import { MagentoProductReviews } from '../../models/public_api';

export const magentoProductReviewCollectionMetadataTransform = (productReviews: MagentoProductReviews, daffReviews: DaffProductReview[]): DaffProductReviews['metadata'] => ({
  ids: daffReviews.map(review => review.id),
  pageSize: productReviews.page_info.page_size,
  currentPage: productReviews.page_info.current_page,
  totalPages: productReviews.page_info.total_pages,
  count: daffReviews.length,
  sortOptions: null,
  appliedSortDirection: null,
  appliedSortOption: null,
  filters: {},
});
