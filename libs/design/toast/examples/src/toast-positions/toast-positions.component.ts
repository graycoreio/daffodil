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
  provideDaffToast,
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
  providers: [
    provideDaffToast({
      position: {
        vertical: 'top',
        horizontal: 'center',
      },
      useParent: true,
    }),
  ],
})
export class ToastPositionsComponent {
  private toast: DaffToast;
  private count = 0;

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
}
