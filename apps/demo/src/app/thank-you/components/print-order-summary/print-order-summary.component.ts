import { Component } from '@angular/core';

import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'demo-print-order-summary',
  templateUrl: './print-order-summary.component.html',
  imports: [
    DAFF_BASIC_BUTTON_COMPONENTS,
  ],
})
export class PrintOrderSummaryComponent{

  // To-Do: update functionality
  printOrderSummary() {}
}
