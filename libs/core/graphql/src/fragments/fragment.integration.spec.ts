import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { daffBuildFragmentNameSpread } from './build-fragment-name-spread';
import { daffBuildFragmentDefinition } from './build-fragment-definition';
import { mergeSchemas } from '@angular-devkit/core/src/json/schema';

describe('Core | GraphQL | Fragment Integration', () => {
  let controller: ApolloTestingController;
  let apollo: Apollo;

  let mockFragment1: DocumentNode;
  let mockFragment2: DocumentNode;
  let mockResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ]
    });

    controller = TestBed.get(ApolloTestingController);
    apollo = TestBed.get(Apollo);

    // since daffodil uses a multi provider to inject extra fragments, this is the form with which we will test
    mockFragment1 = gql`
      fragment fragment11 on Query {
        field11
      }
      fragment fragment12 on Query {
        field12
      }
    `;
    mockFragment2 = gql`
      fragment fragment21 on Query {
        field21
      }
      fragment fragment22 on Query {
        field22
      }
    `;
    mockResponse = {
      id: 'id',
      field11: 'field11',
      field12: 'field12',
      field21: 'field21',
      field22: 'field22',
    }
  });

  describe('adding fields to a query', () => {
    let query;

    beforeEach(() => {
      query = gql`
        query {
          id
          ${daffBuildFragmentNameSpread(mockFragment1, mockFragment2)}
        }
        ${daffBuildFragmentDefinition(mockFragment1, mockFragment2)}
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
