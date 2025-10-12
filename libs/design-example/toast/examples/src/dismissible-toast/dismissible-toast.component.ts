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
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dismissible-toast',
  templateUrl: './dismissible-toast.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
  ],
})
export class DismissibleToastComponent {
  private toast: DaffToast;

  constructor(private toastService: DaffToastService) {}

  open() {
    this.toast = this.toastService.open({
      title: 'Update Available' + ' ' + this.count++,
      message: 'A new version of this page is available.',
      dismissible: true,
    });
  }

  private count = 0;
}
