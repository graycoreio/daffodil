import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffModalRef,
  DAFF_MODAL_COMPONENTS,
  DaffModalService,
} from '@daffodil/design/modal';

import { BasicModalContentExampleComponent } from './modal-content.component';

@Component({
  selector: 'basic-modal-example',
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
export class BasicModalExampleComponent {
  modal: DaffModalRef<BasicModalContentExampleComponent>;

  constructor(private modalService: DaffModalService) {}

  showModal() {
    this.modal = this.modalService.open(
      BasicModalContentExampleComponent,
      { ariaLabelledBy: 'Modal Title' },
    );
  }
}
