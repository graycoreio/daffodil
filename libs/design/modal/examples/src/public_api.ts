import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicModalComponent } from './basic-modal/basic-modal.component';


export const MODAL_EXAMPLES = [
  BasicModalComponent,
];

export const provideDaffDesignModalExamples = () =>
  provideDaffDocsExampleComponents(...MODAL_EXAMPLES);
