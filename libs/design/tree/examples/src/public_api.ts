import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicTreeComponent } from './basic-tree/basic-tree.component';

export { BasicTreeComponent  };

export const TREE_EXAMPLES = [
  BasicTreeComponent,
];

export const provideDaffDesignTreeExamples = () =>
  provideDaffDocsExampleComponents(...TREE_EXAMPLES);
