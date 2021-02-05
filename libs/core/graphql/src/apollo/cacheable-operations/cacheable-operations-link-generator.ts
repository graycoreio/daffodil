import { Inject, Injectable } from '@angular/core';
import { ApolloLink } from '@apollo/client/core';

import { DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER } from './cacheable-operations-converter';
import { DAFF_APOLLO_CACHEABLE_OPERATIONS } from './cacheable-operations-token';

/**
 * A service that will convert cacheable apollo operations into a format that the platform will understand as cacheable.
 * While the list of cacheable operations are added by whatever daffodil driver modules are provided to an application,
 * the specific converter function, which is dependent on the platform, needs to be provided alongside this service via the 
 * DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER injection token.
 * 
 * This link generator can be used regardless of what platform is being queried, as long as only one platform is used for
 * all queries. If different platforms are used for different queries, then the platform specific daffodil link 
 * generators should be used instead. 
 */
@Injectable({ 
	providedIn: 'root'
})
export class DaffApolloCacheableOperationsLinkGenerator {
	constructor(
		@Inject(DAFF_APOLLO_CACHEABLE_OPERATIONS) private apolloGetRequests: string[],
		@Inject(DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER) private cachedOperationConverter,
	) {}

	getCachableOperationsLink() {
		return new ApolloLink((operation, forward) => {
			if(this.apolloGetRequests.includes(operation.operationName)) {
				this.cachedOperationConverter(operation);
			}
			return forward(operation);
		})
	}
}
