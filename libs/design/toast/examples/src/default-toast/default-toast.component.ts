import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import {
  DaffToast,
  DaffToastService,
} from '@daffodil/design/toast';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-toast',
  templateUrl: './default-toast.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultToastComponent {
  private toast: DaffToast;

  private count = 0;

  constructor(private toastService: DaffToastService) {}

  open() {
    this.toast = this.toastService.open({
      title: 'Update Available' + ' ' + this.count++,
      message: 'A new version of this page is available.',
      actions: [
        { title: 'Update', color: 'theme-contrast', size: 'sm' },
        { title: 'Not now', type: 'raised', size: 'sm' },
      ],
    });
  }
}
