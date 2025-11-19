import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
} from '@daffodil/design';
import { DaffFlatButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'flat-button-example',
  templateUrl: './flat-button.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffFlatButtonComponent,
    DaffPrefixDirective,
    DaffSuffixDirective,
    FaIconComponent,
  ],
})
export class FlatButtonExampleComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
