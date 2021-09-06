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


export class ClassStructureProcessor implements Processor {
  name = 'classStructure';
  $runBefore = ['renderDocsProcessor'];
  docTypes = ['class', 'component'];

  constructor() {}

  $process(docs: Document[]) {
    docs.map(
      d => {
        d.classStructure = `class ${d.name} ${d.typeParams} {}`;
        return d;
      },
    );
  }
};
