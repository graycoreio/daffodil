import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
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
  @HostBinding('attr.role') role = 'tab';

  id = 'daff-tab-' + tabId;
  panelId = 'daff-tab-panel-' + tabId;

  constructor() {
    tabId++;
  }

  @ViewChild('content', { read: TemplateRef, static: true }) contentRef: TemplateRef<any>;
  @ViewChild('label', { read: TemplateRef, static: true }) labelRef: TemplateRef<any>;
}
