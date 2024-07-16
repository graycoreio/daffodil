import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { ProgressBarDefaultComponent } from './progress-bar-default/progress-bar-default.component';
import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate/progress-bar-indeterminate.component';
import { ProgressBarThemesComponent } from './progress-bar-themes/progress-bar-themes.component';

export const PROGRESS_BAR_EXAMPLES = [
  ProgressBarDefaultComponent,
  ProgressBarIndeterminateComponent,
  ProgressBarThemesComponent,
];

export const provideDaffDesignProgressBarExamples = () =>
  provideDaffDocsExampleComponents(...PROGRESS_BAR_EXAMPLES);
