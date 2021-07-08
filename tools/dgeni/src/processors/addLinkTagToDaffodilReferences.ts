import { Processor, Document } from 'dgeni';

/**
 * Adds a link tag ({@link }) around daffodil models, classes, etc.
 */
export class AddLinkTagToDaffodilReferencesProcessor implements Processor {
	name = 'addLinkTagToDaffodilReferences';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		let docDictionary = docs.reduce((acc, doc) => ({
			...acc,
			[doc.name]: true
		}), {});

		
		return docs.map(doc => {
			return this.addLinksToMemberTypes(
				this.addLinksToTypeParams(doc, docDictionary), 
				docDictionary
			);
		});
	}

	addLinksToTypeParams(doc, docDictionary) {
		const typeParams = doc.typeParams?.match(/(\w*)/g).reduce((acc, match) => ({
			...acc,
			[match]: docDictionary[match] ? `{@link ${match}}` : match
		}), {});
		doc.typeParams = doc.typeParams?.slice(1, doc.typeParams.length-1).replace(/(\w*)/g, (match) => typeParams[match]);
		return doc;
	}

	addLinksToMemberTypes(doc, docDictionary) {
		doc.members?.map(member => {
			const typeNames = member.type.match(/(\w*)/g).reduce((acc, match) => ({
				...acc,
				[match]: docDictionary[match] ? `{@link ${match}}` : match
			}), {});
			member.type = member.type.replace(/(\w*)/g, (match) => typeNames[match]);

			return member;
		})

		return doc;
	}
}
