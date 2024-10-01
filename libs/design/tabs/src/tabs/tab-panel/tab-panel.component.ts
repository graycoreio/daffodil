import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
} from '@angular/core';

let tabPanelId = 1;

@Component({
  standalone: true,
  selector: 'daff-tab-panel',
  template: `
      <ng-template #content>
        <div class="daff-tab-panel">
          <ng-content></ng-content>
        </div>
      </ng-template>
  `,
  styleUrl: './tab-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabPanelComponent {
  @HostBinding('attr.role') role = 'tabpanel';

  @HostBinding('attr.id') id = 'tabpabel-' + tabPanelId;

  constructor() {
    tabPanelId++;
  }

  @ViewChild('content', { read: TemplateRef, static: true }) contentRef: TemplateRef<any>;
}
