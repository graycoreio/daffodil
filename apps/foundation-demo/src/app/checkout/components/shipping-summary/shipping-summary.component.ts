import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';

@Component({
  selector: 'shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {

  @Input() shippingInfo: ShippingAddress;
  @Output() editShipping: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editShipping.emit();
  }
}
