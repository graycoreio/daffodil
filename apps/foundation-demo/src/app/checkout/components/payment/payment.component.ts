import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentInfo } from '@daffodil/core';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() paymentInfo: PaymentInfo;
  @Output() updatePaymentInfo: EventEmitter<any> = new EventEmitter();
  showPaymentForm: boolean;

  ngOnInit() {
    this.showPaymentForm = true;
  }

  togglePaymentView() {
    this.showPaymentForm = !this.showPaymentForm;
  }

  onUpdatePaymentInfo(paymentInfo: PaymentInfo) {
    this.updatePaymentInfo.emit(paymentInfo);
    this.togglePaymentView();
  }
}
