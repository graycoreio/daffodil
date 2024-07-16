import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffProgressBarModule } from '@daffodil/design/progress-bar';

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
  standalone: true,
  imports: [DaffProgressBarModule],
})
export class ProgressBarDefaultComponent {}
