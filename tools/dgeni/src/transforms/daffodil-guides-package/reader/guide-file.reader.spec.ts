import { extractTitle } from './guide-file.reader';

describe('guideFileReader', () => {
	
	describe('extractTitle', () => {

		it('should return the title text if there is a title in the document', () => {
			const title = 'some title';
			const doc = {
				id: 'id',
				content: `#${title}
					Some content of the document.
				`
			}
			expect(extractTitle(doc)).toEqual(title);
		});

		it('should throw an error if there is no title in the document', () => {
			const doc = {
				id: 'id',
				content: `Some content of the document.`
			}
			expect(() => {
				extractTitle(doc)
			}).toThrow('Guide doc ' + doc.id + ' is missing a title')
		});
	});
});