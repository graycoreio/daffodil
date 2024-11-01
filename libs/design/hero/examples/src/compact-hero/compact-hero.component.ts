import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'compact-hero',
  templateUrl: './compact-hero.component.html',
  styleUrls: ['./compact-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FaIconComponent,
    DAFF_HERO_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class CompactHeroComponent {
  faMobile = faMobile;
}
