import "jasmine";
import { AddInheritedDocsContentProcessor } from './addInheritedDocsContent';

describe("AddInheritedDocsContentProcessor", () => {
  let processor: AddInheritedDocsContentProcessor = new AddInheritedDocsContentProcessor();

  it("should copy member descriptions from inherited docs", () => {
		const copiedDescription = 'some member description';
    let docs = [{
			tags: {
				tags: [{
					tagName: 'inheritdoc',
				}]
			},
			moduleDoc: {
				exports: [{
					symbol: {
						escapedName: 'SomeInterface',
					},
					members: [{
						name: 'member1',
						description: copiedDescription
					}]
				}]
			},
			members: [{
				name: 'member1',
				description: null,
			}]
		}];

    expect(processor.$process(docs)[0].members[0].description).toEqual(copiedDescription);
  });

  it("should copy member descriptions from inherited docs without the 'inheritdoc' tag", () => {
		const copiedDescription = 'some member description';
    let docs = [{
			tags: {
				tags: []
			},
			moduleDoc: {
				exports: [{
					symbol: {
						escapedName: 'SomeInterface',
					},
					members: [{
						name: 'member1',
						description: copiedDescription
					}]
				}]
			},
			members: [{
				name: 'member1',
				description: null,
			}]
		}];

    expect(processor.$process(docs)[0].members[0].description).toEqual(null);
  });
});