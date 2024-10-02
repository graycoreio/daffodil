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
      <ng-template #content>
        <ng-content></ng-content>
      </ng-template>
  `,
  styleUrl: './tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabComponent {
  @HostBinding('attr.role') role = 'tab';

  id = 'daff-tab-' + tabId;
  _panelId = 'daff-tab-panel-' + tabId;

  constructor() {
    tabId++;
  }

  @ViewChild('content', { read: TemplateRef, static: true }) contentRef: TemplateRef<any>;
}
