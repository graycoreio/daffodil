import { Operation } from '@apollo/client/core';

/**
 * A function to be provided via the DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER injection token when Magento
 * is the backend platform. This function will convert cacheable operations into an equivalent operation
 * that Magento will recognize as cacheable.
 */
export const DaffMagentoApolloCachedOperationConverter = (o: Operation): Operation => {
	o.setContext({ method: 'GET' });

	return o;
}
