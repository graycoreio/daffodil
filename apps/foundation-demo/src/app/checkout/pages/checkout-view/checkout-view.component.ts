import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './checkout-view.component.html',
  styleUrls: ['./checkout-view.component.scss']
})
export class CheckoutViewComponent implements OnInit {

  showShippingForm: boolean;

  constructor() { }

  ngOnInit() {
    this.showShippingForm = true;
  }

  toggleShippingView() {
    this.showShippingForm = !this.showShippingForm;
  }
}
