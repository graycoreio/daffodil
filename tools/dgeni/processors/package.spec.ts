import "jasmine";
import { PackagesProcessor } from './packages';

describe("PackagesProcessor", () => {
    let processor: PackagesProcessor = new PackagesProcessor();

    it("should change the docType of entrypoint modules from `module` to `package`", () => {
        let docs = [{docType: 'module'}];
        let processedDocs = {docType: 'package'};
        expect(processor.$process(docs)).toEqual([
            jasmine.objectContaining(processedDocs)
        ]);
    });

    it('should change the name of entrypoint modules from `module/src` to `@daffodil/module', () => {
        let docs = [{docType: 'module', id: 'driver/src'}];
        let processedDocs = {docType: 'package', name: '@daffodil/driver'};
        expect(processor.$process(docs)).toEqual([
            jasmine.objectContaining(processedDocs)
        ]);
    })
});