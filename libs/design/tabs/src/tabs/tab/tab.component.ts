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

import { DaffTabPanelComponent } from '../tab-panel/tab-panel.component';

let uniqueDaffTabId = 0;

@Component({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
    'button[daff-tab]' + ',' +
    'a[daff-tab]',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
  ],
})
export class DaffTabComponent implements DaffPrefixable {
  @HostBinding('class.daff-tab') class = true;
  @HostBinding('attr.role') role = 'tab';
  @HostBinding('attr.aria-selected') get ariaSelected() {
    return this.selected ? true :  false;
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

  constructor(@Optional() private tabPanel: DaffTabPanelComponent) {
    uniqueDaffTabId++;

    this._id = 'daff-tab-' + uniqueDaffTabId;
  }
}
