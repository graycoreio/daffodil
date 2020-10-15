import { Processor, Document } from 'dgeni';

/**
 * Filter out properties that are meant to be only internal. These include fields prefixed with an underscore and
 * the angular lifecycle hooks, like "ngOnInit".
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
