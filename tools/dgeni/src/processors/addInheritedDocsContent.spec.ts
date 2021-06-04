import "jasmine";
import { AddInheritedDocsContentProcessor } from './addInheritedDocsContent';

describe("AddInheritedDocsContentProcessor", () => {
  let processor: AddInheritedDocsContentProcessor = new AddInheritedDocsContentProcessor();
	let stubInterfaceMemberDescription;

	beforeEach(() => {
		stubInterfaceMemberDescription = 'some member description';
	});

  it("should copy member descriptions from inherited docs", () => {
    let docs = [
			{
				tags: {
					tags: [{
						tagName: 'inheritdoc',
						description: 'SomeInterfaceName'
					}]
				},
				members: [{
					name: 'member1',
					description: null,
				}]
			},
			{
				tags: { tags: [] },
				name: 'SomeInterfaceName',
				members: [{
					name: 'member1',
					description: stubInterfaceMemberDescription
				}]
			},
		];

    expect(processor.$process(docs)[0].members[0].description).toEqual(stubInterfaceMemberDescription);
  });

  it("should not copy member descriptions from implemented interfaces without the 'inheritdoc' tag", () => {
    let docs = [
			{
				tags: { tags: [] },
				members: [{
					name: 'member1',
					description: null,
				}]
			},
			{
				tags: { tags: [] },
				name: 'SomeInterfaceName',
				members: [{
					name: 'member1',
					description: stubInterfaceMemberDescription
				}]
			},
		];

    expect(processor.$process(docs)[0].members[0].description).toEqual(null);
  });

	it('should inherit doc descriptions from multiple tagged interfaces', () => {
		const stubSecondInterfaceDescription = 'some other description';
		let docs = [
			{
				tags: {
					tags: [{
						tagName: 'inheritdoc',
						description: 'SomeInterfaceName, SomeOtherInterfaceName'
					}]
				},
				members: [
					{
						name: 'member1',
						description: null,
					},
					{
						name: 'member2',
						description: null
					}
				]
			},
			{
				tags: { tags: [] },
				name: 'SomeInterfaceName',
				members: [{
					name: 'member1',
					description: stubInterfaceMemberDescription
				}]
			},
			{
				tags: { tags: [] },
				name: 'SomeOtherInterfaceName',
				members: [{
					name: 'member2',
					description: stubSecondInterfaceDescription
				}]
			},
		];

		expect(processor.$process(docs)[0].members[0].description).toEqual(stubInterfaceMemberDescription);
    expect(processor.$process(docs)[0].members[1].description).toEqual(stubSecondInterfaceDescription);
	});
});