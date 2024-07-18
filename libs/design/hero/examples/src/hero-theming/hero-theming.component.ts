import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffPalette } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-theming',
  templateUrl: './hero-theming.component.html',
  styleUrls: ['./hero-theming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroThemingComponent {
  faMobile = faMobile;
  color: DaffPalette = 'primary';

  colorControl: UntypedFormControl = new UntypedFormControl('');
}
