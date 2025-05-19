import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffToast,
  DaffToastService,
} from '@daffodil/design/toast';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'toast-positions',
  templateUrl: './toast-positions.component.html',
  styleUrls: ['./toast-positions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    DaffButtonComponent,
  ],
})
export class ToastPositionsComponent {
  private toast: DaffToast;

  constructor(
    private toastService: DaffToastService,
  ) {}

  open() {
    this.toast = this.toastService.open({
      title: 'Update complete' + ' ' + this.count++,
      message: 'This page is now up-to-date.',
      dismissible: true,
    });
  }

  private count = 0;

  horizontalControl: FormControl = new FormControl('right');
  verticalControl: FormControl = new FormControl('top');
}
