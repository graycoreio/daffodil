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
					docType: 'interface',
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

	//this is needed, because sometimes dgeni thinks an interface is implemented by a class when it isn't.
	//E.g. DaffCategoryMemoizedSelectors is listed as an interface for DaffCategoryFacade by dgeni.
  it("should not throw an error if the member in the interface does not exist in the original class", () => {
		const copiedDescription = 'some member description';
    let docs = [{
			tags: {
				tags: [{
					tagName: 'inheritdoc',
				}]
			},
			moduleDoc: {
				exports: [{
					docType: 'interface',
					members: [
						{
							name: 'member1',
							description: copiedDescription
						},
						{
							name: 'non-matching member name',
							description: 'some description'
						}
					]
				}]
			},
			members: [{
				name: 'member1',
				description: null,
			}]
		}];

    expect(processor.$process(docs)[0].members[0].description).toEqual(copiedDescription);
  });

  it("should not copy member descriptions from implements interfaces without the 'inheritdoc' tag", () => {
		const copiedDescription = 'some member description';
    let docs = [{
			tags: {
				tags: []
			},
			moduleDoc: {
				exports: [{
					docType: 'interface',
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