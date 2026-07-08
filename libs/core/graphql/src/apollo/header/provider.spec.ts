import { HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  ApolloLink,
  gql,
} from '@apollo/client';
import { Apollo } from 'apollo-angular';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';

import { DAFF_APOLLO_REQUEST_HANDLERS } from '../request-handler.provider';
import { provideDaffApolloHeaderProviders } from './provider';
import { DaffApolloHeaderProvider } from './type';

describe('@daffodil/core/graphql | provideDaffApolloHeaderProviders', () => {
  let apollo: Apollo;
  let controller: ApolloTestingController;
  let operation: ApolloLink.Operation;
  let handlers: Array<ApolloLink.RequestHandler>;
  let forward: jasmine.Spy<ApolloLink.ForwardFunction>;
  let firstProvider: DaffApolloHeaderProvider;
  let secondProvider: DaffApolloHeaderProvider;
  const query = gql`{ Operation(test: string) { name }}`;

  beforeEach(() => {
    firstProvider = () => new HttpHeaders({ 'X-First-Header': 'first-value' });
    secondProvider = () => new HttpHeaders({ 'X-Second-Header': 'second-value' });

    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        provideDaffApolloHeaderProviders(firstProvider, secondProvider),
      ],
    });

    controller = TestBed.inject(ApolloTestingController);
    apollo = TestBed.inject(Apollo);
    handlers = TestBed.inject(DAFF_APOLLO_REQUEST_HANDLERS);

    forward = jasmine.createSpy('forward');

    apollo.query({ query }).subscribe();
    operation = controller.expectOne(query).operation;
  });

  it('should set headers from a single provider onto the operation context', () => {
    handlers[0](operation, forward);

    expect(operation.getContext().headers.get('X-First-Header')).toEqual('first-value');
  });

  it('should set headers from multiple providers onto the operation context', () => {
    handlers[0](operation, forward);

    expect(operation.getContext().headers.get('X-First-Header')).toEqual('first-value');
    expect(operation.getContext().headers.get('X-Second-Header')).toEqual('second-value');
  });
});
