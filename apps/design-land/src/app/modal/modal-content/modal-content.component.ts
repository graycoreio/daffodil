import { Component, OnInit } from '@angular/core';
import { DaffModalService, DaffModal } from '@daffodil/design';

@Component({
  selector: 'design-land-modal-content',
  templateUrl: './modal-content.component.html',
})
export class DesignLandModalContentComponent {
  constructor(
    private modalService: DaffModalService,
    private modal: DaffModal<DesignLandModalContentComponent>
    ) {}
  hideModal() {
    this.modalService.close(this.modal);
  }
}
