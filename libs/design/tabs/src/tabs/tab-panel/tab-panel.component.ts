/* eslint-disable quote-props */
import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffTabComponent } from '../tab/tab.component';

/**
 * DaffTabPanelComponent is used to display the content panel of a tab.
 *
 * @example Basic structure of tab panel
 * ```html
 * <daff-tab-panel>
 *  <!-- Tab panel content goes here -->
 * </daff-tab-panel>
 * ```
 */
@Component({
  selector: 'daff-tab-panel',
  template: `<ng-content></ng-content>`,
  styleUrl: './tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'daff-tab-panel',
    'role': 'tabpanel',
    'tabindex': '0',
    '[attr.id]': 'tabPanelId',
    '[attr.aria-labelledby]': 'ariaLabelledBy',
  },
})
export class DaffTabPanelComponent {
  private _id = '';

  /**
   * @docs-private
   *
   * Dynamically binds the tab panel's id to a unique value generated from the associated tab's panelId.
   */
  get tabPanelId() {
    return this._id;
  }

  private _ariaLabelledBy = '';

  /**
   * @docs-private
   */
  get ariaLabelledBy() {
    return this._ariaLabelledBy;
  }

  constructor(private tab: DaffTabComponent) {
    /**
     * Sets the value of `ariaLabelledBy` to the id of the tab component.
     */
    this._ariaLabelledBy = this.tab.id;

    this._id = this.tab.panelId;
  }
}
