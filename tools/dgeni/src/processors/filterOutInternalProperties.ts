import { Processor, Document } from 'dgeni';

/**
 * Exchange < for &lt; and > for &gt; so that generic types can be rendered correctly as html.
 */
export class FilterOutInternalPropertiesProcessor implements Processor {
	name = 'filterOutInternalProperties';
	$runAfter = ['docs-processed'];
	$runBefore = ['rendering-docs'];

	$process(docs: Document[]): Document[] {
		return docs.map(doc => {
			if(!doc.members) return doc;

			return doc.members ? {
				...doc,
				members: filterOutInternalProperties(doc.members)
			} : doc;
		});
	}
}

function filterOutInternalProperties(members): any {
	return members.filter(member => 
		member.name[0] !== '_' && 
		member.name !== 'ngOnChanges' &&
		member.name !== 'ngOnInit' &&
		member.name !== 'ngDoCheck' &&
		member.name !== 'ngAfterContentInit' &&
		member.name !== 'ngAfterContentChecked' &&
		member.name !== 'ngAfterViewInit' &&
		member.name !== 'ngAfterViewChecked' &&
		member.name !== 'ngOnDestroy'
	);
}
