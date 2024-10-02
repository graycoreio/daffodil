
import {
  Directive,
  TemplateRef,
} from '@angular/core';

import { DaffTabComponent } from '../tab/tab.component';

@Directive({
  selector: '[daffTabLabel]',
  standalone: true,
})
export class DaffTabLabelDirective {
  constructor(
    private tabPanel: DaffTabComponent,
    public templateRef: TemplateRef<any>,
  ) {
  }

  get panelId() {
    return this.tabPanel.id;
  }
}
