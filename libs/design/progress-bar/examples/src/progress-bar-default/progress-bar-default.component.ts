import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_PROGRESS_BAR_COMPONENTS } from '@daffodil/design/progress-bar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'progress-bar-default',
  templateUrl: './progress-bar-default.component.html',
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
export class ProgressBarDefaultComponent {}
