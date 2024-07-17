import {
  Directive,
  HostBinding,
  Optional,
} from '@angular/core';

import { DaffModalComponent } from '../modal/modal.component';

let modalTitleId = 0;

@Directive({
  selector: '[daffModalTitle]',
})
export class DaffModalTitleDirective {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-modal-title') class = true;

  private _id = '';

  @HostBinding('attr.id') get uniqueId() {
    return this._id;
  }

  constructor(@Optional() private modal: DaffModalComponent) {
    modalTitleId++;

    this._id = 'daff-modal-title-' + modalTitleId;

    if(this.modal) {
      this.modal.ariaLabelledBy = this.uniqueId;
    }
  }
}
