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
import { escape } from 'node:querystring';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('graphql', graphql);
hljs.registerLanguage('gql', graphql);

enum DocKind {
  GUIDE = 'GUIDE',
  EXPLANATION = 'EXPLANATION',
  PACKAGE = 'PACKAGE',
  API = 'API',
}
const DOC_KIND_REGEX = {
  [DocKind.GUIDE]: /\/docs\/guides\/(?<path>.+)\.md/,
  [DocKind.EXPLANATION]: /\/docs\/explanations\/(?<path>.+)\.md/,
  [DocKind.PACKAGE]: /\/libs\/(?<path>.+)\.md/,
  [DocKind.API]: /\/libs\/(?<path>.+)\.ts/,
};
const getLinkUrl = (path: string): string => {
  const kind = (<Array<keyof typeof DOC_KIND_REGEX>>Object.keys(DOC_KIND_REGEX)).find((k) => DOC_KIND_REGEX[k].test(path));
  const match = DOC_KIND_REGEX[kind]?.exec(path);

  if (!match) {
    return path;
  }

  switch (kind) {
    case DocKind.GUIDE:
      return `/docs/guides/${match.groups.path}`;

    case DocKind.EXPLANATION:
      return `/docs/explanations/${match.groups.path}`;

    case DocKind.PACKAGE:
      return `/docs/packages/${match.groups.path}`.replaceAll(/\/(?:readme|src|guides)/gi, '');

    case DocKind.API:
      return `/docs/api/${match.groups.path}`;

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
      `<h${level} id="${escape(slugify(raw))}">${text}</h${level}>`,
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
