import {
  DocCollection,
  Processor,
} from 'dgeni';

import { GENERATE_NAV_LIST_PROCESSOR_NAME } from './generateNavList';

export const FILTER_NAV_INDEX_PROCESSOR_NAME = 'filterNavIndex';

export class FilterNavIndexProcessor implements Processor {
  readonly name = FILTER_NAV_INDEX_PROCESSOR_NAME;
  readonly $runAfter = [GENERATE_NAV_LIST_PROCESSOR_NAME];
  readonly $runBefore = ['rendering-docs'];

  indexDocType = 'index';

  $process(docs: DocCollection): DocCollection | PromiseLike<DocCollection> | void {
    return docs.filter((doc) => doc.docType !== this.indexDocType);
  }
}

export const FILTER_NAV_INDEX_PROCESSOR_PROVIDER = <const>[
  FILTER_NAV_INDEX_PROCESSOR_NAME,
  () => new FilterNavIndexProcessor(),
];
