
import {
  Directive,
  TemplateRef,
} from '@angular/core';

import { DaffTabPanelComponent } from '../tab-panel/tab-panel.component';

@Directive({
  selector: '[daffTabLabel]',
  standalone: true,
})
export class DaffTabLabelDirective {
  constructor(
    private tabPanel: DaffTabPanelComponent,
    public templateRef: TemplateRef<any>,
  ) {
  }

  get panelId() {
    return this.tabPanel.id;
  }
}
