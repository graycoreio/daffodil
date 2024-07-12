import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffPalette } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffHeroModule } from '@daffodil/design/hero';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'compact-hero',
  templateUrl: './compact-hero.component.html',
  styleUrls: ['./compact-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffHeroModule,
    FaIconComponent,
    DaffButtonModule,
  ],
})
export class CompactHeroComponent {
  faMobile = faMobile;
}
