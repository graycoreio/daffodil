import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { Product } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() qty: number;
  @Output() updateQty: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.product) {
      this.router.navigateByUrl('/404');
    }
  }

  onUpdateQty(qty: number) {
    this.updateQty.emit(qty);
  }
}
