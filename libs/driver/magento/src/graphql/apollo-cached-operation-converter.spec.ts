import { TestBed } from '@angular/core/testing';
import { Operation } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { DaffMagentoApolloCachedOperationConverter } from './apollo-cached-operation-converter';

describe('Driver | Magento | GraphQl | DaffMagentoApolloCachedOperationConverter', () => {

	let operation: Operation;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
    });

		const controller: ApolloTestingController = TestBed.inject(ApolloTestingController);
		const apollo: Apollo = TestBed.inject(Apollo);
		const testQuery = gql`{ testQuery(test: string) { name }}`;
		apollo.query({ query: testQuery }).subscribe();

		operation = controller.expectOne(testQuery).operation;
	});

	it('should set the method of an operation to GET', () => {
		expect(operation.getContext().method).not.toEqual('GET');
		DaffMagentoApolloCachedOperationConverter(operation);
		
		expect(operation.getContext().method).toEqual('GET');
	});
});
