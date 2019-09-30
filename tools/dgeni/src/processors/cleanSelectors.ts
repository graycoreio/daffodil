import { Processor, Document } from 'dgeni';

/**
 * Convert selectors with ticks, commas, newlines, spaces, and quotes to a clean array of selector options.
 */
export class CleanSelectorsProcessor implements Processor {
	name = 'cleanSelectors';
	$runAfter = ['filterContainedDocs'];
	$runBefore = ['docs-processed'];

	$process(docs: Document[]): Document[] {
		let removeTicks = new RegExp('[^`]*[^`]');
		let removeQuotes = new RegExp("[^']*[^']");

		docs
			.filter(doc => this.hasSelector(doc))
			.forEach(doc => {
				doc.selectors = doc.decorators[0].argumentInfo[0].selector
					.match(removeTicks)[0]
					.match(removeQuotes)[0]
					.split(',')
					.map(selector => selector.trim());
			});

		return docs;
	}

	private hasSelector(doc) {
		return (
			doc.decorators &&
			doc.decorators[0].argumentInfo.length &&
			doc.decorators[0].argumentInfo[0].selector
		);
	}
}
