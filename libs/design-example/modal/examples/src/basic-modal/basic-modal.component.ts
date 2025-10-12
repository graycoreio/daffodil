import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffModalComponent,
  DAFF_MODAL_COMPONENTS,
  DaffModalService,
} from '@daffodil/design/modal';

import { BasicModalContentComponent } from './modal-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-modal',
  templateUrl: './basic-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DAFF_MODAL_COMPONENTS,
  ],
  providers: [
    DaffModalService,
  ],
})
export class BasicModalComponent {
  modal: DaffModalComponent;

  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modal = this.modalService.open(
      BasicModalContentComponent,
      { ariaLabelledBy: 'Modal Title' },
    );
  }
}
