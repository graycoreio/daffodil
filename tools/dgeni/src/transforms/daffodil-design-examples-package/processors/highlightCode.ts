import { Processor, Document } from 'dgeni';

import * as hljs from 'highlight.js';
import * as typescript from 'highlight.js/lib/languages/typescript';
import * as scss from 'highlight.js/lib/languages/scss';
import * as xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);


export class DesignExampleHighlightCodeProcessor implements Processor {
  name = 'highlightCode';
  $runAfter = ['examples-files']
  $runBefore = ['convertToJson'];
  docTypes = [];

  constructor() {}

  $process(docs: Document[]) {
    docs.map(
      d => d.files.map(
        (file) => file.content = 
          hljs.highlight(file.language, file.content).value
      )
    );
  }
};