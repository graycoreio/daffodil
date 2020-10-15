import { Processor, Document } from 'dgeni';

/**
 * Exchange < for &lt; and > for &gt; so that generic types can be rendered correctly as html.
 */
export class MakeTypesHtmlCompatibleProcessor implements Processor {
	name = 'makeTypesHtmlCompatible';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		docs.map(doc => {
			if(!doc.members) return doc;
			
			doc.members.map(member => {
				member.type = fixGenericTypes(member.type);
			})
		})

		return docs;
	}
}

function fixGenericTypes(type: string): string {
	return type.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
