import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
} from '@angular/core';

import {
  DaffToast,
  DaffToastService,
} from '@daffodil/design/toast';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'toast-with-custom-duration',
  templateUrl: './toast-with-custom-duration.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastWithCustomDurationComponent {
  private toast: DaffToast;

  constructor(private toastService: DaffToastService) {}

  open() {
    this.toast = this.toastService.open({
      title: 'Update Complete',
      message: 'This page has been updated to the newest version.',
      status: 'success',
    },
    {
      duration: 7000,
    });
  }
}
