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

import { PositionConfigModalContentExampleComponent } from './modal-content.component';

@Component({
  selector: 'position-config-modal-example',
  templateUrl: './position-config-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DAFF_MODAL_COMPONENTS,
  ],
  providers: [
    DaffModalService,
  ],
})
export class PositionConfigModalExampleComponent {
  modal: DaffModalComponent;

  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modal = this.modalService.open(
      PositionConfigModalContentExampleComponent,
      { ariaLabelledBy: 'Modal Title',
        position: {
          vertical: 'top',
          offsetTop: '10vh',
        }},
    );
  }
}
