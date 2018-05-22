import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '@daffodil/core';

@Component({
  selector: 'cart-tax',
  templateUrl: './cart-tax.component.html',
  styleUrls: ['./cart-tax.component.scss']
})
export class CartTaxComponent implements OnInit {

  @Input() cart: Cart

  constructor() { }

  ngOnInit() {
  }
}
