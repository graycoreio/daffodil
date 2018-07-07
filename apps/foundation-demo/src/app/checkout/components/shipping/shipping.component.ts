import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  
  @Input() isShippingInfoValid: boolean;
  showShippingForm: boolean;

  ngOnInit() {
    this.showShippingForm = !this.isShippingInfoValid;
  }

  toggleShippingView() {
    this.showShippingForm = !this.showShippingForm;
  }
}
