import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  TemplateRef,
} from '@angular/core';

import { DaffTabComponent } from '../tab/tab.component';

@Component({
  standalone: true,
  selector: 'daff-tab-label',
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffTabLabelDirective {
  constructor(
    private tab: DaffTabComponent,
  ) {}

  get panelId() {
    return this.tab.id;
  }
}
