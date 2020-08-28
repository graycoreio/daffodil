import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentNameSpread } from './build-fragment-name-spread';

describe('Core | GraphQL | daffBuildFragmentNameSpread', () => {
  let mockFragment1: DocumentNode;
  let mockFragment2: DocumentNode;
  let mockEmptyFragment: DocumentNode;

  beforeEach(() => {
    mockFragment1 = gql`
      fragment fragment11 on Query {
        __typename
      }
      fragment fragment12 on Query {
        __typename
      }
      type Taco {
        taco: String
      }
      interface Foo {
        foo: String
      }
    `;
    mockFragment2 = gql`
      fragment fragment21 on Query {
        __typename
      }
      fragment fragment22 on Query {
        __typename
      }
      type Bar {
        taco: String
      }
    `;
    mockEmptyFragment = gql`
      type Random {
        taco: String
      }
      interface Foo {
        foo: String
      }
    `;
  });

  describe('when there are some fragments defined', () => {
    let names;

    beforeEach(() => {
      names = daffBuildFragmentNameSpread(mockFragment1, mockFragment2, mockEmptyFragment);
    });

    it('should return a string of the names separated by newlines', () => {
      expect(names).toEqual(`...fragment11\n...fragment12\n...fragment21\n...fragment22\n`);
    });
  });

  describe('when there are no fragments defined', () => {
    it('should return an empty string', () => {
      expect(daffBuildFragmentNameSpread(mockEmptyFragment)).toEqual('');
    });
  });

  describe('when nothing is passed', () => {
    it('should return an empty string', () => {
      expect(daffBuildFragmentNameSpread()).toEqual('');
    });
  });
});
