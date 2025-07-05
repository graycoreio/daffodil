import { GraphQlApolloValidator } from '@daffodil/core/graphql';
import { DaffProductInvalidAPIResponseError } from '@daffodil/product/driver';

import { MagentoProductGetByUrlReponse } from './response.type';

export const magentoProductGetByUrlValidator: GraphQlApolloValidator<MagentoProductGetByUrlReponse>
	= (response) => {
	  if (!response.data?.route?.sku) {
	    throw new DaffProductInvalidAPIResponseError('The platform did not respond with a product.');
	  }

	  return response;
	};
