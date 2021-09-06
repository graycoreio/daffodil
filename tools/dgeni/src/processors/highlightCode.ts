import {
  Processor,
  Document,
} from 'dgeni';
import hljs from 'highlight.js';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);


export class HighlightCodeProcessor implements Processor {
  name = 'highlightCode';
  $runBefore = ['convertToJson'];
  $runAfter = ['renderDocsProcessor'];
  docTypes = [];

  constructor() {}

  $process(docs: Document[]) {
    docs.map(
      d => {
        const parser = new htmlparser2.Parser().write(d.renderedContent);
        parser.end();
        d.renderedContent = ;
        return d;
      },
    );
  }
};
