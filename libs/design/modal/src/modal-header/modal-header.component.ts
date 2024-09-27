import { NgIf } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

import { DaffModalCloseDirective } from '../modal-close/modal-close.directive';

@Component({
  selector: 'daff-modal-header',
  templateUrl: './modal-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    DAFF_BUTTON_COMPONENTS,
    FaIconComponent,
    DaffModalCloseDirective,
  ],
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
