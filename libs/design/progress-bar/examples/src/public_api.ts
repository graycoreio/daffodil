import { ComponentExample } from '@daffodil/design';

import { ProgressBarDefaultComponent } from './progress-bar-default/progress-bar-default.component';
import { ProgressBarDefaultComponentModule } from './progress-bar-default/progress-bar-default.module';
import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate/progress-bar-indeterminate.component';
import { ProgressBarIndeterminateComponentModule } from './progress-bar-indeterminate/progress-bar-indeterminate.module';
import { ProgressBarThemesComponent } from './progress-bar-themes/progress-bar-themes.component';
import { ProgressBarThemesComponentModule } from './progress-bar-themes/progress-bar-themes.module';

export const PROGRESS_BAR_EXAMPLES: ComponentExample[] = [
  { component: ProgressBarThemesComponent, module: ProgressBarThemesComponentModule },
  { component: ProgressBarIndeterminateComponent, module: ProgressBarIndeterminateComponentModule },
  { component: ProgressBarDefaultComponent, module: ProgressBarDefaultComponentModule },
];
