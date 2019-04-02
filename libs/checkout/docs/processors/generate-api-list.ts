import {Processor, Document} from 'dgeni';

/**
 * This processor is here temporarily to get a better look at the docs objects (which are typed as "any") while we organize documentation.
 */
export class GenerateApiListProcessor implements Processor {
  name = 'generate-api-list';
  $runBefore = ['docs-processed'];

  $process(docs: Document) {
  }
}
