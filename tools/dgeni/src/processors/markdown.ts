import {
  Processor,
  Document,
} from 'dgeni';
import hljs from 'highlight.js';
import bash from 'highlight.js/lib/languages/bash';
import graphql from 'highlight.js/lib/languages/graphql';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { slugify } from 'markdown-toc';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('graphql', graphql);
hljs.registerLanguage('gql', graphql);

const DOC_KIND_REGEX = {
  [DaffDocKind.GUIDE]: /\/docs\/guides\/(?<path>.+)\.md/,
  [DaffDocKind.EXPLANATION]: /\/docs\/explanations\/(?<path>.+)\.md/,
  [DaffDocKind.PACKAGE]: /\/libs\/(?<path>.+)\.md/,
  [DaffDocKind.API]: /\/libs\/(?<path>.+)\.ts/,
};
const getLinkUrl = (path: string): string => {
  const kind = (<Array<keyof typeof DOC_KIND_REGEX>>Object.keys(DOC_KIND_REGEX)).find((k) => DOC_KIND_REGEX[k].test(path));
  const match = DOC_KIND_REGEX[kind]?.exec(path);

  if (!match) {
    return path;
  }

  switch (kind) {
    case DaffDocKind.GUIDE:
    case DaffDocKind.EXPLANATION:
    case DaffDocKind.API:
      return `/docs/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}/${match.groups.path}`;

    case DaffDocKind.PACKAGE:
      return `/docs/packages/${match.groups.path}`.replaceAll(/\/(?:readme|src|guides)/gi, '');

    default:
      return path;
  }
};

// marked.use(markedMermaid);
marked.use(
  markedHighlight({
    // langPrefix: 'hljs language-',
    highlight: (code, lang, info) => {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  }),
);

marked.use({
  walkTokens: (token) => {
    if (token.type === 'link') {
      token.href = getLinkUrl(token.href);
    }
  },
  renderer: {
    heading: (text: string, level: number, raw: string) =>
      `<h${level} id="${slugify(raw)}">${text}</h${level}>`,
  },
});

export class MarkdownCodeProcessor implements Processor {
  name = 'markdown';
  $runAfter = ['paths-computed'];
  $runBefore = ['rendering-docs'];
  docTypes = [];

  constructor() {}

  $process(docs: Document[]) {
    return docs.map((doc) => {
      if(this.docTypes.includes(doc.docType)){
        doc.content = marked.parse(doc.content);
      };
      return doc;
    });
  }
};
