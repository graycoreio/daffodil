import { Document } from 'dgeni';

import { FilterableProcessor } from '../utils/filterable-processor.type';

export const COLLECT_ROUTABLE_PATHS_PROCESSOR_NAME = 'collectRoutablePaths';

/**
 * Stores a list doc paths and generates a list of routes.
 */
export class CollectRoutablePathsProcessor implements FilterableProcessor {
  private static paths: Array<string> = [];

  private get routes(): string {
    return CollectRoutablePathsProcessor.paths.reduce((acc, path) => `${acc}\n${path}`, '');
  }

  readonly name = COLLECT_ROUTABLE_PATHS_PROCESSOR_NAME;
  readonly $runAfter = ['docs-rendered'];
  readonly $runBefore = ['writing-files'];
  readonly docTypes = [];

  /**
   * If the processor should add a doc with the list of routes to the docs.
   */
  generate = false;

  $process(docs: Document[]): Document[] {
    CollectRoutablePathsProcessor.paths.push(...docs.filter((doc) =>
      this.docTypes.includes(doc.docType),
    ).map((doc) =>
      doc.path.startsWith('/') ? doc.path : `/${doc.path}`,
    ));

    if (this.generate) {
      docs.push({
        renderedContent: this.routes,
        outputPath: 'docs/renderableRoutes.txt',
      });
    }

    return docs;
  }
}

export const COLLECT_ROUTABLE_PATHS_PROCESSOR_PROVIDER = <const>[
  COLLECT_ROUTABLE_PATHS_PROCESSOR_NAME,
  () => new CollectRoutablePathsProcessor(),
];
