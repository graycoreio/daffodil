import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffPalette } from '@daffodil/design';
import { DAFF_PROGRESS_BAR_COMPONENTS } from '@daffodil/design/progress-bar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'progress-bar-themes',
  templateUrl: './progress-bar-themes.component.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_PROGRESS_BAR_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class ProgressBarThemesComponent {
  color: DaffPalette = 'primary';

  colorControl: FormControl = new FormControl('');
}
