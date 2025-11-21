import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffToast,
  DaffToastService,
} from '@daffodil/design/toast';

@Component({
  selector: 'custom-duration-toast-example',
  templateUrl: './custom-duration-toast.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
  ],
})
export class CustomDurationToastExampleComponent {
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
