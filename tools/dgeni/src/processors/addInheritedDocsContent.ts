import {
  Processor,
  Document,
} from 'dgeni';

/**
 * Inherit docs content from parent interfaces.
 *
 * Usage: @inheritdoc
 */
export class AddInheritedDocsContentProcessor implements Processor {
  name = 'addInheritedDocsContent';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];

  $process(docs: Document[]): Document[] {
    return docs.map(doc => {
      if(!doc.members || !doc.tags.tags.filter(tag => tag.tagName === 'inheritdoc').length) {
        return doc;
      }

      doc.implementsClauses.map(i => {
        if(!i.doc) {
          return i;
        }
        i.doc.members.map(member => {
          const matchedMember = doc.members.find(m => m.name === member.name);
          if(matchedMember) {
            matchedMember.description = matchedMember.description ?
              `${member.description} ${matchedMember.description}`:
              member.description;
          }
        });
      });

      return doc;
    });
  }
}
