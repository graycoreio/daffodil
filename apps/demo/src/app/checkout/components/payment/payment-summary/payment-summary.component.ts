import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffAuthorizeNetCreditCard } from '@daffodil/authorizenet';

@Component({
  selector: 'demo-checkout-payment-summary',
  templateUrl: './payment-summary.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./payment-summary.component.scss'],
})
export class DemoCheckoutPaymentSummaryComponent {
  @Input() paymentInfo: DaffAuthorizeNetCreditCard;

  @Output() editPaymentInfo = new EventEmitter<void>();

  onEdit() {
    this.editPaymentInfo.emit();
  }
}
