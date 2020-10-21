import "jasmine";
import { CreateAnchorTagsProcessor } from './createAnchorTags';

describe("CreateAnchorTagsProcessor", () => {
  let processor: CreateAnchorTagsProcessor = new CreateAnchorTagsProcessor();
    
	it("should convert a member link into the expected anchor tag", () => {
		let docs = [
			{members: [
				{
					description: 'This is some text with a {@link this/is/a#path this is a title}.'
				}
			]}
		];

		const expectedDescription = "This is some text with a <a href='docs/api/this/is/a#path'>this is a title</a>."
		expect(processor.$process(docs)[0].members[0].description).toEqual(expectedDescription);
	});

	it('should convert multiple member links into the expected anchor tags', () => {
		let docs = [
			{members: [
				{
					description: 'This is some text with a {@link this/is/a#path this is a title} plus another {@link this/is/another#path thisIsAnotherTitle} then end.'
				}
			]}
		];

		const expectedDescription = "This is some text with a <a href='docs/api/this/is/a#path'>this is a title</a> plus another <a href='docs/api/this/is/another#path'>thisIsAnotherTitle</a> then end."
		expect(processor.$process(docs)[0].members[0].description).toEqual(expectedDescription);
	});
});
