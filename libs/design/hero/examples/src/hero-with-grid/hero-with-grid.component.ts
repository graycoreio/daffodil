import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'hero-with-grid',
  templateUrl: './hero-with-grid.component.html',
  styleUrls: ['./hero-with-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_HERO_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
  ],
})
export class HeroWithGridComponent {
  faMobile = faMobile;
}
