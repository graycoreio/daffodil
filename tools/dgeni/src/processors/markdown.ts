import {
  Processor,
  Document,
} from 'dgeni';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import marked from 'marked';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);

export class MarkdownCodeProcessor implements Processor {
  name = 'markdown';
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = [];

  constructor() {}

  $process(docs: Document[]) {
    marked.setOptions({
      highlight: (code, lang) => lang ? hljs.highlight(code, { language: lang }).value : code,
    });

    return docs.map((doc) => {
      if(this.docTypes.includes(doc.docType)){
        doc.content = marked.parse(doc.content);
      };
      return doc;
    });
  }
};
