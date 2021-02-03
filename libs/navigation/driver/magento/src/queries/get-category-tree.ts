import { Inject, Injectable } from '@angular/core';
import { Apollo, gql, Query } from 'apollo-angular';
import { MAGENTO_NAVIGATION_TREE_QUERY_DEPTH } from '../interfaces/navigation-config.interface';
import { GetCategoryTreeResponse } from '../models/public_api';

import { getCategoryNodeFragment } from './fragments/category-node';

/**
 * Generates a category tree query with the specified number of nested child category tree fragments.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoGetCategoryTreeQueryService extends Query<GetCategoryTreeResponse> {

	constructor(
		@Inject(MAGENTO_NAVIGATION_TREE_QUERY_DEPTH) private categoryTreeQueryDepth: number,
		apollo: Apollo
	) {
		super(apollo);
	}

  document = gql`
	query GetCategoryTree($filters: CategoryFilterInput!){
		categoryList(filters: $filters) {
			...recursiveCategoryNode
		}
	}
	${getCategoryNodeFragment(this.categoryTreeQueryDepth)}
`;
}