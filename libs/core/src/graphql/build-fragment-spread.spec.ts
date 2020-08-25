import { daffBuildFragmentSpread } from './build-fragment-spread';

describe('Core | GraphQL | daffBuildFragmentSpread', () => {
  let mockNames: string[];

  beforeEach(() => {
    mockNames = [
      'name1',
      'name2'
    ]
  });

  describe('when there are names passed', () => {
    let spread;

    beforeEach(() => {
      spread = daffBuildFragmentSpread(mockNames);
    });

    it('should return a string of the names separated by newlines', () => {
      expect(spread).toEqual(`...${mockNames[0]}\n...${mockNames[1]}\n`);
    });
  });

  describe('when there are no names passed', () => {
    it('should return an empty string', () => {
      expect(daffBuildFragmentSpread([])).toEqual('');
    });
  });
});
