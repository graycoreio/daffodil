import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  @Input() product: DaffProduct;
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
