/* eslint-disable quote-props */
import {
  Directive,
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
  host: {
    'type': 'button',
    '(click)': 'onClick($event)',
  },
})

export class DaffModalCloseDirective {
  constructor(
    private modalService: DaffModalService,
    @Optional() private modal: DaffModalComponent,
  ) {}

  /**
   * @docs-private
   */
  onClick(event: MouseEvent) {
    if(this.modal) {
      this.modalService.close(this.modal);
    }
  }
}
