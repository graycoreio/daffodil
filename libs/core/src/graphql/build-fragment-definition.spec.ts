import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

import { daffBuildFragmentDefinition } from './build-fragment-definition';

describe('Core | GraphQL | daffBuildFragmentDefinition', () => {
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

  describe('when there are some document definitions passed', () => {
    let builtString;

    beforeEach(() => {
      builtString = daffBuildFragmentDefinition(mockFragment1, mockFragment2, mockEmptyFragment);
    });

    it('should return a string of the document definitions separated by newlines', () => {
      expect(builtString).toEqual(`${mockFragment1.loc.source.body}\n${mockFragment2.loc.source.body}\n${mockEmptyFragment.loc.source.body}\n`);
    });
  });
});
