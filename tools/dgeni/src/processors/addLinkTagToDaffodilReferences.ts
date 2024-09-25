import {
  Processor,
  Document,
} from 'dgeni';

/**
 * Adds a link tag ({@link }) around daffodil models, classes, etc.
 */
export class AddLinkTagToDaffodilReferencesProcessor implements Processor {
  name = 'addLinkTagToDaffodilReferences';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];

  $process(docs: Document[]): Document[] {
    const docDictionary = docs.reduce((acc, doc) => ({
      ...acc,
      [doc.name]: true,
    }), {});

    return docs.map(doc => this.addLinksToDoc(doc, docDictionary));
  }

  addLinksToDoc(doc, docDictionary): Document {
    doc.typeParams = this.addLinks(doc.typeParams?.slice(1, doc.typeParams.length - 1), docDictionary);
    if (doc.typeDefinition) {
      doc.typeDefinition = this.addLinks(doc.typeDefinition, docDictionary);
    }
    doc.members = doc.members?.map(member => ({
      ...member,
      type: this.addLinks(member.type, docDictionary),
    }));

    return doc;
  }

  addLinks(str: string, docDictionary): string {
    return str?.replace(/(\w*)/g, (match) => docDictionary[match] ? `{@link ${match}}` : match);
  }
}
