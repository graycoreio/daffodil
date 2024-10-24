import {
  Component,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
  Input,
} from '@angular/core';

let tabId = 1;

/**
 * `DaffTabComponet` is an element in the tab list that is used as a content container to group the label of a tab panel and the tab panel together.
 *
 * ## Template Structure
 * A `<daff-tab>` should include the {@link DaffTabLabelComponent} and {@link DaffTabPanelComponent} components in order to properly structure the UI.
 *
 * ## Usage
 * ```html
 * <daff-tab>
 * 	<daff-tab-label>
 * 		<fa-icon [icon]="faInfoCircle" daffPrefix></fa-icon>
 * 		Tab 1
 * 	</daff-tab-label>
 * 	<daff-tab-panel>
 * 		Tab 1 Panel
 * 	</daff-tab-panel>
 * </daff-tab>
 * ```
 */
@Component({
  standalone: true,
  selector: 'daff-tab',
  template: `
      <ng-template #label>
        <ng-content select="daff-tab-label"></ng-content>
      </ng-template>
      <ng-template #content>
        <ng-content select="daff-tab-panel"></ng-content>
      </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabComponent {
  /**
   * Whether the tab is disabled.
   *
   * ```html
   * <daff-tab [disabled]="true">
   * </daff-tab>
   * ```
   */
  @Input() disabled = false;

  /**
   * @docs-private
   */
  @ViewChild('content', { read: TemplateRef, static: true }) contentRef: TemplateRef<any>;

  /**
   * @docs-private
   */
  @ViewChild('label', { read: TemplateRef, static: true }) labelRef: TemplateRef<any>;

  /**
   * A unique id for the tab component.
   *
   * The `id` is automatically generated by linking the prefix 'daff-tab-' with an incrementing `tabId`. This value can be customized by passing a different `id` value via the component's `id` input.
   *
   * ```html
   * <daff-tab [id]="'custom-id'"></daff-tab>
   * ```
   */
  @Input() id = 'daff-tab-' + tabId;

  /**
   * @docs-private
   */
  panelId = 'daff-tab-panel-' + tabId;

  constructor() {
    tabId++;
  }
}
