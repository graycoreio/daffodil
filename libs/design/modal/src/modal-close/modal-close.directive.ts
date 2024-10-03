import {
  Directive,
  HostBinding,
  HostListener,
  Optional,
} from '@angular/core';

import { DaffModalComponent } from '../modal/modal.component';
import { DaffModalService } from '../service/modal.service';

/**
 * The DaffModalCloseDirective is a helper directive that passes a click
 * event to the button it's used with to close a modal. It needs to be
 * implemented with the `<button>` HTML element to work. This helps to
 * reduce code duplication.
 */
@Directive({
  selector: 'button[daffModalClose]',
  standalone: true,
})

export class DaffModalCloseDirective {
  constructor(
    private modalService: DaffModalService,
    @Optional() private modal: DaffModalComponent,
  ) {}

  /**
   * Event fired when the button the directive is attached to is clicked. This is used to close a modal.
   */
  @HostListener('click')
  _onCloseModal(event: MouseEvent) {
    if(this.modal) {
      this.modalService.close(this.modal);
    }
  }

  /**
   * Sets the button type attribute to button.
   */
  @HostBinding('attr.type') typeAttribute = 'button';
}
