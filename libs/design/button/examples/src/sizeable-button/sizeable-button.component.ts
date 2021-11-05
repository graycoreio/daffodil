import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sizeable-button',
  templateUrl: './sizeable-button.component.html',
  styles: [`
    button {
      margin: 4px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizeableButtonComponent {
  faPlus = faPlus;
}
