import { GraphQlApolloValidator } from '@daffodil/core/graphql';

import { MagentoCategoryUrlResolverResponse } from './response.type';

export const magentoCategoryGetByUrlValidator: GraphQlApolloValidator<MagentoCategoryUrlResolverResponse>
	= (response) => {
	  if (!response.data?.route?.uid) {
	    throw new Error('The platform did not respond with a category.');
	  }

	  return response;
	};
