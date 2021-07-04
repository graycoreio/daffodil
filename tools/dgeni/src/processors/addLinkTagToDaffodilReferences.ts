import { Processor, Document } from 'dgeni';

/**
 * Adds a link tag ({@link }) around daffodil models, classes, etc.
 */
export class AddLinkTagToDaffodilReferencesProcessor implements Processor {
	name = 'addLinkTagToDaffodilReferences';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		return docs.map(doc => {
			doc.typeParams = doc.typeParams?.slice(1, doc.typeParams.length-1).replace(/(Daff([A-Z]|[a-z])*)/g, '{@link $1}');

			doc.members?.map(member => {
				member.type = member.type.replace(/(Daff([A-Z]|[a-z])*)/, '{@link $1}');
				return member;
			})

			return doc;
		});
	}
}
