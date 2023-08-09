import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Input,
  Type,
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';

import { DaffToast } from '../toast';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <daff-toast
      *ngFor="let item of items;"
      [status]="item.status ?? null"
      (closeToast)="item.dismiss()"
      @fadeIn>
      <div daffToastTitle>{{ item.title }}</div>
      <div daffToastMessage>{{ item.message }}</div>
      <div daffToastActions *ngIf="item.actions">
        <ng-container *ngFor="let action of item.actions">
          <ng-container *ngTemplateOutlet="button;context:{ action, item }">
        </ng-container>
        </ng-container>
      </div>
    </daff-toast>

    <ng-template #button let-action="action" let-item="item">
      <button daff-button [status]="action.status" [color]="action.color" [size]="action.size"
          (click)="item.actions$.next({ event: $event, action})">{{ action.title }}
      </button>
    </ng-template>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
      transition(':leave', [
        animate('.5s ease-out', style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class DaffToastTemplateComponent {
  private _items: DaffToast[] = [];

  constructor(private cd: ChangeDetectorRef) {

  }

  @Input()
  get items(): DaffToast[] {
    return this._items;
  }
  set items(value: DaffToast[]) {
    this._items = value;
    this.cd.markForCheck();
  }
}
