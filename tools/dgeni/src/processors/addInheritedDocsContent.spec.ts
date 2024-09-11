import { AddInheritedDocsContentProcessor } from './addInheritedDocsContent';

describe('AddInheritedDocsContentProcessor', () => {
  const processor: AddInheritedDocsContentProcessor = new AddInheritedDocsContentProcessor();
  let stubInterfaceMemberDescription;

  beforeEach(() => {
    stubInterfaceMemberDescription = 'some member description';
  });

  it('should copy member descriptions from inherited docs for class docs', () => {
    const docs = [
      {
        docType: 'class',
        tags: {
          tags: [{
            tagName: 'inheritdoc',
          }],
        },
        members: [{
          name: 'member1',
          description: null,
        }],
        implementsClauses: [{
          doc: {
            members: [
              {
                name: 'member1',
                description: stubInterfaceMemberDescription,
              },
            ],
          },
        }],
      },
    ];

    expect(processor.$process(docs)[0].members[0].description).toEqual(stubInterfaceMemberDescription);
  });

  it('should not copy member descriptions from implemented interfaces without the \'inheritdoc\' tag', () => {
    const docs = [
      {
        tags: { tags: []},
        members: [{
          name: 'member1',
          description: null,
        }],
        implementsClauses: [{
          doc: {
            members: [
              {
                name: 'member1',
                description: stubInterfaceMemberDescription,
              },
            ],
          },
        }],
      },
    ];

    expect(processor.$process(docs)[0].members[0].description).toEqual(null);
  });
});
