
import { DesignExampleDocumentCreatorProcessor } from './designExampleDocumentCreator';

describe('DesignExampleDocumentCreatorProcessor', () => {

  let processor: DesignExampleDocumentCreatorProcessor;

  beforeEach(() => {
    processor = new DesignExampleDocumentCreatorProcessor();
  });

  it('should work if docs is empty', () => {
    expect(() => processor.$process([])).not.toThrowError();
  });

  it('should set the docGroup based upon the folder in which the example exists', () => {
    const doc = {
      fileInfo: {
        relativePath: 'accordion/examples/src/basic-accordion/basic-accordion.component.html',
      },
    };
    const result = processor.$process([doc]);
    expect(result[0].docGroup).toEqual('basic-accordion');
  });

  it('should not add an additional design doc if it cannot determine a docGroup', () => {
    const doc = {
      fileInfo: {
        relativePath: 'taco',
      },
    };
    const result: Document[] = processor.$process([doc]);
    expect(result.length).toEqual(1);
  });
});
