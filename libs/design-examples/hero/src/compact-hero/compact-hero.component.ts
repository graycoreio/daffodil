import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  selector: 'compact-hero-example',
  templateUrl: './compact-hero.component.html',
  styleUrls: ['./compact-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DAFF_HERO_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class CompactHeroExampleComponent {
  faBagShopping = faBagShopping;
}
