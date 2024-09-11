import {
  Processor,
  Document,
} from 'dgeni';

interface DocumentWithAncestors extends Document {
  ancestors: Array<Document>;
}

const guardDocumentWithAncestors = (doc: Document | DocumentWithAncestors): doc is DocumentWithAncestors => {
  if (!('ancestors' in doc)) {
    doc.ancestors = [];
  }

  return true;
};

const getAncestors = (doc: Document): Array<Document> =>
  doc.extendsClauses.length > 0
    ? doc.extendsClauses.flatMap((parent) => parent.doc ? [parent.doc, ...getAncestors(parent.doc)] : [])
    : [];

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

      doc.content = doc.content.replaceAll('@inheritdoc', '');

      switch (doc.docType) {
        case 'class':
          doc.implementsClauses.map(i => {
            if (!i.doc) {
              return i;
            }
            i.doc.members.map(member => {
              const matchedMember = doc.members.find(m => m.name === member.name);
              if (matchedMember) {
                matchedMember.description = matchedMember.description
                  ? `${member.description} ${matchedMember.description}`
                  : member.description;
              }
            });
          });
          break;

        case 'type':
        case 'interface':
          if (guardDocumentWithAncestors(doc)) {
            doc.extendsClauses.map(i => {
              if (!i.doc) {
                return i;
              }
              i.doc.members.map(member => {
                const matchedMember = doc.members.find(m => m.name === member.name);
                if (matchedMember) {
                  matchedMember.description = matchedMember.description
                    ? `${member.description} ${matchedMember.description}`
                    : member.description;
                } else {
                  if (i.doc) {
                    doc.ancestors = getAncestors(doc);
                  }
                }
              });
            });
          }
          break;

        default:
          break;
      }

	    return doc;
	  });
  }
}
