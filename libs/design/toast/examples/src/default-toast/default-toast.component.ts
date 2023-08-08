import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
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

  constructor(private toastService: DaffToastService) {

  }

  open() {
    this.toast = this.toastService.open({
      title: 'Hello Elain' + ' ' + this.count++,
      subtitle: 'Awesome.',
      status: 'success',
      actions: [
        { title: 'Link', type: 'underline', color: 'primary' },
        { title: 'Action', type: 'raised', color: 'secondary', data: { action: 'openModal' }},
      ],
    });

    this.toast.actions$.pipe(filter((action) => action.action.data === 'openModal')).subscribe((action) => {

    });
  }
}
