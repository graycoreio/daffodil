import { Processor, Document } from 'dgeni';

var toc = require('markdown-toc');

export class TableOfContentsProcessor implements Processor {
  name = 'tableOfContents';
  $runAfter = ['renderDocsProcessor'];
	$runBefore = ['convertToJson'];
  docTypes = ['guides', 'component', 'directive', 'pipe', 'package', 'function', 'enum'];

  constructor() {}

  $process(docs: Document[]) {
    docs.map(
      d => {
        d.tableOfContents = toc(d.renderedContent);
        return d;
      },
    );
  }
};