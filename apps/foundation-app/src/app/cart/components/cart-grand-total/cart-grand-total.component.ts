import { Component, OnInit, Input } from '@angular/core';
import { CartTotal } from '../../interfaces/cart-total';

@Component({
  selector: 'cart-grand-total',
  templateUrl: './cart-grand-total.component.html',
  styleUrls: ['./cart-grand-total.component.scss']
})
export class CartGrandTotalComponent implements OnInit, CartTotal {

  @Input() title: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }
}
