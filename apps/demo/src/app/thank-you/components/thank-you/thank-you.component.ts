import {
  Component,
  Input,
} from '@angular/core';

import { DaffOrder } from '@daffodil/order';

import { PrintOrderSummaryComponent } from '../print-order-summary/print-order-summary.component';

@Component({
  selector: 'demo-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  imports: [
    PrintOrderSummaryComponent,
  ],
})
export class ThankYouComponent {
  @Input() order: DaffOrder;
}
