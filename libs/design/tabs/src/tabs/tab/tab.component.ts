import {
  Component,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
  Input,
} from '@angular/core';

let tabId = 1;

@Component({
  standalone: true,
  selector: 'daff-tab',
  template: `
      <ng-template #label>
        <ng-content select="daff-tab-label"></ng-content>
      </ng-template>
      <ng-template #content>
        <ng-content></ng-content>
      </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabComponent {
  /**
   * Whether the tab is disabled.
   *
   * @example
   * <daff-tab [disabled]="true">
   * </daff-tab>
   *
   * @input
   * @type {boolean}
   */
  @Input() disabled = false;

  @ViewChild('content', { read: TemplateRef, static: true }) contentRef: TemplateRef<any>;
  @ViewChild('label', { read: TemplateRef, static: true }) labelRef: TemplateRef<any>;

  /**
   * A unique id for the tab component.
   *
   * The `id` is automatically generated by linking the prefix 'daff-tab-' with an incrementing `tabId`. This value can be customized by passing a different `id` value via the component's `id` input.
   *
   * @example
   * <daff-tab [id]="'custom-id'"></daff-tab>
   *
   * @input
   * @type {string}
   */
  @Input() id = 'daff-tab-' + tabId;

  panelId = 'daff-tab-panel-' + tabId;

  constructor() {
    tabId++;
  }
}
