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


export class DesignExampleHighlightCodeProcessor implements Processor {
  name = 'highlightCode';
  $runAfter = ['examples-files'];
  $runBefore = ['convertToJson'];
  docTypes = [];

  constructor() {}

  $process(docs: Document[]) {
    docs.map(
      d => d.files.map(
        (file) => file.content =
          hljs.highlight(file.language, file.content).value,
      ),
    );
  }
};
