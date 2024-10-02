import { NgIf } from '@angular/common';
import {
  Component,
  HostBinding,
  ContentChild,
  ChangeDetectionStrategy,
  Input,
  Optional,
} from '@angular/core';

import {
  DaffPrefixable,
  DaffPrefixDirective,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

import { DaffTabComponent } from '../tab/tab.component';

let uniqueTabActivatorId = 0;

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
    'button[daff-tab-activator]' + ',' +
    'a[daff-tab-activator]',
  templateUrl: './tab-activator.component.html',
  styleUrl: './tab-activator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
  ],
})
export class DaffTabActivatorComponent implements DaffPrefixable {
  @HostBinding('class.daff-tab') class = true;
  @HostBinding('attr.role') role = 'tab';
  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.selected ? true :  false;
  }

  @HostBinding('attr.tabindex') get tabIndex() {
    return this.selected ? '0' :  '-1';
  }

  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  @Input() @HostBinding('class.selected') selected = false;

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
