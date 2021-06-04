import { Processor, Document } from 'dgeni';

/**
 * Inherit docs content from parent interfaces.
 * 
 * Usage:
 * Single Interface: @inheritdoc SomeInterface
 * Multiple Interfaces: @inheritdoc SomeInterface, SomeOtherInterface
 */
export class AddInheritedDocsContentProcessor implements Processor {
	name = 'addInheritedDocsContent';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		return docs.map(doc => {
			const inheritdocTag = doc.tags.tags.filter(tag => tag.tagName === 'inheritdoc');
			if(!doc.members || !inheritdocTag.length) return doc;
			//get the names of the interfaces which should be inherited.
			const inheritedInterface = inheritdocTag[0].description.split(',').map(e => e.trim());

			//find all interfaces from which the doc should inherit.
			docs.filter(doc => inheritedInterface.findIndex(i => i === doc.name) > -1)
				.map(matchedDoc => {
					matchedDoc.members.map(member => {
						const matchedMember = doc.members.find(m => m.name === member.name);
						if(matchedMember) matchedMember.description = member.description;
					})
				})
			return doc;
		});
	}
}
