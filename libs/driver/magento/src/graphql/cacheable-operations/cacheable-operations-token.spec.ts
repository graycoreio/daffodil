import { DAFF_MAGENTO_CACHEABLE_OPERATIONS, provideDaffMagentoCacheableOperation, provideManyDaffMagentoCacheableOperations } from './cacheable-operations-token';

describe('Driver | Magento | GraphQL | DAFF_MAGENTO_CACHEABLE_OPERATIONS', () => {
	
	describe('provideDaffMagentoCacheableOperation', () => {
		
		it('should return the expected provider object', () => {
			const OPERATION_NAME = 'operationName';
			const expected = {
				provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
				useValue: OPERATION_NAME,
				multi: true
			}

			expect(provideDaffMagentoCacheableOperation(OPERATION_NAME)).toEqual(expected);
		});
	});
	
	describe('provideManyDaffMagentoCacheableOperations', () => {

		it('should return the expected array of provider objects', () => {
			const OPERATION_NAME1 = 'operationName1';
			const OPERATION_NAME2 = 'operationName2';
			const expected = [
				{
					provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
					useValue: OPERATION_NAME1,
					multi: true
				},
				{
					provide: DAFF_MAGENTO_CACHEABLE_OPERATIONS,
					useValue: OPERATION_NAME2,
					multi: true
				}
			]

			expect(provideManyDaffMagentoCacheableOperations([OPERATION_NAME1, OPERATION_NAME2])).toEqual(expected);
		});
	});
});
