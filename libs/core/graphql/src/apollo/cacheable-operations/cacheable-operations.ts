import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ApolloLink, Operation } from '@apollo/client/core';

/**
 * A multi-provider injection token of the operation names of apollo queries that should 
 * be cached. This is needed because platforms (e.g. Magento, Shopify, etc.) typically do not cache queries by default. 
 * This token should be used by daffodil driver platform modules to register operation names that are cacheable, and is
 * intended for internal daffodil use only.
 */
export const DAFF_APOLLO_CACHEABLE_OPERATIONS = new InjectionToken<string[]>('DAFF_APOLLO_CACHEABLE_OPERATIONS');
/**
 * An injection token for a converter function that makes apollo operations cacheable. The kind of conversion necessary is 
 * determined by the platform used. These converter functions are defined by daffodil in the respective `@daffodil/driver/{platform}`
 * packages, but need to be provided by the app.
 */
export const DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER = new InjectionToken<DaffApolloCachedOperationConverter>('DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER');

/**
 * The type of function to be provided via the DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER.
 */
export type DaffApolloCachedOperationConverter = (o: Operation) => Operation;

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
