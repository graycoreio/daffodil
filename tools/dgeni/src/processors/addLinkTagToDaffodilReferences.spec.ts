import "jasmine";
import { AddLinkTagToDaffodilReferencesProcessor } from './addLinkTagToDaffodilReferences';

describe("AddLinkTagToDaffodilReferencesProcessor", () => {
  let processor: AddLinkTagToDaffodilReferencesProcessor = new AddLinkTagToDaffodilReferencesProcessor();
	let stubDaffodilDefinedType;
	let stubNonDaffodilDefinedType;
	let processedDoc;

	beforeEach(() => {
		stubDaffodilDefinedType = 'DaffSomeModelType';
		stubNonDaffodilDefinedType = 'boolean';
		const docs = [
			{
				name: 'doc1',
				typeParams: `<T extends ${stubDaffodilDefinedType}, V extends ${stubNonDaffodilDefinedType}>`,
				members: [
					{
						name: 'member1',
						type: stubDaffodilDefinedType,
					},
					{
						name: 'member2',
						type: stubNonDaffodilDefinedType,
					}
				],
			},
			{
				name: stubDaffodilDefinedType
			},
		];

		processedDoc = processor.$process(docs)[0];
	});

  it('should add a {@link } tag around each model reference in the list of docs', () => {
    expect(processedDoc.typeParams).toEqual(`T extends {@link ${stubDaffodilDefinedType}}, V extends ${stubNonDaffodilDefinedType}`);
    expect(processedDoc.members[0].type).toEqual(`{@link ${stubDaffodilDefinedType}}`);
  });

  it('should not add a {@link } tag around each reference not in the list of docs', () => {
    expect(processedDoc.typeParams).toEqual(`T extends {@link ${stubDaffodilDefinedType}}, V extends ${stubNonDaffodilDefinedType}`);
    expect(processedDoc.members[1].type).toEqual(stubNonDaffodilDefinedType);
  });

  it('should remove the <> from around the typeParams', () => {
    expect(processedDoc.typeParams).toEqual(`T extends {@link ${stubDaffodilDefinedType}}, V extends ${stubNonDaffodilDefinedType}`);
  });
});