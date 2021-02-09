import { Inject, Injectable } from '@angular/core';
import { ApolloLink } from '@apollo/client/core';
import { DaffApolloCacheableOperationLinkGenerator } from '@daffodil/core/graphql';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from './cacheable-operations-token';

/**
 * A service that will convert cacheable apollo operations into a format that Magento will understand as cacheable.
 */
@Injectable({ 
	providedIn: 'root'
})
export class DaffMagentoApolloCacheableOperationsLinkGenerator implements DaffApolloCacheableOperationLinkGenerator {
	constructor(
		@Inject(DAFF_MAGENTO_CACHEABLE_OPERATIONS) private apolloGetRequests: string[],
	) {}

	getLink(): ApolloLink {
		return new ApolloLink((operation, forward) => {
			if(this.apolloGetRequests.indexOf(operation.operationName) > -1) {
				operation.setContext({ method: 'GET' });
			}
			return forward(operation);
		})
	}
}
