import { PackagesProcessor } from './packages';

describe('PackagesProcessor', () => {
  const processor: PackagesProcessor = new PackagesProcessor();

  it('should change the docType of entrypoint modules from `module` to `package`', () => {
    const docs = [{ docType: 'module', id: 'driver/src' }];
    const processedDocs = { docType: 'package', name : '@daffodil/driver' };
    expect(processor.$process(docs)).toEqual([
      jasmine.objectContaining(processedDocs),
    ]);
  });

  it('should change the name of entrypoint modules from `module/src` to `@daffodil/module', () => {
    const docs = [{ docType: 'module', id: 'driver/src' }];
    const processedDocs = { docType: 'package', name: '@daffodil/driver' };
    expect(processor.$process(docs)).toEqual([
      jasmine.objectContaining(processedDocs),
    ]);
  });

  it('should ensure the id and name trim absolute paths', () => {
    const docs = [{ docType: 'module', id: 'Users/root/daffodil/libs/driver/src' }];
    const processedDocs = { docType: 'package', id: 'driver', name: '@daffodil/driver' };
    expect(processor.$process(docs)).toEqual([
      jasmine.objectContaining(processedDocs),
    ]);
  });
});
