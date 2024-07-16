import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicPaginatorComponent } from './basic-paginator/basic-paginator.component';
import { LinkPaginatorComponent } from './link-paginator/link-paginator.component';


export const PAGINATOR_EXAMPLES = [
  BasicPaginatorComponent,
  LinkPaginatorComponent,
];

export const provideDaffDesignPaginatorExamples = () =>
  provideDaffDocsExampleComponents(...PAGINATOR_EXAMPLES);
