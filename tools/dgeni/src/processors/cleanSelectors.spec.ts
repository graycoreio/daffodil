import { CleanSelectorsProcessor } from './cleanSelectors';

describe('CleanSelectorsProcessor', () => {
  const processor: CleanSelectorsProcessor = new CleanSelectorsProcessor();

  describe('when the document has a multiline selector', () => {

    it('should convert that selector into an array of selector options', () => {
      const docs = [
        { decorators: [
          { argumentInfo: [
            { selector: `selector1[sub],    \n[selector2]` },
          ]},
        ]},
      ];
      const expectedSelectors = ['selector1[sub]', '[selector2]'];
      expect(processor.$process(docs)[0].selectors).toEqual(expectedSelectors);
    });
  });

  describe('when the document has a single line selector', () => {

    it('should convert that selector into an array of selector options', () => {
      const docs = [
        { decorators: [
          { argumentInfo: [
            { selector: 'selector[sub]' },
          ]},
        ]},
      ];
      const expectedSelectors = ['selector[sub]'];
      expect(processor.$process(docs)[0].selectors).toEqual(expectedSelectors);
    });
  });
});
