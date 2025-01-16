import {
  Component,
  Input,
} from '@angular/core';

import { DaffOrder } from '@daffodil/order';

import { PrintOrderSummaryModule } from '../print-order-summary/print-order-summary.module';

@Component({
  selector: 'demo-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
  imports: [
    PrintOrderSummaryModule,
  ],
})
export class ThankYouComponent {
  @Input() order: DaffOrder;
}
