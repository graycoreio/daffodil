import { Document, Processor } from "dgeni";

var INLINE_LINK_REGEX = /{@link.[^}]*}/g;
const API_DOCS_PATH = "docs/api/";

/**
 * Process inline link tags (of the form {@link product/DaffProductFacade#product$ the product$ field}), and replace them with HTML anchors.
 */
export class CreateAnchorTagsProcessor implements Processor {
	name = 'createAnchorTags';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		docs.map(doc => {
			if(!doc.members) return doc;
			
			doc.members.map(member => {
				member.description = member.description.replace(INLINE_LINK_REGEX, buildAnchorTag)

				return member;
			})
		})

		return docs;
	}
}

function buildAnchorTag(linkString): string {
	let splitValues = linkString.split(' ');
	//the title is always all of the values beyond the second part of the split values.
	let title = splitValues.slice(2).join(' ');
	//remove the } from the end of the title string.
	title = title.substring(0, title.length - 1);
	//build and return the anchor tag.
	return '<a href=\'' + API_DOCS_PATH + splitValues[1] + '\'>' + title + '</a>';
}