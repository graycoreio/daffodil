import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss']
})
export class CheckoutViewComponent implements OnInit {

  showPaymentView: boolean;

  ngOnInit() {
    this.showPaymentView = false;
  }

  onContinueToPayment() {
    this.showPaymentView = true;
  }
}
