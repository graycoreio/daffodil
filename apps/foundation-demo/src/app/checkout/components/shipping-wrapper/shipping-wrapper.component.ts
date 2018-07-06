import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shipping-wrapper',
  templateUrl: './shipping-wrapper.component.html',
  styleUrls: ['./shipping-wrapper.component.scss']
})
export class ShippingWrapperComponent implements OnInit {
  
  showShippingForm: boolean;

  ngOnInit() {
    this.showShippingForm = true;
  }

  toggleShippingView() {
    this.showShippingForm = !this.showShippingForm;
  }
}
