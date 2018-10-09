import { Component } from '@angular/core';

@Component({
  selector: 'print-order-summary',
  templateUrl: './print-order-summary.component.html',
  styleUrls: ['./print-order-summary.component.scss']
})
export class PrintOrderSummaryComponent{

  printOrderSummary() {
    console.log('print order summary');
  }
}
