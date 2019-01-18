import { Component } from '@angular/core';

@Component({
  selector: 'demo-print-order-summary',
  templateUrl: './print-order-summary.component.html'
})
export class PrintOrderSummaryComponent{

  printOrderSummary() {
    console.log('print order summary');
  }
}