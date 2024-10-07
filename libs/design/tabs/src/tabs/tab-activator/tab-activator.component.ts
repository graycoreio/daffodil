import { NgIf } from '@angular/common';
import {
  HostBinding,
  Input,
  Optional,
  OnInit,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';

import { DaffTabComponent } from '../tab/tab.component';

let uniqueTabActivatorId = 0;

@Component({
  standalone: true,
  selector: '' +
    'button[daff-tab-activator]' + ',' +
    'a[daff-tab-activator]',
  template: `<ng-content></ng-content>`,
  styleUrl: './tab-activator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DaffTabActivatorComponent implements OnInit {
  @HostBinding('class.daff-tab-activator') class = true;
  @HostBinding('attr.role') role = 'tab';
  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.selected ? true :  false;
  }

  @HostBinding('attr.tabindex') get tabIndex() {
    return this.selected ? '0' :  '-1';
  }

  @Input() @HostBinding('class.selected') selected = false;

  @HostBinding('attr.aria-controls') ariaControls = '';

  /**
   * The html `id` of a tab activator.
   */
  @HostBinding('attr.id') get tabActivatorId() {
    return this._id;
  }

  @Input() activatorId = '';

  ngOnInit() {
    this.ariaControls = this.activatorId;
  }

  private _id = '';

  /**
   * The html `id` of a tab.
   */
  @HostBinding('attr.id') get uniqueId() {
    return this._id;
  }

  constructor(@Optional() private tab: DaffTabComponent) {
    uniqueTabActivatorId++;

    this._id = 'daff-tab-' + uniqueTabActivatorId;
  }
}
