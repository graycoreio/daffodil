import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicMenuComponent } from './basic-menu/basic-menu.component';


export const MENU_EXAMPLES = [
  BasicMenuComponent,
];

export const provideDaffDesignMenuExamples = () =>
  provideDaffDocsExampleComponents(...MENU_EXAMPLES);
