import { Component, OnInit } from '@angular/core';
import { DaffModalService } from '@daffodil/design';

@Component({
  selector: 'design-land-modal-content',
  templateUrl: './modal-content.component.html',
})
export class DesignLandModalContentComponent {
  private modal: any;
  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modal = this.modalService.open(DesignLandModalContentComponent);
  }

  hideModal() {
    this.modalService.close(this.modal);
  }
}
