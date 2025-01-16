import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  SlicePipe,
} from '@angular/common';
import {
  Input,
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
  Inject,
  Output,
  EventEmitter,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';

import { DaffToastComponent } from './toast.component';
import { DaffToast } from '../interfaces/toast';
import {
  DaffToastOptions,
  DAFF_TOAST_OPTIONS,
} from '../options/daff-toast-options';
import { DaffToastPositionService } from '../service/position.service';
import { DaffToastActionsDirective } from '../toast-actions/toast-actions.directive';
import { DaffToastMessageDirective } from '../toast-message/toast-message.directive';
import { DaffToastTitleDirective } from '../toast-title/toast-title.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <daff-toast
      *ngFor="let item of items | slice:0:3"
      [toast]="item"
      [status]="item.status ?? null"
      (closeToast)="item.dismiss()"
      [@slideIn]="slideAnimation"
      [attr.role]="item.actions ? 'alertdialog' : 'status'"
      [attr.aria-labelledby]="item.actions ? item.title : undefined"
      [attr.aria-describedby]="item.actions ? item.message : undefined">
      <div daffToastTitle>{{ item.title }}</div>
      <div daffToastMessage>{{ item.message }}</div>
      <div daffToastActions *ngIf="item.actions">
        <ng-container *ngFor="let action of item.actions">
          <ng-container *ngTemplateOutlet="button;context:{ action, item }"></ng-container>
        </ng-container>
      </div>
      <button daff-icon-button color="theme-contrast"
        *ngIf="item.dismissible"
        aria-label="close button"
        [attr.aria-hidden]="item.actions ? undefined : true"
        (click)="onCloseToast(item.dismiss())">
          <fa-icon [icon]="faTimes" size="sm" [fixedWidth]="true"></fa-icon>
      </button>
    </daff-toast>

    <ng-template #button let-action="action" let-item="item">
      <ng-container [ngSwitch]="action.type">
        <button type="button" *ngSwitchDefault daff-button
          [status]="action.status"
          [color]="action.color"
          [size]="action.size"
          [attr.aria-label]="action.content"
          (click)="action.eventEmitter?.emit({ event: $event, action})">
            {{ action.content }}
        </button>
        <button type="button" *ngSwitchCase="'stroked'" daff-stroked-button
          [status]="action.status"
          [color]="action.color"
          [size]="action.size"
          [attr.aria-label]="action.content"
          (click)="action.eventEmitter?.emit({ event: $event, action})">
            {{ action.content }}
        </button>
        <button type="button" *ngSwitchCase="'raised'" daff-raised-button
          [status]="action.status"
          [color]="action.color"
          [size]="action.size"
          [attr.aria-label]="action.content"
          (click)="action.eventEmitter?.emit({ event: $event, action})">
            {{ action.content }}
        </button>
        <button type="button" *ngSwitchCase="'flat'" daff-flat-button
          [status]="action.status"
          [color]="action.color"
          [size]="action.size"
          [attr.aria-label]="action.content"
          (click)="action.eventEmitter?.emit({ event: $event, action})">
            {{ action.content }}
        </button>
        <button type="button" *ngSwitchCase="'underline'" daff-underline-button
          [status]="action.status"
          [color]="action.color"
          [size]="action.size"
          [attr.aria-label]="action.content"
          (click)="action.eventEmitter?.emit({ event: $event, action})">
            {{ action.content }}
        </button>
      </ng-container>
    </ng-template>
  `,
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translate({{startX}}, {{startY}})' }),
        animate('300ms ease-out', style({ opacity: '1', transform: 'translate({{endX}}, {{endY}})' })),
      ], { params: {
        startX: '0',
        startY: '0',
        endX: '0',
        endY: '0',
      } }),
    ]),
  ],
  imports: [
    DAFF_BUTTON_COMPONENTS,
    DaffToastComponent,
    DaffToastActionsDirective,
    DaffToastTitleDirective,
    DaffToastMessageDirective,
    FaIconComponent,
    NgSwitch,
    NgFor,
    NgSwitchCase,
    NgSwitchDefault,
    NgIf,
    SlicePipe,
    NgTemplateOutlet,
  ],
})
export class DaffToastTemplateComponent {
  faTimes = faTimes;

  private _items: DaffToast[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(DAFF_TOAST_OPTIONS)
    private options: DaffToastOptions,
    private toastPosition: DaffToastPositionService,
  ) { }

  @Output() closeToast: EventEmitter<void> = new EventEmitter();

  onCloseToast(event: Event) {
    this.closeToast.emit();
  }

  get slideAnimation(): any {
    switch (this.toastPosition.config.horizontal + '-' + this.toastPosition.config.vertical) {
      case 'left-top':
      case 'left-bottom':
        return {
          value: 0,
          params: {
            startX: '-100%',
            endX: '0',
            startY: '0',
            endY: '0',
          },
        };
      case 'right-top':
      case 'right-bottom':
        return {
          value: 0,
          params: {
            startX: '100%',
            endX: '0',
            startY: '0',
            endY: '0',
          },
        };

      case 'center-top':
        return {
          value: 0,
          params: {
            startX: '0',
            endX: '0',
            startY: '-100%',
            endY: '0',
          },
        };

      case 'center-bottom':
        return {
          value: 0,
          params: {
            startX: '0',
            endX: '0',
            startY: '100%',
            endY: '0',
          },
        };
    }
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
