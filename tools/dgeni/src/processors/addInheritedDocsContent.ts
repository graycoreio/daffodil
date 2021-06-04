import { Processor, Document } from 'dgeni';

/**
 * Inherit docs content from parent interfaces.
 */
export class AddInheritedDocsContentProcessor implements Processor {
	name = 'filterOutPrivateProperties';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		return docs.map(doc => {
			if(!doc.members || !doc.tags.tags.filter(tag => tag.tagName === 'inheritdoc').length) return doc;

			//get all interfaces that the doc implements.
			doc.moduleDoc.exports.filter(e => e.docType === 'interface')
				.map(i => {
					i.members.map(member => {
						//copy over the description from the interface to the doc.
						const memberMatch = doc.members.find(m => m.name === member.name);
						if(memberMatch) memberMatch.description = member.description;
					})
				})
			return doc;
		});
	}
}
