import { Processor, Document } from 'dgeni';

/**
 * Filter out properties that are marked as @docs-private
 */
export class FilterOutPrivatePropertiesProcessor implements Processor {
	name = 'filterOutPrivateProperties';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		return docs.map(doc => {
			if(!doc.members) return doc;

			return doc.members ? {
				...doc,
				members: filterOutPrivateProperties(doc.members)
			} : doc;
		});
	}
}

function filterOutPrivateProperties(members): any {
	return members.filter(member => !member.content.includes('@docs-private'));
}
