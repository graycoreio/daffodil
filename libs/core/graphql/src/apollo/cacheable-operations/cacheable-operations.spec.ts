import { TestBed } from '@angular/core/testing';
import { gql, NextLink } from '@apollo/client/core';

import { DaffApolloCacheableOperationsLinkGenerator, DAFF_APOLLO_CACHEABLE_OPERATIONS, DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER } from './cacheable-operations';

describe('Core | GraphQL | DaffApolloCacheableOperationsLinkGenerator', () => {
	let service: DaffApolloCacheableOperationsLinkGenerator;
	let mockOperationConverterFunction;

  beforeEach(() => {
		mockOperationConverterFunction = jasmine.createSpy();
    TestBed.configureTestingModule({
			providers: [
				{ provide: DAFF_APOLLO_CACHEABLE_OPERATIONS, useValue: 'TestOperationName' },
				{ provide: DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER, useValue: mockOperationConverterFunction}
			]
    });

		service = TestBed.inject(DaffApolloCacheableOperationsLinkGenerator);
	});
	
	describe('getCachableOperationsLink', () => {
		
		it(`should call the DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER with the operation
		    when the operation is cacheable`, () => {
			const testQuery = gql`query TestOperationName($test: string){ name }`;
			const mockOperation = {
				query: testQuery,
				operationName: 'TestOperationName',
				extensions: null,
				variables: null,
				setContext: null,
				getContext: null
			};
			const mockNextLink = jasmine.createSpy;

			service.getCachableOperationsLink().request(mockOperation, <NextLink><unknown>mockNextLink)

			expect(mockOperationConverterFunction).toHaveBeenCalledWith(mockOperation);
		});

		it(`should not call the DAFF_APOLLO_CACHEABLE_OPERATIONS_CONVERTER
		    when the operation is not cacheable`, () => {
			const testQuery = gql`query NotCacheableOperation($test: string){ name }`;
			const mockOperation = {
				query: testQuery,
				operationName: 'NotCacheableOperation',
				extensions: null,
				variables: null,
				setContext: null,
				getContext: null
			};
			const mockNextLink = jasmine.createSpy;

			service.getCachableOperationsLink().request(mockOperation, <NextLink><unknown>mockNextLink)

			expect(mockOperationConverterFunction).not.toHaveBeenCalled();
		});
	});
});
