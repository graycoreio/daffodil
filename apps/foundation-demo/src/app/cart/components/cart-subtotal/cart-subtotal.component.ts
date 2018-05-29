import { Component, OnInit, Input } from '@angular/core';
import { CartTotal } from '../../interfaces/cart-total';

@Component({
  selector: 'cart-subtotal',
  templateUrl: './cart-subtotal.component.html',
  styleUrls: ['./cart-subtotal.component.scss']
})
export class CartSubtotalComponent implements OnInit, CartTotal {

  @Input() title: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }
}
