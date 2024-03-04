import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';

import {
  DaffToast,
  DaffToastService,
  DaffToastPositionService,
} from '@daffodil/design/toast';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'toast-positions',
  templateUrl: './toast-positions.component.html',
  styleUrls: ['./toast-positions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastPositionsComponent implements OnInit {
  private toast: DaffToast;

  constructor(
    private toastService: DaffToastService,
    private toastPositionService: DaffToastPositionService,
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

  ngOnInit() {
    combineLatest([
      this.horizontalControl.valueChanges,
      this.verticalControl.valueChanges,
    ]).subscribe(([
      horizontal, vertical,
    ]) => {
      this.toastPositionService.setPosition({
        horizontal,
        vertical,
      });
    });
  }
}
