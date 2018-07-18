import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  showPaymentForm: boolean;

  ngOnInit() {
    this.showPaymentForm = true;
  }

  togglePaymentView() {
    this.showPaymentForm = !this.showPaymentForm;
  }
}
