import { DaffMagentoApolloCachedOperationConverter } from '@daffodil/driver/magento';

describe('Driver | Magento | GraphQl | DaffMagentoApolloCachedOperationConverter', () => {
	
	it('should set the operation to a GET method', () => {
		const mockOperation = {
			query: null,
			operationName: null,
			extensions: null,
			variables: null,
			setContext: jasmine.createSpy(),
			getContext: null
		};
		DaffMagentoApolloCachedOperationConverter(mockOperation);

		expect(mockOperation.setContext).toHaveBeenCalledWith({ method: 'GET' });
	});
});
