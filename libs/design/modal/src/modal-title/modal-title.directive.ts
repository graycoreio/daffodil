import {
  Directive,
  Optional,
} from '@angular/core';

import { DaffModalComponent } from '../modal/modal.component';

let modalTitleId = 0;

/**
 * Title of a modal.
 */
@Directive({
  selector: '[daffModalTitle]',
  host: {
    class: 'daff-modal-title',
    '[attr.id]': '_id',
  },
})

export class DaffModalTitleDirective {
  private _id = '';

  constructor(@Optional() private modal: DaffModalComponent) {
    modalTitleId++;

    this._id = 'daff-modal-title-' + modalTitleId;

    /**
     * Sets the ariaLabelledBy of the modal to the id of the modal title.
     */
    if(this.modal) {
      this.modal.ariaLabelledBy = this._id;
    }
  }
}
