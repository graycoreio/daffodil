import { Operation } from '@apollo/client/core';

export const DaffMagentoApolloCachedOperationConverter = (o: Operation): Operation => {
	o.setContext({ method: 'GET' });

	return o;
}
