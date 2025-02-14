import {
  Component,
  HostBinding,
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
})
export class DaffTabPanelComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-tab-panel') private class = true;

  /**
   * @docs-private
   *
   * Sets the `role` to tabpanel.
   */
  @HostBinding('attr.role') role = 'tabpanel';

  /**
   * @docs-private
   *
   * `aria-labelledby` for the tab.
   */
  @HostBinding('attr.aria-labelledby') ariaLabelledBy = '';

  /**
   * @docs-private
   *
   * Sets the `tabindex` to 0.
   */
  @HostBinding('attr.tabindex') tabIndex = '0';

  private _id = '';

  /**
   * @docs-private
   *
   * Dynamically binds the tab panel's id to a unique value generated from the associated tab's panelId.
   */
  @HostBinding('attr.id') get tabPanelId() {
    return this._id;
  }

  constructor(private tab: DaffTabComponent) {
    /**
     * Sets the value of `ariaLabelledBy` to the id of the tab component.
     */
    this.ariaLabelledBy = this.tab.id;

    this._id = this.tab.panelId;
  }
}
