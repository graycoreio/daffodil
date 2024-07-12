import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffImageModule } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-card',
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffCardModule,
    DaffImageModule,
    FaIconComponent,
    DaffButtonModule,
  ],
})
export class BasicCardComponent {
  faMapMarked = faMapMarked;
}
