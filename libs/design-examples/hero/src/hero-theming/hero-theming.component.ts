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
  selector: 'hero-theming-example',
  templateUrl: './hero-theming.component.html',
  styleUrls: ['./hero-theming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_HERO_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
    ReactiveFormsModule,
  ],
})
export class HeroThemingExampleComponent {
  faMobile = faMobile;
  color: DaffPalette = 'primary';

  colorControl: UntypedFormControl = new UntypedFormControl('');
}
