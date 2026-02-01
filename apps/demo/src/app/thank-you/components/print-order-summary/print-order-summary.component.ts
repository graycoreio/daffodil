import { Component } from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'demo-print-order-summary',
  templateUrl: './print-order-summary.component.html',
  imports: [
    DaffButtonComponent,
  ],
})
export class PrintOrderSummaryComponent{

  // To-Do: update functionality
  printOrderSummary() {}
}
