import { DaffSeoMetaDefinition } from '@daffodil/seo';

import { getAttrSelector } from './get-attr-selector';

describe('@daffodil/seo | getAttrSelector', () => {
  let def: DaffSeoMetaDefinition;
  let result: string;

  beforeEach(() => {
    def = {
      name: 'name',
      content: 'content',
    };

    result = getAttrSelector(def);
  });

  describe('when the def is a name def', () => {
    beforeEach(() => {
      def = {
        name: 'name',
        content: 'content',
      };

      result = getAttrSelector(def);
    });

    it('should return the name selector', () => {
      expect(result).toEqual('name="name"');
    });
  });

  describe('when the def is a property def', () => {
    beforeEach(() => {
      def = {
        property: 'property',
        content: 'content',
      };

      result = getAttrSelector(def);
    });

    it('should return the property selector', () => {
      expect(result).toEqual('property="property"');
    });
  });
});
