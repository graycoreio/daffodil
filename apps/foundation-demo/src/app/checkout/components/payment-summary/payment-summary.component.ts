import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaymentInfo } from '@daffodil/core';

@Component({
  selector: 'payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss']
})
export class PaymentSummaryComponent {

  @Input() paymentInfo: PaymentInfo;
  @Output() editPaymentInfo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onEdit() {
    this.editPaymentInfo.emit();
  }
}
