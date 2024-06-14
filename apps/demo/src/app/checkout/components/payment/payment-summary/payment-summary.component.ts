import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';

@Component({
  selector: 'demo-checkout-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
  standalone: true,
})
export class DemoCheckoutPaymentSummaryComponent {
  @Input() paymentInfo: DaffAuthorizeNetCreditCard;

  @Output() editPaymentInfo = new EventEmitter<void>();

  onEdit() {
    this.editPaymentInfo.emit();
  }
}
