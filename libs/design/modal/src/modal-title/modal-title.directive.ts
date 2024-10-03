import {
  Directive,
  HostBinding,
  Optional,
} from '@angular/core';

import { DaffModalComponent } from '../modal/modal.component';

let modalTitleId = 0;

/**
 * Title of a modal.
 */
@Directive({
  selector: '[daffModalTitle]',
  standalone: true,
})

export class DaffModalTitleDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-modal-title') class = true;

  private _id = '';

  /**
   * The html `id` of the modal title.
   */
  @HostBinding('attr.id') get uniqueId() {
    return this._id;
  }

  constructor(@Optional() private modal: DaffModalComponent) {
    modalTitleId++;

    this._id = 'daff-modal-title-' + modalTitleId;

    /**
     * Sets the ariaLabelledBy of the modal to the id of the modal title.
     */
    if(this.modal) {
      this.modal.ariaLabelledBy = this.uniqueId;
    }
  }
}
