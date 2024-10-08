import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffTabComponent } from '../tab/tab.component';

@Component({
  standalone: true,
  selector: 'daff-tab-panel',
  template: `<ng-content></ng-content>`,
  styleUrl: './tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabPanelComponent {
  @HostBinding('class.daff-tab-panel') class = true;
  @HostBinding('attr.role') role = 'tabpanel';
  @HostBinding('attr.aria-labelledby') ariaLabelledBy = '';
  @HostBinding('attr.tabindex') tabIndex = '0';

  private _id = '';

  @HostBinding('attr.id') get tabPanelId() {
    return this._id;
  }

  constructor(private tab: DaffTabComponent) {
    /**
     * Sets the value of `ariaLabelledBy` to the id of the tab component
     */
    this.ariaLabelledBy = this.tab.id;

    this._id = this.tab.panelId;
  }
}
