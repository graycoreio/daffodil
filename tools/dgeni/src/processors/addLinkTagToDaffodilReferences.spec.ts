import "jasmine";
import { AddLinkTagToDaffodilReferencesProcessor } from './addLinkTagToDaffodilReferences';

describe("AddLinkTagToDaffodilReferencesProcessor", () => {
  let processor: AddLinkTagToDaffodilReferencesProcessor = new AddLinkTagToDaffodilReferencesProcessor();
	let stubDaffodilType;
	let stubNonDaffodilType;
	let processedDoc;

	beforeEach(() => {
		stubDaffodilType = 'DaffSomeModelType';
		stubNonDaffodilType = 'SomeOtherModelType';
		const docs = [
			{
				typeParams: `<T extends ${stubDaffodilType}, V extends ${stubNonDaffodilType}>`,
				members: [
					{
						name: 'member1',
						type: stubDaffodilType,
					},
					{
						name: 'member2',
						type: stubNonDaffodilType,
					}
				],
			},
		];

		processedDoc = processor.$process(docs)[0];
	});

  it('should add a {@link } tag around each daffodil model reference', () => {
    expect(processedDoc.typeParams).toEqual(`T extends {@link ${stubDaffodilType}}, V extends ${stubNonDaffodilType}`);
    expect(processedDoc.members[0].type).toEqual(`{@link ${stubDaffodilType}}`);
  });

  it('should not add a {@link } tag around each non daffodil reference', () => {
    expect(processedDoc.typeParams).toEqual(`T extends {@link ${stubDaffodilType}}, V extends ${stubNonDaffodilType}`);
    expect(processedDoc.members[1].type).toEqual(stubNonDaffodilType);
  });

  it('should remove the <> from around the typeParams', () => {
    expect(processedDoc.typeParams).toEqual(`T extends {@link ${stubDaffodilType}}, V extends ${stubNonDaffodilType}`);
  });
});