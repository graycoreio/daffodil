import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { daffGetFragmentNames } from './get-fragment-names';

describe('Core | GraphQL | daffGetFragmentNames', () => {
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

  describe('when there are fragments defined', () => {
    let names;

    beforeEach(() => {
      names = daffGetFragmentNames(mockFragment1, mockFragment2);
    });

    it('should return a list of the fragment names', () => {
      expect(names).toContain('fragment11');
      expect(names).toContain('fragment12');
      expect(names).toContain('fragment21');
      expect(names).toContain('fragment22');
    });

    it('should not return the names of other nodes', () => {
      expect(names).not.toContain('Random');
      expect(names).not.toContain('Foo');
      expect(names).not.toContain('Bar');
      expect(names).not.toContain('Taco');
    });
  });

  describe('when there are no fragments defined', () => {
    it('should return an empty list', () => {
      expect(daffGetFragmentNames(mockEmptyFragment)).toEqual([]);
    });
  });

  describe('when nothing is passed', () => {
    it('should return an empty list', () => {
      expect(daffGetFragmentNames()).toEqual([]);
    });
  });
});
