import { Component } from '@angular/core';

import { DaffModalService } from '@daffodil/design';

import { DesignLandModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'design-land-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class DesignLandModalComponent {
  modal: any;
  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modal = this.modalService.open(DesignLandModalContentComponent);
  }

  hideModal() {
    this.modalService.close(this.modal);
  }
}
