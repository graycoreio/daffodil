import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'libs/core/src';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() carts: Cart[];

  constructor() { }

  ngOnInit() {
  }

}
