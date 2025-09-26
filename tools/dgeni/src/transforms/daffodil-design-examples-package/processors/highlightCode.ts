import {
  Processor,
  Document,
} from 'dgeni';
import { createHighlighter } from 'shiki';

let highlighter: any = null;

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['light-plus'],
      langs: []
    });

    // Load languages lazily
    await Promise.all([
      highlighter.loadLanguage('typescript'),
      highlighter.loadLanguage('xml'),
      highlighter.loadLanguage('scss')
    ]);
  }
  return highlighter;
}


export class DesignExampleHighlightCodeProcessor implements Processor {
  name = 'highlightCode';
  $runAfter = ['examples-files'];
  $runBefore = ['convertToJson'];
  docTypes = [];

  constructor() {}

  async $process(docs: Document[]): Promise<Document[]> {
    const shiki = await getHighlighter();
    docs.map(
      d => d.files.map(
        (file) => {
          try {
            file.content = shiki.codeToHtml(file.content, {
              lang: file.language || 'text',
              theme: 'light-plus'
            });
          } catch (error) {
            file.content = shiki.codeToHtml(file.content, {
              lang: 'text',
              theme: 'light-plus'
            });
          }
        },
      ),
    );
    return docs;
  }
};
