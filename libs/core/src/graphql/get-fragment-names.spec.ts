import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { daffGetFragmentNames } from './get-fragment-names';

describe('Core | GraphQL | daffGetFragmentNames', () => {
  let mockFragment: DocumentNode;
  let mockEmptyFragment: DocumentNode;

  beforeEach(() => {
    mockFragment = gql`
      fragment fragment1 on Query {
        __typename
      }
      fragment fragment2 on Query {
        __typename
      }
      type Taco {
        taco: String
      }
      interface Foo {
        foo: String
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

  describe('when there are fragments defined', () => {
    let names;

    beforeEach(() => {
      names = daffGetFragmentNames(mockFragment);
    });

    it('should return a list of the fragment names', () => {
      expect(names).toContain('fragment1');
      expect(names).toContain('fragment2');
    });

    it('should not return the names of other nodes', () => {
      expect(names).not.toContain('Random');
      expect(names).not.toContain('Foo');
    });
  });

  describe('when there are no fragments defined', () => {
    it('should return an empty list', () => {
      expect(daffGetFragmentNames(mockEmptyFragment)).toEqual([]);
    });
  });

  describe('when null is passed', () => {
    it('should return an empty list', () => {
      expect(daffGetFragmentNames(null)).toEqual([]);
    });
  });
});
