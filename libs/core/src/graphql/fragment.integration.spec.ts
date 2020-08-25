import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { daffBuildFragmentSpread } from './build-fragment-spread';
import { daffGetFragmentNames } from './get-fragment-names';

describe('Core | GraphQL | Fragment Integration', () => {
  let controller: ApolloTestingController;
  let apollo: Apollo;

  let mockFragment: DocumentNode;
  let mockResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ]
    });

    controller = TestBed.get(ApolloTestingController);
    apollo = TestBed.get(Apollo);

    mockFragment = gql`
      fragment fragment1 on Query {
        field1
      }
      fragment fragment2 on Query {
        field2
      }
    `;
    mockResponse = {
      id: 'id',
      field1: 'field1',
      field2: 'field2',
    }
  });

  describe('adding fields to a query', () => {
    let query;

    beforeEach(() => {
      query = gql`
        query {
          id
          ${daffBuildFragmentSpread(daffGetFragmentNames(mockFragment))}
        }
        ${mockFragment}
      `;
    });

    it('should include the fragment fields in the response', done => {
      apollo.query({query}).subscribe(resp => {
        expect(resp.data).toEqual(mockResponse);
        done();
      });

      const op = controller.expectOne(query);

      op.flush({
        data: mockResponse
      });
    });

    it('should not include fields not defined in the fragments', done => {
      apollo.query({query}).subscribe(resp => {
        expect(resp.data).toEqual(mockResponse);
        expect((resp.data as any).field3).not.toBeDefined();
        done();
      });

      const op = controller.expectOne(query);

      op.flush({
        data: {
          ...mockResponse,
          field3: 'field3'
        }
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
