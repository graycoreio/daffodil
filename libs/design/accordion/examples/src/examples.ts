import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicAccordionComponent } from './basic-accordion/basic-accordion.component';


export const ACCORDION_EXAMPLES = [
  BasicAccordionComponent,
];

export const provideDaffDesignAccordionExamples = () =>
  provideDaffDocsExampleComponents(...ACCORDION_EXAMPLES);
