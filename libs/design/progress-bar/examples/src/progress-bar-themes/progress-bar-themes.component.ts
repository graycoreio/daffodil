import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffPalette } from '@daffodil/design';
import { DaffProgressBarModule } from '@daffodil/design/progress-bar';

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
  standalone: true,
  imports: [DaffProgressBarModule, ReactiveFormsModule],
})
export class ProgressBarThemesComponent {
  color: DaffPalette = 'primary';

  colorControl: FormControl = new FormControl('');
}
