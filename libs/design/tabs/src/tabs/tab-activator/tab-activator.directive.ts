import {
  HostBinding,
  Input,
  Optional,
  OnInit,
  Directive,
} from '@angular/core';

import { DaffTabComponent } from '../tab/tab.component';

let uniqueTabActivatorId = 0;

@Directive({
  standalone: true,
  selector: '' +
    'button[daff-tab-activator]' + ',' +
    'a[daff-tab-activator]',
})
export class DaffTabActivatorDirective implements OnInit {
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

  @Input() panelId = '';

  ngOnInit() {
    this.ariaControls = this.panelId;
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
