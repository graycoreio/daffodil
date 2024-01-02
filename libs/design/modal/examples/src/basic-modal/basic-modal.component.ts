import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffModalService } from '@daffodil/design/modal';

import { BasicModalContentComponent } from './modal-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-modal',
  templateUrl: './basic-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicModalComponent {
  modal: any;

  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modal = this.modalService.open(BasicModalContentComponent);
  }
}
