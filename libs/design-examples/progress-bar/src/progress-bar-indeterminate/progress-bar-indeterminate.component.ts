import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_PROGRESS_BAR_COMPONENTS } from '@daffodil/design/progress-bar';

@Component({
  selector: 'progress-bar-indeterminate-example',
  templateUrl: './progress-bar-indeterminate.component.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_PROGRESS_BAR_COMPONENTS,
  ],
})
export class ProgressBarIndeterminateExampleComponent {}
