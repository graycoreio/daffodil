import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import {
  DaffModalComponent,
  DaffModalModule,
  DaffModalService,
} from '@daffodil/design/modal';

import { BasicModalContentComponent } from './modal-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-modal',
  templateUrl: './basic-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffButtonModule, DaffModalModule],
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
