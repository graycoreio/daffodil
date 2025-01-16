import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
  Inject,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  DaffBase64Service,
  DaffBase64ServiceToken,
} from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';

@Component({
  selector: 'demo-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class ProductComponent implements OnInit {
  @Input() product: DaffProduct;
  @Input() qty: number;
  @Output() updateQty: EventEmitter<any> = new EventEmitter();

  quantity: UntypedFormControl;

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    @Inject(DaffBase64ServiceToken) private base64: DaffBase64Service,
  ) {}

  ngOnInit() {
    if (!this.product) {
      this.router.navigateByUrl('/404');
    }
    this.quantity = this.formBuilder.control(this.qty);
  }

  onUpdateQty(qty: number) {
    this.updateQty.emit(qty);
  }

  get quantityId() {
    return `cart-quantity-${this.base64.encode(this.product.id)}`;
  }
}
