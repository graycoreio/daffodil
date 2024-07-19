import {
  Component,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daff-modal-header',
  templateUrl: './modal-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffModalHeaderComponent {
  faXmark = faXmark;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-modal-header') class = true;

  /**
   * Whether or not a modal is dismissible.
   */
  @Input() dismissible = true;
}
