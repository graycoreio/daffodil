import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicRadioComponent } from './basic-radio/basic-radio.component';



export const RADIO_EXAMPLES = [
  BasicRadioComponent,
];

export const provideDaffDesignRadioExamples = () =>
  provideDaffDocsExampleComponents(...RADIO_EXAMPLES);

