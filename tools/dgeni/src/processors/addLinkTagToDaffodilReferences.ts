import { Processor, Document } from 'dgeni';

/**
 * Adds a link tag ({@link }) around daffodil models, classes, etc.
 */
export class AddLinkTagToDaffodilReferencesProcessor implements Processor {
	name = 'addLinkTagToDaffodilReferences';
	$runAfter = ['classStructure'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		const docDictionary = docs.reduce((acc, doc) => ({
			...acc,
			[doc.name]: true
		}), {});

		return docs.map(doc => this.addLinksToDoc(doc, docDictionary));
	}

	addLinksToDoc(doc, docDictionary): Document {
		return {
			...doc,
			classStructure: this.addLinks(doc.classStructure, docDictionary),
			members: doc.members?.map(member => ({
				...member,
				type: this.addLinks(member.type, docDictionary),
			})),
		};
	}

	addLinks(str: string, docDictionary): string {
		return str?.replace(/(\w*)/g, (match) => docDictionary[match] ? `{@link ${match} ${match}}` : match);
	}
}
