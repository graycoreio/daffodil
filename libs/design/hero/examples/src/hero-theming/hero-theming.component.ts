import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffPalette } from '@daffodil/design';
import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-theming',
  templateUrl: './hero-theming.component.html',
  styleUrls: ['./hero-theming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_HERO_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
    ReactiveFormsModule,
  ],
})
export class HeroThemingComponent {
  faMobile = faMobile;
  color: DaffPalette = 'primary';

  colorControl: UntypedFormControl = new UntypedFormControl('');
}
