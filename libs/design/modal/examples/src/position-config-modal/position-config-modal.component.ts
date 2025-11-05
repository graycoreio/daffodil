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

import { PositionConfigModalContentComponent } from './modal-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'position-config-modal',
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
export class PositionConfigModalComponent {
  modal: DaffModalComponent;

  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modal = this.modalService.open(
      PositionConfigModalContentComponent,
      { ariaLabelledBy: 'Modal Title',
        position: {
          vertical: 'top',
          offsetTop: '10vh',
        }},
    );
  }
}
