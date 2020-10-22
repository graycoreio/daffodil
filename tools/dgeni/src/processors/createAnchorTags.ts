import { Document, Processor } from "dgeni";

const INLINE_LINK_REGEX = /{@link.[^}]*}/g;
const INLINE_LINK_PATH_REGEX = /(?<={@link )([\s\S]*?)(?= )/;
const INLINE_LINK_TITLE_REGEX = /(?<={@link[\s\S].* )(.*)(?=})/;
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

function buildAnchorTag(linkString: string): string {
	const path = linkString.match(INLINE_LINK_PATH_REGEX)[0];
	const title = linkString.match(INLINE_LINK_TITLE_REGEX)[0];
	return `<a href='${API_DOCS_PATH}${path}'>${title}</a>`;
}