import { gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';

import { daffFilterDuplicateFragments } from './filter-duplicate-fragments';

describe('@daffodil/core/graphql | daffFilterDuplicateFragments', () => {
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

  describe('when there are duplicate fragments passed', () => {
    let filteredList: DocumentNode[];

    beforeEach(() => {
      filteredList = daffFilterDuplicateFragments(
        mockFragment1,
        mockFragment1,
        mockFragment1,
        mockFragment2,
        mockEmptyFragment,
        mockFragment2,
        mockFragment2,
        mockFragment1,
        mockEmptyFragment,
      );
    });

    it('should return a list of fragments with duplicates removed', () => {
      expect(filteredList.length).toEqual(3);
      expect(filteredList).toContain(mockFragment1);
      expect(filteredList).toContain(mockFragment2);
      expect(filteredList).toContain(mockEmptyFragment);
    });
  });
});
