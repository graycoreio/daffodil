import toc from 'markdown-toc';

import { extractTitle } from './guide-file.reader';

describe('guideFileReader', () => {

  describe('toc package', () => {

    it('should create an expected table of contents', () => {
      const doc = {
        id: 'id',
        content: `# title1\nSome content 1\n\n## subtitle1\nSome content 1.1\n\n### sub-subtitle1\nSome content 1.1.1\n\n### sub-subtitle2\nSome content 1.1.2\n\n## subtitle2\nSome content 1.2`,
      };

      expect(toc(doc.content)).toEqual(jasmine.objectContaining({
        json: [
          {
            content: 'title1',
            lvl: 1,
            slug: 'title1',
            i: 0,
            seen: 0,
          },
          {
            content: 'subtitle1',
            lvl: 2,
            slug: 'subtitle1',
            i: 1,
            seen: 0,
          },
          {
            content: 'sub-subtitle1',
            lvl: 3,
            slug: 'sub-subtitle1',
            i: 2,
            seen: 0,
          },
          {
            content: 'sub-subtitle2',
            lvl: 3,
            slug: 'sub-subtitle2',
            i: 3,
            seen: 0,
          },
          {
            content: 'subtitle2',
            lvl: 2,
            slug: 'subtitle2',
            i: 4,
            seen: 0,
          },
        ],
      }));
    });
  });

  describe('extractTitle', () => {

    it('should return the title text if there is a title in the document', () => {
      const title = 'some title';
      const doc = {
        id: 'id',
        content: `#${title}
					Some content of the document.
				`,
      };
      expect(extractTitle(doc)).toEqual(title);
    });

    it('should throw an error if there is no title in the document', () => {
      const doc = {
        id: 'id',
        content: `Some content of the document.`,
      };
      expect(() => {
        extractTitle(doc);
      }).toThrowError('Guide doc ' + doc.id + ' is missing a title');
    });
  });
});
