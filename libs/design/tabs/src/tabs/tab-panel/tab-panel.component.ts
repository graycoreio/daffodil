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
  @HostBinding('attr.role') role = 'tabpanel';
  @HostBinding('attr.aria-labelledby') ariaLabelledBy = '';

  constructor(private tab: DaffTabComponent) {
    this.ariaLabelledBy = this.tab.id;
  }
}
