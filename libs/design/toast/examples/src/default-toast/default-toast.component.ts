import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DaffToast,
  DaffToastAction,
  DaffToastService,
} from '@daffodil/design/toast';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'default-toast',
  templateUrl: './default-toast.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffButtonComponent,
  ],
})
export class DefaultToastComponent implements OnInit {
  private toast: DaffToast;

  constructor(private toastService: DaffToastService) {}

  update = new EventEmitter<DaffToastAction>();

  closeToast = new EventEmitter<DaffToastAction>();

  open() {
    this.toast = this.toastService.open({
      title: 'Update Available' + ' ' + this.count++,
      message: 'A new version of this page is available.',
      actions: [
        { content: 'Update', color: 'theme-contrast', size: 'sm', eventEmitter: this.update },
        { content: 'Remind me later', type: 'flat', size: 'sm', eventEmitter: this.closeToast },
      ],
    });
  }

  ngOnInit() {
    this.update.subscribe(() => {
      console.log('test');
    });

    this.closeToast.subscribe(() => {
      this.toastService.close(this.toast);
    });
  }

  private count = 0;
}
