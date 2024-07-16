import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { BasicListComponent } from './basic-list/basic-list.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { MultilineListComponent } from './multiline-list/multiline-list.component';
import { NavListComponent } from './nav-list/nav-list.component';


export const LIST_EXAMPLES = [
  BasicListComponent,
  NavListComponent,
  IconListComponent,
  MultilineListComponent,
];

export const provideDaffDesignListExamples = () =>
  provideDaffDocsExampleComponents(...LIST_EXAMPLES);
