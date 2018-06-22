import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';

@Component({
  selector: 'shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.scss']
})
export class ShippingSummaryComponent implements OnInit {

  @Input() shippingInfo: ShippingAddress;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editShippingInfo.emit();
  }
}
