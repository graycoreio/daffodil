import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffTabComponent } from '../tab/tab.component';

let uniqueTabPanelId = 0;

@Component({
  standalone: true,
  selector: 'daff-tab-panel',
  template: `<ng-content></ng-content>`,
  styleUrl: './tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabPanelComponent {
  @HostBinding('attr.role') role = 'tabpanel';
  @HostBinding('attr.aria-labelledby') ariaLabelledBy = '';

  private _id = '';

  @HostBinding('attr.id') get tabPanelId() {
    return this._id;
  }

  constructor(private tab: DaffTabComponent) {
    this.ariaLabelledBy = this.tab.id;

    uniqueTabPanelId++;

    this._id = 'daff-tab-panel-' + uniqueTabPanelId;
  }
}
